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
                <div>
                    <Link className="main-header-logo" to="#">cointarget</Link>
                </div>
                <div>
                {width >= 600 ? (
                    <ul className="main-header-menu">
                        <li >
                            <Link className="main-header-link-middle" to="#">About</Link>
                        </li>
                        <li >
                            <Link className="main-header-link-middle" to="#">Features</Link>
                        </li>
                        <li >
                            <Link className="main-header-link-middle" to="#">Pricing</Link>
                        </li>
                        <li >
                            <Link className="main-header-link-middle" to="#">Learn</Link>
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
                                        <IoIcons.IoCloseOutline size={35} color="grey" />
                                    </Link>
                                    <Link
                                        className="main-header_menu-item-register"
                                        to="/register"
                                        onClick={() => setMenuOpen(false)}>Sign up
                                        </Link>
                                        <div>
                                    <Link
                                        className="main-header_menu-item-login"
                                        to="/login"
                                        onClick={() => setMenuOpen(false)}>Entrar 
                                        </Link>
                                        </div>
                                        <Link
                                        className="main-header_menu-item"
                                        to="#"
                                        onClick={() => setMenuOpen(false)}>Home 
                                        </Link>
                                        <Link
                                        className="main-header_menu-item"
                                        to="#"
                                        onClick={() => setMenuOpen(false)}>Plataforma 
                                        </Link>
                                        <Link
                                        className="main-header_menu-item"
                                        to="#"
                                        onClick={() => setMenuOpen(false)}>Suporte 
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