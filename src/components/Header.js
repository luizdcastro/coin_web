import React, { useState, useEffect } from 'react'
import * as CgIcons from 'react-icons/cg'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/logos/tradingrid.png'
import Modal from '@material-ui/core/Modal'

import style from '../styles/Header.module.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState(undefined);

        useEffect(() => {
            if (typeof window !== 'undefined') {
                function handleResize() {
                    setWindowSize(window.innerWidth)
                }

                window.addEventListener("resize", handleResize);

                handleResize();

                return () => window.removeEventListener("resize", handleResize);
            }
        }, []);
        return windowSize;
    }

    const width = useWindowSize()

    useEffect(() => {
        if (width > 600 && menuOpen) {
            setMenuOpen(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width])

    return (
        <div className={style.header}>
            <nav className={style.header_nav}>
                <a className={style.header_logo} href="/">
                    <Image src={Logo} />
                </a>
                {width >= 600 ?
                    <React.Fragment>
                        <div>
                            <ul className={style.header_menu} style={{ marginLeft: 35 }}>
                                <li >
                                    <Link href="#about"><a className={style.header_link_middle}>About</a></Link>
                                </li>
                                <li >
                                    <Link href="#features"><a className={style.header_link_middle}>Features</a></Link>
                                </li>
                                <li >
                                    <Link href="#pricing"><a className={style.header_link_middle}>Pricing</a></Link>
                                </li>
                                <li >
                                    <Link href="#pricing"><a className={style.header_link_middle}>Learn</a></Link>
                                </li>
                            </ul>
                        </div>
                        <ul className={style.header_menu} style={{ marginLeft: 20 }}>
                            <li style={{ width: 75 }}>
                                <Link href="https://app.tradingrid.com/signin"><a className={style.header_button_login}>Sign in</a></Link>
                            </li>
                            <li>
                                <Link href="https://app.tradingrid.com/signup"><a className={style.header_register}>Sign up</a></Link>
                            </li>
                        </ul>
                    </React.Fragment>
                    : <div>
                        <React.Fragment>
                            {!menuOpen ?
                                <CgIcons.CgMenuRight className={style.header_icon} onClick={() => setMenuOpen(true)} />
                                : <CgIcons.CgClose className={style.header_icon} onClick={() => setMenuOpen(false)} />}
                        </React.Fragment>
                    </div>}
            </nav>
            <Modal open={menuOpen} style={{ backgroundColor: 'rgb(18, 18, 20)' }}>
                <React.Fragment>
                    <div className={style.header}>
                        <div className={style.header_nav}>
                            <div className={style.header_logo}>
                                <Image src={Logo} />
                            </div>
                            <CgIcons.CgClose className={style.header_icon} onClick={() => setMenuOpen(false)} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: 40 }}>
                        <a className={style.header_expanded_register} href="https://app.tradingrid.com/signup">Sign Up</a>
                        <a className={style.header_expanded_login} href="https://app.tradingrid.com/signin">Sign In</a>
                        <a className={style.header_expanded_item} onClick={() => setMenuOpen(false)} href="#about">About</a>
                        <a className={style.header_expanded_item} onClick={() => setMenuOpen(false)} href="#featues">Features</a>
                        <a className={style.header_expanded_item} onClick={() => setMenuOpen(false)} href="#pricing">Pricing</a>
                        <a className={style.header_expanded_item} onClick={() => setMenuOpen(false)} href="/">Learn</a>
                    </div>
                </React.Fragment>
            </Modal>
        </div>
    )
}

export default Header