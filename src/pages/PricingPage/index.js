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
                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, marginTop: 5, fontWeight: 400 }}>Limited trading features</p>
                            </div>                    </div>
                        <ul className="pricing_content">
                            <li style={{ display: 'flex', marginBottom: 3 }}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} style={{ marginRight: 5 }} />
                                <p>2 Live Bots</p>
                            </li>
                            <li style={{ display: 'flex', marginBottom: 3 }}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} style={{ marginRight: 5 }} />
                                <p>2 Demo Bots</p>
                            </li>
                            <li style={{ display: 'flex', marginBottom: 3 }}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} style={{ marginRight: 5 }} />
                                <p>3 Indicators</p>
                            </li>
                            <li style={{ display: 'flex', marginBottom: 3 }}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} style={{ marginRight: 5 }} />
                                <p>1 Connected Exchanges</p>
                            </li>
                            <li style={{ display: 'flex', marginBottom: 3 }}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} style={{ marginRight: 5 }} />
                                <p>Limited Trading Volume</p>
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
                                    <p className="pricing_header-price"><span style={{ fontSize: 18, marginRight: 3 }}>$</span>79,90 <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 20 }}>/ mo</span></p>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, marginTop: 5, fontWeight: 400 }}>Up to 25% off with annual plan</p>
                                </div>
                                :
                                <div>
                                    <p className="pricing_header-price"><span style={{ fontSize: 18, marginRight: 3 }}>$</span>59,90 <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 20 }}>/ mo</span></p>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, marginTop: 5, fontWeight: 400 }}>$719,90 will be billed annualy</p>
                                </div>
                            }
                        </div>
                        <ul className="pricing_content">
                            <li style={{ display: 'flex', marginBottom: 3 }}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} style={{ marginRight: 5 }} />
                                <p>20 Live Bots</p>
                            </li>
                            <li style={{ display: 'flex', marginBottom: 3 }}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} style={{ marginRight: 5 }} />
                                <p>20 Demo Bots</p>
                            </li>
                            <li style={{ display: 'flex', marginBottom: 3 }}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} style={{ marginRight: 5 }} />
                                <p>20 Indicators</p>
                            </li>
                            <li style={{ display: 'flex', marginBottom: 3 }}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} style={{ marginRight: 5 }} />
                                <p>25 Candle Patterns</p>
                            </li>
                            <li style={{ display: 'flex', marginBottom: 3 }}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} style={{ marginRight: 5 }} />
                                <p>3 Connected Exchanges</p>
                            </li>
                            <li style={{ display: 'flex', marginBottom: 3 }}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} style={{ marginRight: 5 }} />
                                <p>Templates Access</p>
                            </li>
                            <li style={{ display: 'flex', marginBottom: 3 }}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} style={{ marginRight: 5 }} />
                                <p>Unlimited Trading Volume</p>
                            </li>
                            <li style={{ display: 'flex', marginBottom: 3 }}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} style={{ marginRight: 5 }} />
                                <p>Email Support</p>
                            </li>
                        </ul>
                        <div className="pricing_footer">
                            {getme?.stripe?.subscription === "active" ?
                                planType === "monthly" ?
                                    <Link className="pricing_button-light" to="/settings-billing">Current Plan</Link> :
                                    <Link className="pricing_button-light" to="/settings-billing">Current Plan</Link>
                                :
                                planType === "monthly" ?
                                    <Link className="pricing_button"
                                        to={{
                                            pathname: "/settings-billing",
                                            state: [{ id: "price_1JUxlzBlcq11oIounTo8Psb3", name: 'Expert', price: '79,90', billed: "Montly" }]
                                        }}>Upgrade Plan</Link> :
                                    <Link className="pricing_button"
                                        to={{
                                            pathname: "/settings-billing",
                                            state: [{ id: "price_1JUxlzBlcq11oIou5Fot88gy", name: 'Expert', price: '719,90', billed: "Anually" }]
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