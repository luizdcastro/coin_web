import React from 'react'
import './styles.css'

const PlanOptions = () => {
    return (
        <div className="plan_page">           
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: 30}}>
            <div className="plan_container">
                <div className="plan_header">
                    <p className="plan_header-title">Starter</p>
                    <p className="plan_header-price">$39,90 <span style={{ color: 'grey' }}>/ mo</span></p>
                </div>
                <div className="plan_content">
                    <p>5 Live Bots</p>
                    <p>20 Indicators</p>
                    <p>2 Connected Exchanges</p>
                    <p>Unlimited Trading Volume</p>
                    <p>Basic Support</p>
                </div>
                <div className="plan_footer">
                    <button className="plan_button-light">Get Started</button>
                </div>
            </div>
            <div className="plan_container">
                <div className="plan_header">
                    <p className="plan_header-title">Trader</p>
                    <p className="plan_header-price">$79,90 <span style={{ color: 'grey' }}>/ mo</span></p>
                </div>
                <div className="plan_content">
                    <p>15 Live Bots</p>
                    <p>20 Indicators</p>
                    <p>25 Candle Patterns</p>
                    <p>3 Connected Exchanges</p>
                    <p>Unlimited Trading Volume</p>
                    <p>Basic Support</p>
                </div>
                <div className="plan_footer">
                    <button className="plan_button">Get Started</button>
                </div>
            </div>
            <div className="plan_container">
                <div className="plan_header">
                    <p className="plan_header-title">Premium</p>
                    <p className="plan_header-price">$239,90 <span style={{ color: 'grey' }}>/ mo</span></p>
                </div>
                <div className="plan_content">
                    <p>40 Live Bots</p>
                    <p>20 Indicators</p>
                    <p>25 Candle Patterns</p>
                    <p>Unlimited Exchanges</p>
                    <p>Unlimited Trading Volume</p>
                    <p>Premium Support</p>
                </div>
                <div className="plan_footer">
                    <button className="plan_button-light">Get Started</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default PlanOptions
