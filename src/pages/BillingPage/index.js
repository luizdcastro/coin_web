import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import { getMe } from '../../redux/actions/UserActions'
import CheckoutForm from "../../components/CheckoutForm"
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import SettingsHeader from '../../components/SettingsHeader'
import { useLocation } from 'react-router-dom'
import UpdatePayment from '../../components/UpdatePayment'
import axios from 'axios'

import './styles.css'

const stripePromise = loadStripe("pk_test_51GsUZYBlcq11oIoumpeTN4cQLhpBzR1fNI0dHs7OnNcMu2jk8B3spjtYtPgYlqywg4JaNosLVnYcnKBPTgttmnF100rrqFRmjh");

const AccountSettings = ({ disptachGetMe, getme }) => {
    const [planDetails, setPlanDetails] = useState({})
    const [open, setOpen] = useState(false)
    const { state } = useLocation();

    useEffect(() => disptachGetMe(),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    useEffect(() => {
        if (state !== undefined) {
            setPlanDetails(state[0])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleDeleteSubscription = async () => {
        await axios.post('http://localhost:8000/v1/payment/delete-subscription', { userId: getme.id, subscriptionId: getme.stripe.subscription.id })
        disptachGetMe()
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="billing_page">
            <div className="billing-container">
                <h2 className="billing-title">Settings</h2>
                <SettingsHeader />
                {planDetails?.id && !getme.stripe.subscription.active ?
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm planDetails={planDetails} />
                        </Elements>
                    </div>
                    : null
                }
                {getme.stripe.subscription.active ?
                    <div className="subscription-details_container">
                        <div className="billing-currentplan_container">
                            <div>
                                <h2 className="subscription-details_title">Subscription details.</h2>
                                <p className="subscription-details_text">Current plan <span style={{ fontWeight: 600 }}>{getme.stripe.subscription.plan}</span></p>
                                <p className="subscription-details_text">Billing <span style={{ fontWeight: 600 }}>${getme.stripe.subscription.price}</span> / {getme.stripe.subscription.billed}</p>
                                <div>
                                    <p className="subscription-details_subtitle">Payment method</p>
                                    <div className="subscription-details_card">
                                        <p className="subscription-details_card-text">{getme.stripe.payment_method.brand.toUpperCase()}</p>
                                        <p className="subscription-details_card-text">****{getme.stripe.payment_method.last4}</p>
                                        <p className="subscription-details_card-text">Expires {getme.stripe.payment_method.expire}</p>
                                    </div>
                                </div>
                                <button className="billing-currentplan_button" onClick={handleOpen}>Update credit card</button>
                                <button className="billing-currentplan_button-light" onClick={handleDeleteSubscription}>Cancel subscription</button>
                            </div>
                        </div>
                    </div>
                    : null
                }

                {!planDetails?.id && !getme.stripe.subscription.active ?
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                        <div className="billing-no-result">
                            <div>
                                <p style={{ fontWeight: 500, color: 'rgba(255,255,255, 0.8)', fontSize: 18, textAlign: 'center', marginBottom: 10 }}>No active plans were found</p>
                                <p style={{ fontWeight: 400, color: 'rgba(255,255,255, 0.8)', fontSize: 14, textAlign: 'center' }}>You haven't selected or subscribed to any plan yet.</p>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Link className="billing-get-started" to="/settings-pricing">Select your plan</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null}
                {open && (
                    <div onClose={handleClose}>
                        <Elements stripe={stripePromise}>
                            <UpdatePayment handleClose={handleClose} />
                        </Elements>
                    </div>
                )}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    disptachGetMe: () => dispatch(getMe()),
});

const mapStateToProps = (state) => ({
    getme: state.getme,
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);