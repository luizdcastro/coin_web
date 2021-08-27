import React, { useState } from 'react'
import StripeCheckout from '../CardInput'
import './styles.css'

const PlanOptions = () => {
    const [planType, setPlantype] = useState('annual')
    return (
        <div className="plan_page">
                        <p style={{textAlign: 'center', marginBottom: 15, fontWeight: 400}}>Up to 25% discount with annual plan</p>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                <div className="plan-type_container">
                    <button
                        className={planType === "monthly" ? "plan-type_button-active" : "plan-type_button"}
                        onClick={() => setPlantype("monthly")}
                        style={{ marginRight: 3 }}>Monthly</button>
                    <button
                        className={planType === "annual" ? "plan-type_button-active" : "plan-type_button"}
                        onClick={() => setPlantype("annual")}
                    >Annual</button>
                </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div className="plan_container">
                    <div className="plan_header">
                        <p className="plan_header-title">Starter</p>
                        {planType === "monthly" ?
                            <p className="plan_header-price">$39,90 <span style={{ color: 'rgba(255,255,255,0.6)', fontSize:20 }}>/ mo</span></p>
                            :
                            <div>
                                <p className="plan_header-price">$29,90 <span style={{ color: 'rgba(255,255,255,0.6)',  fontSize:20  }}>/ mo</span></p>
                                <p style={{color: 'rgba(255,255,255,0.6)',  fontSize:14, marginTop: 5, fontWeight: 300 }}>$359 will be billed yearly</p>
                            </div>
                        }                    </div>
                    <div className="plan_content">
                        <p>7 Live Bots</p>
                        <p>10 Indicators</p>
                        <p>1 Connected Exchanges</p>
                        <p>Limited Trading Volume</p>
                    </div>
                    <div className="plan_footer">
                        <button className="plan_button-light">Upgrade Plan</button>
                    </div>
                </div>
                <div className="plan_container">
                    <div className="plan_header">
                        <p className="plan_header-title">Trader</p>
                        {planType === "monthly" ?
                            <p className="plan_header-price">$79,90 <span style={{ color: 'rgba(255,255,255,0.6)', fontSize:20 }}>/ mo</span></p>
                            :
                            <div>
                                <p className="plan_header-price">$59,90 <span style={{ color: 'rgba(255,255,255,0.6)',  fontSize:20  }}>/ mo</span></p>
                                <p style={{color: 'rgba(255,255,255,0.6)',  fontSize:14, marginTop: 5, fontWeight: 300 }}>$719 will be billed yearly</p>
                            </div>
                        }
                    </div>
                    <div className="plan_content">
                        <p>20 Live Bots</p>
                        <p>20 Indicators</p>
                        <p>25 Candle Patterns</p>
                        <p>3 Connected Exchanges</p>
                        <p>Templates Access</p>
                        <p>Unlimited Trading Volume</p>
                        <p>Email Support</p>
                    </div>
                    <div className="plan_footer">
                        <button className="plan_button">Upgrade Plan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanOptions
