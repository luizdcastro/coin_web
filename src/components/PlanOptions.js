import React from 'react'
import * as FiIcons from 'react-icons/fi'
import Link from 'next/link'
import style from '../styles/PlanOptions.module.css'

const PlanOptions = ({ planType, setPlantype }) => {

    return (
        <div style={{ marginBottom: 50, width: 850 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 30, marginTop: 30 }}>
                <div className={style.plan_type_container}>
                    <button
                        className={planType === "monthly" ? style.plan_type_button_active : style.plan_type_button}
                        onClick={() => setPlantype("monthly")}
                        style={{ marginRight: 3 }}>Billed Monthly</button>
                    <button
                        className={planType === "annual" ? style.plan_type_button_active : style.plan_type_button}
                        onClick={() => setPlantype("annual")}
                    >Billed Annualy</button>
                </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <div className={style.plan_container}>
                    <div className={style.plan_header}>
                        <p className={style.plan_header_title}>Free Tier</p>
                        <div>
                            <p className={style.plan_header_price}><span style={{ fontSize: 18, marginRight: 3 }}>$</span>0,00 <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 20 }}>/ mo</span></p>
                            <p className={style.plan_header_description}>Limited trading features</p>
                        </div>
                    </div>
                    <ul className={style.plan_content}>
                        <li className={style.plan_item_container}>
                            <div className={style.plan_icon_container}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className={style.plan_item_name}>2 Live Bots</p>
                        </li>
                        <li className={style.plan_item_container}>
                            <div className={style.plan_icon_container}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className={style.plan_item_name}>2 Demo Bots</p>
                        </li>
                        <li className={style.plan_item_container}>
                            <div className={style.plan_icon_container}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className={style.plan_item_name}>3 Indicators</p>
                        </li>
                        <li className={style.plan_item_container}>
                            <div className={style.plan_icon_container}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className={style.plan_item_name}>1 Connected Exchanges</p>
                        </li>
                        <li className={style.plan_item_container}>
                            <div className={style.plan_icon_container}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className={style.plan_item_name}>Limited Trading Volume</p>
                        </li>
                    </ul>
                    <div className={style.plan_footer}>
                        <a className={style.plan_button}>Get started</a>
                    </div>
                </div>
                <div className={style.plan_container}>
                    <div className={style.plan_header}>
                        <p className={style.plan_header_title}>Trader</p>
                        {planType === "monthly" ?
                            <div>
                                <p className={style.plan_header_price}><span style={{ fontSize: 18, marginRight: 3 }}>$</span>59,90 <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 20 }}>/ mo</span></p>
                                <p className={style.plan_header_description}>Up to 30% off with annual plan</p>
                            </div>
                            :
                            <div>
                                <p className={style.plan_header_price}><span style={{ fontSize: 18, marginRight: 3 }}>$</span>39,90 <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 20 }}>/ mo</span></p>
                                <p className={style.plan_header_description}>$478,90 will be billed annualy</p>
                            </div>
                        }
                    </div>
                    <ul className={style.plan_content}>
                        <li className={style.plan_item_container}>
                            <div className={style.plan_icon_container}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className={style.plan_item_name}>20 Live Bots</p>
                        </li>
                        <li className={style.plan_item_container}>
                            <div className={style.plan_icon_container}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className={style.plan_item_name}>20 Demo Bots</p>
                        </li>
                        <li className={style.plan_item_container}>
                            <div className={style.plan_icon_container}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className={style.plan_item_name}>20 Indicators</p>
                        </li>
                        <li className={style.plan_item_container}>
                            <div className={style.plan_icon_container}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className={style.plan_item_name}>25 Candle Patterns</p>
                        </li>
                        <li className={style.plan_item_container}>
                            <div className={style.plan_icon_container}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className={style.plan_item_name}>3 Connected Exchanges</p>
                        </li>
                        <li className={style.plan_item_container}>
                            <div className={style.plan_icon_container}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className={style.plan_item_name}>Templates Access</p>
                        </li>
                        <li className={style.plan_item_container}>
                            <div className={style.plan_icon_container}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className={style.plan_item_name}>Unlimited Trading Volume</p>
                        </li>
                        <li className={style.plan_item_container}>
                            <div className={style.plan_icon_container}>
                                <FiIcons.FiCheck color="#bb86fc" size={17} />
                            </div>
                            <p className={style.plan_item_name}>Email Support</p>
                        </li>
                    </ul>
                    <div className={style.plan_footer}>
                        <a className={style.plan_button}>Get started</a>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default PlanOptions