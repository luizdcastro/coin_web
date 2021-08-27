import React, { useState } from 'react'
import axios from 'axios'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { connect } from "react-redux";
import CardInput from '../CardInput'
import "./styles.css"

const CheckoutForm = ({ getme }) => {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event) => {
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const result = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
            billing_details: {
                email: getme.email,
            },
        });

        if (result.error) {
            console.log(result.error.message);
        } else {
            const res = await axios.post('http://localhost:8000/v1/user/subscription', { 'payment_method': result.paymentMethod.id, 'email': getme.email });
            // eslint-disable-next-line camelcase
            const { client_secret, status } = res.data;

            if (status === 'requires_action') {
                stripe.confirmCardPayment(client_secret).then(function (result) {
                    if (result.error) {
                        console.log('There was an issue!');
                        console.log(result.error);
                        // Display error message in your UI.
                        // The card was declined (i.e. insufficient funds, card has expired, etc)
                    } else {
                        console.log('You got the money!');
                        // Show a success message to your customer
                    }
                });
            } else {
                console.log('You got the money!');
                // No additional information was needed
                // Show a success message to your customer
            }
        }
    };


    return (
        <div className="checkout-form">
            <CardInput />
            <div >
                <button className="checkout-button" onClick={handleSubmit}>Subscribe</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    getme: state.getme,
});

export default connect(mapStateToProps, null)(CheckoutForm);