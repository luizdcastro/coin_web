import React, { useState } from 'react'
import axios from 'axios'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { Ellipsis } from 'react-css-spinners'
import { connect } from "react-redux"
import * as IoIcons from "react-icons/io5"
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

const CheckoutForm = ({ getme, disptachGetMe, handleClose }) => {
    const [loading, setLoading] = useState(false)
    const [resError, setResError] = useState("")
    const [name, setName] = useState("")
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmmit = async (event) => {
        event.preventDefault()
        setLoading(true)

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
                name: getme.name,
                email: getme.email
            },
        })

        if (error) {
            setLoading(false)
            setResError(error.message)
            return
        } else {
            await axios.post('http://localhost:8000/v1/payment/update-payment', {
                userId: getme.id,
                customerId: getme.stripe.id,
                subscriptionId: getme.stripe.subscription.id,
                paymentMethod: paymentMethod
            })
            setLoading(false)
            disptachGetMe()
            handleClose()
        }
    }

    const handleOutsideClick = (e) => {
        if (e.target.id === "modal") {
            handleClose()
        }
    }

    return (
        <div className="update-payment_modal" onClick={handleOutsideClick} id="modal">
            <div className="update-payment_container">
                <div>
                    <h2 style={{ fontSize: 22, fontWeight: 500, marginBottom: 25, color: 'rgba(255,255,255,0.8)' }}>Change your payment method.</h2>
                    <CardElement options={CARD_OPTIONS} />
                    <div style={{ position: 'relative' }}>
                        <IoIcons.IoPersonOutline size={22} style={{ position: 'absolute', top: 23, left: 12, color: 'rgba(255,255,255,0.3)' }} />
                        <input placeholder="Cardholder name" className="update-payment-input" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    {resError ? <p className="update-payment-error">{resError}</p> : null}
                    <button className="update-payment-button" disabled={loading ? true : false} onClick={handleSubmmit}>
                        {
                            !loading ? 'Save Changes' : <span> <Ellipsis color="#FFF" size={38} style={{ marginTop: 6 }} /></span>
                        }
                    </button>
                    <button className="update-payment-button-light" onClick={handleClose}>Cancel</button>
                </div>
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