import React, { useState } from 'react'
import './styles.css'

const PlanOptions = () => {
    const [planType, setPlantype] = useState('annually')
    return (
        <div className="plan_page">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 25 }}>
                <div className="plan-type_container">
                    <button
                        className={planType === "monthly" ? "plan-type_button-active" : "plan-type_button"}
                        onClick={() => setPlantype("monthly")}
                        style={{ marginRight: 3 }}>Monthly</button>
                    <button
                        className={planType === "annually" ? "plan-type_button-active" : "plan-type_button"}
                        onClick={() => setPlantype("annually")}
                    >Annually</button>
                </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div className="plan_container">
                    <div className="plan_header">
                        <p className="plan_header-title">Starter</p>
                        <p className="plan_header-price">Free <span style={{ color: 'rgba(255,255,255,0.6)' }}>/ mo</span></p>
                    </div>
                    <div className="plan_content">
                        <p>2 Live Bots</p>
                        <p>3 Indicators</p>
                        <p>1 Connected Exchanges</p>
                        <p>Limited Trading Volume</p>
                    </div>
                    <div className="plan_footer">
                        <button className="plan_button-light">Current Plan</button>
                    </div>
                </div>
                <div className="plan_container">
                    <div className="plan_header">
                        <p className="plan_header-title">Pro</p>
                        <p className="plan_header-price">$79,90 <span style={{ color: 'rgba(255,255,255,0.6)' }}>/ mo</span></p>
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
                        <button className="plan_button">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanOptions
