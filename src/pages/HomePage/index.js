import React, { useState } from 'react'
import MainHeader from '../../components/MainHeader'
import * as MdIcons from 'react-icons/md'
import * as IoIcons from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo'
import PlanOptions from '../../components/PlanOptions'
import HeroImage from '../../assets/images/hero-image.png'
import FeaturesImage from '../../assets/images/features.png'
import BinanceLogo from '../../assets/images/logos/binance.png'
import KrakenLogo from '../../assets/images/logos/kraken.png'
import HuobiLogo from '../../assets/images/logos/huobi.png'
import OkexLogo from '../../assets/images/logos/okex.png'
import FtxLogo from '../../assets/images/logos/ftx.png'
import BybitLogo from '../../assets/images/logos/bybit.png'

import './styles.css'

const HomePage = () => {
    const [planType, setPlantype] = useState('annual')

    return (
        <React.Fragment>
            <MainHeader />
            <div className="home_flex-center" id="home">
                <div className="home-width">
                    <div className="home-hero_section">
                        <div>
                            <h1 className="home-hero_section-title">Automate your<br />trading strategies</h1>
                            <h2 className="home-hero_section-subtitle" >Create your custom crypto trading bot without coding skills and never miss an opportunity or get caught in a dip.</h2>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 40 }}>
                                <Link className="homepage-getstarted-button" to="/register">
                                    <p style={{ marginLeft: 14, fontSize: 16, fontWeight: 600 }}>Start Now</p>
                                    <MdIcons.MdChevronRight size={24} style={{ marginTop: 1 }} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="home_flex-center">
                        <div style={{ width: 900 }}>
                            <img src={HeroImage} alt="home_image" className="home-image_cotainer" />
                        </div>
                    </div>
                    <div className="home-section_container-exchanges">
                        <div style={{ marginTop: 40, marginBottom: 10 }}>
                            <p className="home-section_exchange-title">We are integrated with</p>
                            <div className="home-section_box-exchanges">
                                <div style={{ width: 230, height: 50, marginRight: 50, marginBottom: 15 }}>
                                    <img src={BinanceLogo} alt="binance" className="home-exchange_logo" />
                                </div>
                                <div style={{ width: 110, height: 50, marginRight: 50, marginBottom: 15 }}>
                                    <img src={BybitLogo} alt="bybit" className="home-exchange_logo" />
                                </div>
                                <div style={{ width: 180, height: 50, marginRight: 50, marginTop: 12, marginBottom: 5 }}>
                                    <img src={KrakenLogo} alt="kraken" className="home-exchange_logo" />
                                </div>
                                <div style={{ width: 240, height: 50, marginRight: 50, marginTop: 11, marginBottom: 20 }}>
                                    <img src={HuobiLogo} alt="huobi" className="home-exchange_logo" />
                                </div>
                                <div style={{ width: 140, height: 50, marginRight: 50, marginBottom: 30, marginTop: 5 }}>
                                    <img src={FtxLogo} alt="ftx" className="home-exchange_logo" />
                                </div>
                                <div style={{ width: 160, height: 50, marginRight: 50, marginBottom: 30, marginTop: 3 }}>
                                    <img src={OkexLogo} alt="okex" className="home-exchange_logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home_flex-center" id="about">
                        <div style={{ maxWidth: 650, marginBottom: 10 }}>
                            <h2 className="home-features_section-title">Level Up Your Trading Strategies</h2>
                            <p className="home-features_section-description">We’ve created a modern bot builder that execute transactions according to the parameters you set, and we have connected crypto exchanges and financial protection algorithms to it.</p>
                        </div>
                    </div>
                    <div className="home-section_container">
                        <ul className="home-section_about">
                            <li className="home-section_about-list">
                                <div className="home-section_about-icon">
                                    <IoIcons.IoCloudDone size={32} color="rgb(130, 87, 230)" />
                                </div>
                                <h3 className="home-section_about-title">Cloud-based</h3>
                                <p className="home-section_about-description">Your bots run reliably 24/7 and never miss a trade, we eliminate the need to setup your own server.</p>
                            </li>
                            <li className="home-section_about-list">
                                <div className="home-section_about-icon">
                                    <IoIcons.IoStatsChart size={30} color="rgb(130, 87, 230)" />
                                </div>
                                <h3 className="home-section_about-title">Multiple indicators</h3>
                                <p className="home-section_about-description">We offer more than 50 advance indicators including moving averages and candle patterns detection.</p>
                            </li>
                            <li className="home-section_about-list">
                                <div className="home-section_about-icon">
                                    <IoIcons.IoWallet size={32} color="rgb(130, 87, 230)" />
                                </div>
                                <h3 className="home-section_about-title">Secure</h3>
                                <p className="home-section_about-description">Keep your funds safe on your own exchange. The communication is made by official exchange APIs.</p>
                            </li>
                            <li className="home-section_about-list">
                                <div className="home-section_about-icon">
                                    <IoIcons.IoServer size={32} color="rgb(130, 87, 230)" />
                                </div>
                                <h3 className="home-section_about-title">High frequence</h3>
                                <p className="home-section_about-description">Algorithms and indicators are calculated in real-time in our powerful servers based on live market data.</p>
                            </li>
                            <li className="home-section_about-list">
                                <div className="home-section_about-icon">
                                    <IoIcons.IoPlay size={32} color="rgb(130, 87, 230)" />
                                </div>
                                <h3 className="home-section_about-title">Easy to start</h3>
                                <p className="home-section_about-description">No code skills are required, you can build your strategy easily by selecting your favorite indicators.</p>
                            </li>
                            <li className="home-section_about-list">
                                <div className="home-section_about-icon">
                                    <IoIcons.IoBagCheck size={32} color="rgb(130, 87, 230)" />
                                </div>
                                <h3 className="home-section_about-title">Encrypted</h3>
                                <p className="home-section_about-description">We store API keys in encrypted form AES 256 and all trading operations are end-to-end encrypted.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="home_flex-center">
                        <div className="home-middle_section">
                            <div className="home_flex-center">
                                <h2 className="home-middle_section-title">Professional tools for automating trading on cryptocurrency exchanges</h2>
                            </div>
                            <div className="home_flex-center">
                                <div style={{ maxWidth: 700 }}>
                                    <img src={HeroImage} alt="home_image" className="home-image_cotainer" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home_flex-center" id="features">
                        <div style={{ maxWidth: 600, marginBottom: 50 }}>
                            <h2 className="home-features_section-title">Built for your workflow</h2>
                            <p className="home-features_section-description">Tradingrid provides all tools for the creation of your custom trade automation, allowing you to remove the emotions from your operations and get stick with the strategy as a professional.</p>
                        </div>
                    </div>
                    <div className="home-features_section-container_01">
                        <div>
                            <h3 className="home-features_section-subtitle" style={{ textAlign: 'center' }}>Setup your exchange</h3>
                            <p className="home-features_section-text" style={{ textAlign: 'center' }}>Start selectting your favorite exchange and connect with your API keys. We also provide an demo exchange by default for tests purposes before your strategy go live. Spot trading is avaliable with Binance, Kraken, FTX and OKEx, while Margin/Leverage is supported with ByBit.</p>
                        </div>
                        <div style={{ marginBottom: 20 }}>
                            <div style={{ maxWidth: 450 }}>
                                <img src={FeaturesImage} alt="home_image" className="home-image_cotainer" />
                            </div>
                        </div>
                    </div>
                    <div className="home-features_section-container_02">
                        <div style={{ marginTop: 20 }}>
                            <div style={{ maxWidth: 450 }}>
                                <img src={FeaturesImage} alt="home_image" className="home-image_cotainer" />
                            </div>
                        </div>
                        <div style={{ marginTop: 20 }}>
                            <h3 className="home-features_section-subtitle">Build your strategy</h3>
                            <p className="home-features_section-text">After connect your exchange, you are ready to start building your strategy slecting the "Create Bot" feature and setup your entries and exits conditions based on indicators and custom settings. Subscribers have the option to quick start with "Templates" feature.</p>
                        </div>
                    </div>
                    <div className="home-features_section-container_03">
                        <div>
                            <h3 className="home-features_section-subtitle">Analyze the results</h3>
                            <p className="home-features_section-text">You can easely follow your bot results ont the Strategy dashboard and check in details all oppened and closed orders. Bots can be paused, edited or deleted at any time and all errors such as insufucient balance or credentials issues can be trackked in the "Event Logs" tab.</p>
                        </div>
                        <div style={{ marginBottom: 20 }}>
                            <div style={{ maxWidth: 450 }}>
                                <img src={FeaturesImage} alt="home_image" className="home-image_cotainer" />
                            </div>
                        </div>
                    </div>
                    <div className="home-price_section" id="pricing">
                        <div>
                            <h2 className="home-price_section-title">Simple, transarent pricing</h2>
                            <p className="home-price_section-subtitle">Start your free tier now and upgrade to our professional trader features as you go. There are no extra fees or commissions per trade.</p>
                        </div>
                    </div>
                    <div className="home_flex-center" style={{ borderBottom: 'solid 1px rgba(255,255,255,0.15)', width: '100%', marginBottom: 50 }}>
                        <PlanOptions setPlantype={setPlantype} planType={planType} />
                    </div>
                    <div className="home-footer_hero">
                        <h2 className="home-footer_hero-title">Create your trading bots like a professional.</h2>
                        <Link className="home-footer_hero-button" to="register">Start Now</Link>
                    </div>
                    <div className="home-footer_section-media">
                        <div className="home-footer_container_01">
                            <Logo />
                        </div>
                        <div className="home-footer_container_02">
                            <IoIcons.IoLogoTwitter className="home-footer_section-media-icon" style={{ marginLeft: 0 }} />
                            <IoIcons.IoLogoLinkedin className="home-footer_section-media-icon" />
                            <IoIcons.IoLogoInstagram className="home-footer_section-media-icon" />
                        </div>
                    </div>
                    <div className="home-footer_section">
                        <div className="home-footer_container_01">
                            <p className="home-footer_section-rights">© 2021 Tradingrid Ltd, all rights reserved</p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <Link className="home-footer_section-link" to="/" style={{ marginLeft: 0 }}>About</Link>
                            <Link className="home-footer_section-link" to="/" >Contact</Link>
                            <Link className="home-footer_section-link" to="/" >Jobs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomePage

