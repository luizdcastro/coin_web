import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as IoIcons from 'react-icons/io5'

import './styles.css'

const MainHeader = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [menuOpen, setMenuOpen] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    const changebackgound = () => {
        if (window.scrollY >= 70) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changebackgound)

    return (
        <div className={navbar ? 'main-header active' : 'main-header'}>
            <nav className="main-header-nav">
                <div className="main-header_logo-container">
                    <IoIcons.IoGrid className="main-header_logo-icon"/>
                    <Link className="main-header_logo-text" to="#">tradingrid</Link>
                </div>
                <div>
                    {width >= 600 ? (
                        <ul className="main-header-menu">
                            <li >
                                <a className="main-header-link-middle" href="#about">About</a>
                            </li>
                            <li >
                                <a className="main-header-link-middle" href="#features">Features</a>
                            </li>
                            <li >
                                <a className="main-header-link-middle" href="#pricing">Pricing</a>
                            </li>
                            <li >
                                <a className="main-header-link-middle" href="#">Learn</a>
                            </li>
                        </ul>
                    ) : null}
                </div>
                {width <= 600 ? (
                    <>
                        {!menuOpen ? (
                            <Link onClick={() => setMenuOpen(true)}>
                                <IoIcons.IoMenuSharp size={32} color="rgba(255,255,255,0.85)" />
                            </Link>
                        ) :
                            <div className="main-header_dropdown-container">
                                <div className="main-header_dropdown-menu">
                                    <Link className="main-header_close-menu__icon" onClick={() => setMenuOpen(false)}>
                                        <IoIcons.IoCloseOutline size={35} color="rgba(255,255,255,0.85)" />
                                    </Link>
                                    <div>
                                        <Link
                                            className="main-header_menu-item-login"
                                            to="/login"
                                            onClick={() => setMenuOpen(false)}>Login
                                        </Link>
                                    </div>
                                    <Link
                                        className="main-header_menu-item-register"
                                        to="/register"
                                        onClick={() => setMenuOpen(false)}>Sign Up
                                    </Link>                                   
                                    <Link
                                        className="main-header_menu-item"
                                        to="#"
                                        onClick={() => setMenuOpen(false)}>About
                                    </Link>
                                    <Link
                                        className="main-header_menu-item"
                                        to="#"
                                        onClick={() => setMenuOpen(false)}>Features
                                    </Link>
                                    <Link
                                        className="main-header_menu-item"
                                        to="#"
                                        onClick={() => setMenuOpen(false)}>Pricing
                                    </Link>
                                    <Link
                                        className="main-header_menu-item"
                                        to="#"
                                        onClick={() => setMenuOpen(false)}>Learn
                                    </Link>
                                </div>
                            </div>
                        }
                    </>
                ) :
                    <ul className="main-header-menu">
                        <li className="main-header-login">
                            <Link to="/login" className="main-header_button-title">
                                Sign in
                            </Link>
                        </li>
                        <li className="main-header-register">
                            <Link to="/register" className="main-header_button-title">Sign up</Link>
                        </li>
                    </ul>

                }
            </nav>
        </div>
    )
}

export default MainHeader