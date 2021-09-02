import React, { useState } from 'react'
import axios from 'axios'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { Ellipsis } from 'react-css-spinners';
import { connect } from "react-redux";
import * as IoIcons from "react-icons/io5";
import { getMe } from '../../redux/actions/UserActions'
import "./styles.css"

const CARD_OPTIONS = {
    hidePostalCode: true,
    style: {
        base: {
            color: "rgba(255,255,255, 0.8)",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "15px",
            "::placeholder": {
                color: "rgba(255,255,255, 0.8)"
            },
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    },
};

const CheckoutForm = ({ getme, planDetails, disptachGetMe }) => {
    const [loading, setLoading] = useState(false)
    const [resError, setResError] = useState("")
    const [messages, setMessage] = useState("");
    const [name, setName] = useState("")
    const stripe = useStripe()
    const elements = useElements()

    console.log(getme)

    const handleSubmmit = async (event) => {
        event.preventDefault()
        setLoading(true)

        const subscription = await axios.post('http://localhost:8000/v1/payment/create-subscription', { priceId: planDetails.id, customer: getme.stripe.id })

        if (subscription.status === 200) {
            const cardElement = elements.getElement(CardElement);

            const { paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
                billing_details: {
                    name: getme.name,
                    email: getme.email
                },
            })

            const { error, paymentIntent } = await stripe.confirmCardPayment(subscription.data.clientSecret, { payment_method: paymentMethod.id });

            if (error) {
                setMessage(error.message);
                setLoading(false)
                return;
            } else {
                if (paymentIntent.status === "succeeded") {
                    await axios.patch(`http://localhost:8000/v1/user/update/${getme.id}`,
                        {
                            "stripe.subscription": {
                                id: subscription.data.subscriptionId,
                                client_secret: subscription.data.clientSecret,
                                plan: planDetails.name,
                                price: planDetails.price,
                                billed: planDetails.billed,
                                active: true
                            },
                            "stripe.payment_method": {
                                id: paymentMethod.id,
                                last4: paymentMethod.card.last4,
                                brand: paymentMethod.card.brand,
                                expire: `${paymentMethod.card.exp_month}/${paymentMethod.card.exp_year}`
                            },

                        })
                    disptachGetMe()
                    setLoading(false)
                }
            }

        }
    }

    return (
        <div className="checkout-modal-container">
            <div>
                <h2 style={{ fontSize: 22, fontWeight: 500, marginBottom: 25, color: 'rgba(255,255,255,0.8)' }}>Enter your card details.</h2>
                <ul style={{ marginBottom: 25 }}>
                    <li style={{ display: 'flex' }}>
                        <IoIcons.IoArrowForward size={18} color='#bb86fc' />
                        <p style={{ color: 'rgba(255,255,255,0.8)', marginLeft: 8, fontWeight: 300 }}>Total due now $ <span style={{ fontWeight: 600 }}>{planDetails.price}</span></p>
                    </li>
                    <li style={{ display: 'flex' }}>
                        <IoIcons.IoArrowForward size={18} color='#bb86fc' />
                        <p style={{ color: 'rgba(255,255,255,0.8)', marginLeft: 8, fontWeight: 300 }}>Subscribing to <span style={{ fontWeight: 600 }}>{planDetails.name} </span>plan</p>
                    </li>
                    <li style={{ display: 'flex' }}>
                        <IoIcons.IoArrowForward size={18} color='#bb86fc' />
                        <p style={{ color: 'rgba(255,255,255,0.8)', marginLeft: 8, fontWeight: 300 }}>Billed <span style={{ fontWeight: 600 }}>{planDetails.billed}</span></p>
                    </li>
                </ul>
                <CardElement options={CARD_OPTIONS} />
                <div style={{ position: 'relative' }}>
                    <IoIcons.IoPersonOutline size={22} style={{ position: 'absolute', top: 23, left: 12, color: 'rgba(255,255,255,0.3)' }} />
                    <input placeholder="Cardholder name" className="checkout-input" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                {resError ? <p className="checkout-error">{resError}</p> : null}
                <button className="checkout-button" disabled={loading ? true : false} onClick={handleSubmmit}>
                    {
                        !loading ? 'Subscribe' : <span> <Ellipsis color="#FFF" size={38} style={{ marginTop: 6 }} /></span>
                    }
                </button>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    disptachGetMe: () => dispatch(getMe()),
});

const mapStateToProps = (state) => ({
    getme: state.getme,
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);