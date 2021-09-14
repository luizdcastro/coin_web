import React, { useState } from 'react'
import MainHeader from '../../components/MainHeader'
import * as MdIcons from 'react-icons/md'
import * as IoIcons from 'react-icons/io5'
import { Link } from 'react-router-dom'
import PlanOptions from '../../components/PlanOptions'
import HeroImage from '../../assets/images/hero-image.png'
import FeaturesImage from '../../assets/images/features.png'
import './styles.css'

const HomePage = () => {
    const [planType, setPlantype] = useState('annual')

    return (
        <div className="home_flex-center" id="home">
            <div className="home-width">
                <MainHeader />
                <div className="home-hero_section">
                    <div>
                        <h1 className="home-hero_section-title">Automate your<br />trading strategies</h1>
                        <h2 className="home-hero_section-subtitle" >Create your custom crypto trading bot without coding skills and never miss an opportunity or get caught in a dip.</h2>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 40 }}>
                            <Link className="homepage-getstarted-button" to="/register">
                                <p style={{ marginLeft: 14, fontSize: 15, fontWeight: 500 }}>Get started</p>
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
                    <div style={{ marginTop: 50, marginBottom: 50 }}>
                        <p className="home-section_exchange-title">We are connected with</p>
                        <div className="home-section_box-exchanges">
                            <p className="home-section_exchange-item">Binance</p>
                            <p className="home-section_exchange-item">ByBit</p>
                            <p className="home-section_exchange-item">FTX</p>
                            <p className="home-section_exchange-item">Huobi</p>
                            <p className="home-section_exchange-item">Kraken</p>
                            <p className="home-section_exchange-item">OKEx</p>
                        </div>
                    </div>
                </div>
                <div className="home_flex-center" id="about">
                    <div style={{ maxWidth: 600, marginBottom: 15 }}>
                        <h2 className="home-features_section-title">Built for your workflow</h2>
                        <p className="home-features_section-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint — occaecat cupidatat non proident, sunt in culpa qui.</p>
                    </div>
                </div>
                <div className="home-section_container">
                    <ul className="home-section_about">
                        <li className="home-section_about-list">
                            <div className="home-section_about-icon">
                                <IoIcons.IoGrid size={24} color="rgb(130, 87, 230)" />
                            </div>
                            <h3 className="home-section_about-title">Join the system</h3>
                            <p className="home-section_about-description">A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.</p>
                        </li>
                        <li className="home-section_about-list">
                            <div className="home-section_about-icon">
                                <IoIcons.IoGrid size={24} color="rgb(130, 87, 230)" />
                            </div>
                            <h3 className="home-section_about-title">Join the system</h3>
                            <p className="home-section_about-description"> A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.</p>
                        </li>
                        <li className="home-section_about-list">
                            <div className="home-section_about-icon">
                                <IoIcons.IoGrid size={24} color="rgb(130, 87, 230)" />
                            </div>
                            <h3 className="home-section_about-title">Join the system</h3>
                            <p className="home-section_about-description">A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.</p>
                        </li>
                        <li className="home-section_about-list">
                            <div className="home-section_about-icon">
                                <IoIcons.IoGrid size={24} color="rgb(130, 87, 230)" />
                            </div>
                            <h3 className="home-section_about-title">Join the system</h3>
                            <p className="home-section_about-description">A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.</p>
                        </li>
                        <li className="home-section_about-list">
                            <div className="home-section_about-icon">
                                <IoIcons.IoGrid size={24} color="rgb(130, 87, 230)" />
                            </div>
                            <h3 className="home-section_about-title">Join the system</h3>
                            <p className="home-section_about-description"> A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.</p>
                        </li>
                        <li className="home-section_about-list">
                            <div className="home-section_about-icon">
                                <IoIcons.IoGrid size={24} color="rgb(130, 87, 230)" />
                            </div>
                            <h3 className="home-section_about-title">Join the system</h3>
                            <p className="home-section_about-description">A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.</p>
                        </li>
                    </ul>
                </div>
                <div className="home_flex-center">
                    <div className="home-middle_section">
                        <div className="home_flex-center">
                            <h2 className="home-middle_section-title">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit</h2>
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
                        <p className="home-features_section-description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint — occaecat cupidatat non proident, sunt in culpa qui.</p>
                    </div>
                </div>
                <div className="home-features_section-container_01">
                    <div>
                        <h3 className="home-features_section-subtitle">Join the system</h3>
                        <p className="home-features_section-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint — occaecat cupidatat non proident, sunt in culpa qui.</p>
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
                        <h3 className="home-features_section-subtitle">Join the system</h3>
                        <p className="home-features_section-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint — occaecat cupidatat non proident, sunt in culpa qui.</p>
                    </div>
                </div>
                <div className="home-features_section-container_03">
                    <div>
                        <h3 className="home-features_section-subtitle">Join the system</h3>
                        <p className="home-features_section-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint — occaecat cupidatat non proident, sunt in culpa qui.</p>
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
                        <p className="home-price_section-subtitle">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
                    </div>
                </div>
                <div className="home_flex-center" style={{ borderBottom: 'solid 1px rgba(255,255,255,0.15)', width: '100%', marginBottom: 50 }}>
                    <PlanOptions setPlantype={setPlantype} planType={planType} />
                </div>
                <div className="home-footer_hero">
                    <h2 className="home-footer_hero-title">Leo vel fringilla est integer malesuada.</h2>
                    <Link className="home-footer_hero-button">Get started</Link>
                </div>
                <div className="home-footer_section-media">
                    <div className="home-footer_container_01">
                        <div className="main-header_logo-container">
                            <IoIcons.IoGrid className="main-header_logo-icon" />
                            <a className="main-header_logo-text" href="#home">tradingrid</a>
                        </div>
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
                        <Link className="home-footer_section-link" style={{ marginLeft: 0 }}>Contact</Link>
                        <Link className="home-footer_section-link">About</Link>
                        <Link className="home-footer_section-link">Support</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage

