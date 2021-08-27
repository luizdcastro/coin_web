import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../../components/CheckoutForm';
import './styles.css'

const stripePromise = loadStripe("pk_test_51GsUZYBlcq11oIoumpeTN4cQLhpBzR1fNI0dHs7OnNcMu2jk8B3spjtYtPgYlqywg4JaNosLVnYcnKBPTgttmnF100rrqFRmjh");

const CheckoutPage = () => {

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}

export default CheckoutPage