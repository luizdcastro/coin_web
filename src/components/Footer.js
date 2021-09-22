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
                        <a href="/">
                            <Image src={Logo} />
                        </a>
                    </div>
                    <p style={{ fontWeight: 300, fontSize: '0.95rem', width: 250 }}>Tradingrid helps people boost their trading strategies through seamless automation features.</p>

                </div>
                <div className={style.footer_section_links}>
                    <div style={{ display: 'flex', flexDirection: 'column', marginRight: 35 }}>
                        <p className={style.footer_section_title}>Company</p>
                        <Link href="/terms" style={{ marginLeft: 0 }}><a className={style.footer_section_link}>About</a></Link>
                        <Link href="/privacy" ><a className={style.footer_section_link}>Contact Us</a></Link>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginRight: 35 }}>
                        <p className={style.footer_section_title}>Services</p>
                        <Link href="/privacy" ><a className={style.footer_section_link}>Pricing</a></Link>
                        <Link href="/privacy" ><a className={style.footer_section_link}>Learn</a></Link>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p className={style.footer_section_title}>Legal</p>
                        <Link href="/terms" style={{ marginLeft: 0 }}><a className={style.footer_section_link}>Terms of Service</a></Link>
                        <Link href="/privacy" ><a className={style.footer_section_link}>Privacy Policy</a></Link>
                    </div>
                </div>
                <div className={style.footer_section_media}>
                    <p className={style.footer_section_title}>Follow Us</p>
                    <div>
                        <IoIcons.IoLogoTwitter className={style.footer_section_media_icon} style={{ marginLeft: 0 }} />
                        <IoIcons.IoLogoLinkedin className={style.footer_section_media_icon} />
                        <IoIcons.IoLogoInstagram className={style.footer_section_media_icon} />
                    </div>
                </div>
            </div>
            <p className={style.footer_rights}>© 2021 Tradingrid Ltd, all rights reserved</p>
        </footer>
    )
}

export default Footer