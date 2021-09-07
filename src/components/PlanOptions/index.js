import React from 'react'
import * as FiIcons from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './styles.css'

const PlanOptions = ({ planType, setPlantype }) => {

    return (
        <div style={{ marginBottom: 50, width: 850 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 30, marginTop: 30 }}>
                <div className="plan-option-type_container">
                    <button
                        className={planType === "monthly" ? "plan-option-type_button-active" : "plan-option-type_button"}
                        onClick={() => setPlantype("monthly")}
                        style={{ marginRight: 3 }}>Billed Monthly</button>
                    <button
                        className={planType === "annual" ? "plan-option-type_button-active" : "plan-option-type_button"}
                        onClick={() => setPlantype("annual")}
                    >Billed Annualy</button>
                </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <div className="plan-option_container">
                    <div className="plan-option_header">
                        <p className="plan-option_header-title">Free Tier</p>
                        <div>
                            <p className="plan-option_header-price"><span style={{ fontSize: 18, marginRight: 3 }}>$</span>0,00 <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 20 }}>/ mo</span></p>
                            <p className="plan-option_header-description">Limited trading features</p>
                        </div>
                    </div>
                    <ul className="plan-option_content">
                        <li className="plan-option_item-container">
                            <div className="plan-option_icon-container">
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className="plan-option_item-name">2 Live Bots</p>
                        </li>
                        <li className="plan-option_item-container">
                            <div className="plan-option_icon-container">
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className="plan-option_item-name">2 Demo Bots</p>
                        </li>
                        <li className="plan-option_item-container">
                            <div className="plan-option_icon-container">
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className="plan-option_item-name">3 Indicators</p>
                        </li>
                        <li className="plan-option_item-container">
                            <div className="plan-option_icon-container">
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className="plan-option_item-name">1 Connected Exchanges</p>
                        </li>
                        <li className="plan-option_item-container">
                            <div className="plan-option_icon-container">
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className="plan-option_item-name">Limited Trading Volume</p>
                        </li>
                    </ul>
                    <div className="plan-option_footer">
                        <button className="plan-option_button">Get Starter</button>
                    </div>
                </div>
                <div className="plan-option_container">
                    <div className="plan-option_header">
                        <p className="plan-option_header-title">Trader</p>
                        {planType === "monthly" ?
                            <div>
                                <p className="plan-option_header-price"><span style={{ fontSize: 18, marginRight: 3 }}>$</span>79,90 <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 20 }}>/ mo</span></p>
                                <p className="plan-option_header-description">Up to 25% off with annual plan</p>
                            </div>
                            :
                            <div>
                                <p className="plan-option_header-price"><span style={{ fontSize: 18, marginRight: 3 }}>$</span>59,90 <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 20 }}>/ mo</span></p>
                                <p className="plan-option_header-description">$719,90 will be billed annualy</p>
                            </div>
                        }
                    </div>
                    <ul className="plan-option_content">
                        <li className="plan-option_item-container">
                            <div className="plan-option_icon-container">
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className="plan-option_item-name">20 Live Bots</p>
                        </li>
                        <li className="plan-option_item-container">
                            <div className="plan-option_icon-container">
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className="plan-option_item-name">20 Demo Bots</p>
                        </li>
                        <li className="plan-option_item-container">
                            <div className="plan-option_icon-container">
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className="plan-option_item-name">20 Indicators</p>
                        </li>
                        <li className="plan-option_item-container">
                            <div className="plan-option_icon-container">
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className="plan-option_item-name">25 Candle Patterns</p>
                        </li>
                        <li className="plan-option_item-container">
                            <div className="plan-option_icon-container">
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className="plan-option_item-name">3 Connected Exchanges</p>
                        </li>
                        <li className="plan-option_item-container">
                            <div className="plan-option_icon-container">
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className="plan-option_item-name">Templates Access</p>
                        </li>
                        <li className="plan-option_item-container">
                            <div className="plan-option_icon-container">
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className="plan-option_item-name">Unlimited Trading Volume</p>
                        </li>
                        <li className="plan-option_item-container">
                            <div className="plan-option_icon-container">
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className="plan-option_item-name">Email Support</p>
                        </li>
                    </ul>
                    <div className="plan-option_footer">
                        {
                            planType === "monthly" ?
                                <Link className="plan-option_button"
                                    to={{
                                        pathname: "/settings-billing",
                                        state: [{ id: "price_1JUxlzBlcq11oIounTo8Psb3", name: 'Expert', price: '79,90', billed: "Montly" }]
                                    }}>Get started</Link> :
                                <Link className="plan-option_button"
                                    to={{
                                        pathname: "/settings-billing",
                                        state: [{ id: "price_1JUxlzBlcq11oIou5Fot88gy", name: 'Expert', price: '719,90', billed: "Anually" }]
                                    }}>Get started</Link>
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
export default PlanOptions
