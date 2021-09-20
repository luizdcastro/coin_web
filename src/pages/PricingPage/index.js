import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FiIcons from 'react-icons/fi'
import { connect } from "react-redux";
import SettingsHeader from '../../components/SettingsHeader'
import './styles.css'

const PricingPage = ({ getme }) => {
    const [planType, setPlantype] = useState('annual')

    return (
        <div className="pricing_page">
            <div className="pricing-container">
                <h2 className="pricing-title">Settings</h2>
                <SettingsHeader />
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 25, marginTop: 25 }}>
                    <div className="pricing-type_container">
                        <button
                            className={planType === "monthly" ? "pricing-type_button-active" : "pricing-type_button"}
                            onClick={() => setPlantype("monthly")}
                            style={{ marginRight: 3 }}>Billed Monthly</button>
                        <button
                            className={planType === "annual" ? "pricing-type_button-active" : "pricing-type_button"}
                            onClick={() => setPlantype("annual")}
                        >Billed Annualy</button>
                    </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="pricing_container">
                        <div className="pricing_header">
                            <p className="pricing_header-title">Starter</p>
                            <div>
                                <p className="pricing_header-price"><span style={{ fontSize: 18, marginRight: 3 }}>$</span>0,00 <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 20 }}>/ mo</span></p>
                                <p className="plan-option_header-description">Limited trading features</p>
                            </div>                    </div>
                        <ul className="plan-option_content">
                            <li className="plan-option_item-container">
                                <div className="plan-option_icon-container">
                                    <FiIcons.FiCheck color="#bb86fc" size={17} />
                                </div>
                                <p className="plan-option_item-name" style={{fontSize: '1rem'}}>2 Live Bots</p>
                            </li>
                            <li className="plan-option_item-container">
                                <div className="plan-option_icon-container">
                                    <FiIcons.FiCheck color="#bb86fc" size={17} />
                                </div>
                                <p className="plan-option_item-name" style={{fontSize: '1rem'}}>2 Demo Bots</p>
                            </li>
                            <li className="plan-option_item-container">
                                <div className="plan-option_icon-container">
                                    <FiIcons.FiCheck color="#bb86fc" size={17} />
                                </div>
                                <p className="plan-option_item-name" style={{fontSize: '1rem'}}>3 Indicators</p>
                            </li>
                            <li className="plan-option_item-container">
                                <div className="plan-option_icon-container">
                                    <FiIcons.FiCheck color="#bb86fc" size={17} />
                                </div>
                                <p className="plan-option_item-name" style={{fontSize: '1rem'}}>1 Connected Exchanges</p>
                            </li>
                            <li className="plan-option_item-container">
                                <div className="plan-option_icon-container">
                                    <FiIcons.FiCheck color="#bb86fc" size={17} />
                                </div>
                                <p className="plan-option_item-name" style={{fontSize: '1rem'}}>Limited Trading Volume</p>
                            </li>
                        </ul>
                        <div className="pricing_footer">
                            <button className="pricing_button">Free Tier</button>
                        </div>
                    </div>
                    <div className="pricing_container">
                        <div className="pricing_header">
                            <p className="pricing_header-title">Trader</p>
                            {planType === "monthly" ?
                                <div>
                                    <p className="pricing_header-price"><span style={{ fontSize: 18, marginRight: 3 }}>$</span>59,90 <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 20 }}>/ mo</span></p>
                                    <p className="plan-option_header-description">Up to 30% off with annual plan</p>
                                </div>
                                :
                                <div>
                                    <p className="pricing_header-price"><span style={{ fontSize: 18, marginRight: 3 }}>$</span>39,90 <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 20 }}>/ mo</span></p>
                                    <p className="plan-option_header-description">$478,90 will be billed annualy</p>
                                </div>
                            }
                        </div>
                        <ul className="plan-option_content">
                            <li className="plan-option_item-container">
                                <div className="plan-option_icon-container">
                                    <FiIcons.FiCheck color="#bb86fc" size={17} />
                                </div>
                                <p className="plan-option_item-name" style={{fontSize: '1rem'}}>20 Live Bots</p>
                            </li>
                            <li className="plan-option_item-container">
                                <div className="plan-option_icon-container">
                                    <FiIcons.FiCheck color="#bb86fc" size={17} />
                                </div>
                                <p className="plan-option_item-name" style={{fontSize: '1rem'}}>20 Demo Bots</p>
                            </li>
                            <li className="plan-option_item-container">
                                <div className="plan-option_icon-container">
                                    <FiIcons.FiCheck color="#bb86fc" size={17} />
                                </div>
                                <p className="plan-option_item-name" style={{fontSize: '1rem'}}>20 Indicators</p>
                            </li>
                            <li className="plan-option_item-container">
                                <div className="plan-option_icon-container">
                                    <FiIcons.FiCheck color="#bb86fc" size={17} />
                                </div>
                                <p className="plan-option_item-name" style={{fontSize: '1rem'}}>25 Candle Patterns</p>
                            </li>
                            <li className="plan-option_item-container">
                                <div className="plan-option_icon-container">
                                    <FiIcons.FiCheck color="#bb86fc" size={17} />
                                </div>
                                <p className="plan-option_item-name" style={{fontSize: '1rem'}}>3 Connected Exchanges</p>
                            </li>
                            <li className="plan-option_item-container">
                                <div className="plan-option_icon-container">
                                    <FiIcons.FiCheck color="#bb86fc" size={17} />
                                </div>
                                <p className="plan-option_item-name" style={{fontSize: '1rem'}}>Templates Access</p>
                            </li>
                            <li className="plan-option_item-container">
                                <div className="plan-option_icon-container">
                                    <FiIcons.FiCheck color="#bb86fc" size={17} />
                                </div>
                                <p className="plan-option_item-name" style={{fontSize: '1rem'}}>Unlimited Trading Volume</p>
                            </li>
                            <li className="plan-option_item-container">
                                <div className="plan-option_icon-container">
                                    <FiIcons.FiCheck color="#bb86fc" size={17} />
                                </div>
                                <p className="plan-option_item-name" style={{fontSize: '1rem'}}>Email Support</p>
                            </li>
                        </ul>
                        <div className="pricing_footer">
                            {getme.stripe.subscription.active ?
                                planType === "monthly" ?
                                    <Link className="pricing_button-light" to="/settings-billing">Current Plan</Link> :
                                    <Link className="pricing_button-light" to="/settings-billing">Current Plan</Link>
                                :
                                planType === "monthly" ?
                                    <Link className="pricing_button"
                                        to={{
                                            pathname: "/settings-billing",
                                            state: [{ id: "price_1JUxlzBlcq11oIounTo8Psb3", name: 'Trader', price: '79,90', billed: "Montly" }]
                                        }}>Upgrade Plan</Link> :
                                    <Link className="pricing_button"
                                        to={{
                                            pathname: "/settings-billing",
                                            state: [{ id: "price_1JUxlzBlcq11oIou5Fot88gy", name: 'Trader', price: '719,90', billed: "Anually" }]
                                        }}>Upgrade Plan</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    getme: state.getme,
});

export default connect(mapStateToProps, null)(PricingPage);