import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/logos/tradingrid.png'
import * as IoIcons from 'react-icons/io5'

import style from '../styles/Footer.module.css'

const Footer = () => {

    return (
        <footer>
            <div className={style.footer}>
                <div className={style.footer_section_about}>
                    <div style={{ width: 150, minWidth: 150, marginBottom: -5 }}>
                        <div  href="/"><Image src={Logo} /></div>
                    </div>
                    <p style={{ fontWeight: 300, fontSize: '0.95rem', width: 250 }}>Tradingrid helps people boost their trading strategies through seamless automation features.</p>

                </div>
                <div className={style.footer_section_links}>
                    <div style={{ display: 'flex', flexDirection: 'column', marginRight: 35 }}>
                        <p className={style.footer_section_title}>Company</p>
                        <Link href="#about" style={{ marginLeft: 0 }}><a className={style.footer_section_link}>About</a></Link>
                        <Link href="/contact" ><a className={style.footer_section_link}>Contact Us</a></Link>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginRight: 35 }}>
                        <p className={style.footer_section_title}>Services</p>
                        <Link href="#features" ><a className={style.footer_section_link}>Features</a></Link>
                        <Link href="#pricing" ><a className={style.footer_section_link}>Pricing</a></Link>
                        <Link href="/learn" ><a className={style.footer_section_link}>Learn</a></Link>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p className={style.footer_section_title}>Legal</p>
                        <Link href="/terms" style={{ marginLeft: 0 }}><a className={style.footer_section_link}>Terms of Service</a></Link>
                        <Link href="/privacy" ><a className={style.footer_section_link}>Privacy Policy</a></Link>
                    </div>
                </div>
                <div className={style.footer_section_media}>
                    <div>
                        <a href="https://twitter.com/tradingrid" target="_blank" rel="noreferrer"><IoIcons.IoLogoTwitter className={style.footer_section_media_icon} style={{ marginLeft: 0 }} /></a>
                        <a href="https://www.facebook.com/tradingrid" target="_blank" rel="noreferrer"><IoIcons.IoLogoFacebook className={style.footer_section_media_icon} /></a>
                        <a href="https://www.linkedin.com/company/tradingrid" target="_blank" rel="noreferrer"><IoIcons.IoLogoLinkedin className={style.footer_section_media_icon} /></a>
                        <a href="https://www.instagram.com/tradingrid" target="_blank" rel="noreferrer"><IoIcons.IoLogoInstagram className={style.footer_section_media_icon} /></a>
                    </div>
                </div>
            </div>
            <p className={style.footer_rights}>© 2021 Tradingrid Ltd, all rights reserved.</p>
        </footer>
    )
}

export default Footer