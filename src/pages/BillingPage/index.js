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
import Modal from '@material-ui/core/Modal'
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
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                        <div className="billing-currentplan_container">
                            <div>
                                <h2 style={{ fontSize: 22, fontWeight: 500, marginBottom: 25, color: 'rgba(255,255,255,0.8)' }}>Subscription details.</h2>
                                <p style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 300 }}>Current plan <span style={{ fontWeight: 600 }}>{getme.stripe.subscription.plan}</span></p>
                                <p style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 300 }}>Billing <span style={{ fontWeight: 600 }}>${getme.stripe.subscription.price}</span> / {getme.stripe.subscription.billed}</p>
                                <div>
                                    <p style={{ marginTop: 15, marginBottom: 8, fontWeight: 300 }}>Payment method</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', border: 'solid 1px rgba(255,255,255,0.5)', padding: 8, borderRadius: 3 }}>
                                        <p>{getme.stripe.payment_method.brand.toUpperCase()}</p>
                                        <p>****{getme.stripe.payment_method.last4}</p>
                                        <p>Expires {getme.stripe.payment_method.expire}</p>
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
                <Modal open={open} onClose={handleClose}>
                    <Elements stripe={stripePromise}>
                        <UpdatePayment handleClose={handleClose}/>
                    </Elements>
                </Modal>

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