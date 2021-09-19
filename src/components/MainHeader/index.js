import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as CgIcons from 'react-icons/cg'
import Logo from '../Logo'
import Modal from '@material-ui/core/Modal'

import './styles.css'

const MainHeader = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [menuOpen, setMenuOpen] = useState(false)

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    useEffect(() => {
        if (width > 600 && menuOpen) {
            setMenuOpen(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width])

    return (
        <div className="main-header">
            <nav className="main-header-nav">
                <Logo />
                {width >= 600 ?
                    <React.Fragment>
                        <div>
                            <ul className="main-header-menu" style={{ marginLeft: 35 }}>
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
                                    <a className="main-header-link-middle" href="#pricing">Learn</a>
                                </li>
                            </ul>
                        </div>
                        <ul className="main-header-menu" style={{ marginLeft: 20 }}>
                            <li style={{width: 75}}>
                                <Link to="/login" className="main-header_button-login">Sign in</Link>
                            </li>
                            <li className="main-header-register">
                                <Link to="/register" className="main-header_button-title">Sign up</Link>
                            </li>
                        </ul>
                    </React.Fragment>
                    : <div>
                        <React.Fragment>
                            {!menuOpen ?
                                <CgIcons.CgMenuRight size={32} color="rgb(130, 87, 230)" onClick={() => setMenuOpen(true)} />
                                : <CgIcons.CgClose size={32} color="rgb(130, 87, 230)" onClick={() => setMenuOpen(false)} />}
                        </React.Fragment>
                    </div>}
            </nav>
            <Modal open={menuOpen} style={{ backgroundColor: 'rgb(18, 18, 20)' }}>
                <React.Fragment>
                    <div className="main-header">
                        <div className="main-header-nav">
                            <Logo />
                            <CgIcons.CgClose size={32} color="rgb(130, 87, 230)" onClick={() => setMenuOpen(false)} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: 40 }}>
                        <a className="main-header_expanded-item" onClick={() => setMenuOpen(false) } href="#about">About</a>
                        <a className="main-header_expanded-item" onClick={() => setMenuOpen(false) } href="#featues">Features</a>
                        <a className="main-header_expanded-item" onClick={() => setMenuOpen(false) } href="#pricing">Pricing</a>
                        <a className="main-header_expanded-item" onClick={() => setMenuOpen(false) } href="/">Learn</a>
                        <Link className="main-header_expanded-item-login" to="/login">Login</Link>
                        <Link className="main-header_expanded-item-register" to="/register">Sign Up</Link>
                    </div>
                </React.Fragment>
            </Modal>
        </div>
    )
}

export default MainHeader