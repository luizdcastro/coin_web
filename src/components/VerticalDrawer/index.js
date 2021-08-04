import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import * as FiIcons from 'react-icons/fi'
import './styles.css'

const VerticalDrawer = () => {
    const [activeMenu, setActiveMenu] = useState("dashboard")
    const [subnav, setSubnav] = useState(false)

    let menuRef = useRef()

    useEffect(() => {
        let handler = (event) => {
            if (!menuRef.current.contains(event.target)) {
                setSubnav(false)
            }
        };

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })


    return (
        <div className="vertical-container" >
            <ul className="vertical-menu-container">
                <div style={{ marginBottom: 95 }} ref={menuRef} >
                    <div className={activeMenu === 'avatar' ? 'menu-item-active' : 'vertical-menu-item'} onClick={() => { setSubnav(!subnav); setActiveMenu('avatar') }}>
                        <div className="vertical-avatar">
                            <p className="vertical-avatar-name">L</p>
                        </div>
                        <p className="vertical-menu-title">Luiz</p>
                        {!subnav ?
                            <FiIcons.FiChevronDown className="vertical-drop-icon" size={20} />
                            :
                            <FiIcons.FiChevronUp className="vertical-drop-icon" size={20} />
                        }
                    </div>
                    {subnav ?
                        <div className="vertical-expanded-menu">
                            <Link className="vertical-expanded-option" to="/settings" onClick={() => setSubnav(false)}>
                                <p className="vertical-expanded-title">Account Settings</p>
                            </Link>
                            <Link className="vertical-expanded-option" to="#" onClick={() => setSubnav(false)}>
                                <p className="vertical-expanded-title">Sign out</p>
                            </Link>
                        </div>
                        : null}
                </div>
                <li>
                    <Link className={activeMenu === 'dashboard' ? 'menu-item-active' : 'vertical-menu-item'} to="/dashboard" onClick={() => setActiveMenu('dashboard')}>
                        <FiIcons.FiGrid size={22} />
                        <p className="vertical-menu-title">Dashbard</p>
                    </Link>
                </li>
                <li>
                    <Link className={activeMenu === 'strategies' ? 'menu-item-active' : 'vertical-menu-item'} to="/strategies" onClick={() => setActiveMenu('strategies')}>
                        <FiIcons.FiBarChart2 size={22} />
                        <p className="vertical-menu-title">Strategies</p>
                    </Link>
                </li>
                <li>
                    <Link className={activeMenu === 'bot' ? 'menu-item-active' : 'vertical-menu-item'} to="/create-bot" onClick={() => setActiveMenu('bot')}>
                        <FiIcons.FiServer size={22} />
                        <p className="vertical-menu-title">Create Bot</p>
                    </Link>
                </li>
                <li>
                    <Link className={activeMenu === 'exchanges' ? 'menu-item-active' : 'vertical-menu-item'} to="/exchanges" onClick={() => setActiveMenu('exchanges')}>
                        <FiIcons.FiShare2 size={22} />
                        <p className="vertical-menu-title">Exchanges</p>
                    </Link>
                </li>
            </ul>
            <ul className="vertical-menu-footer">
                <Link className="vertical-menu-button" to="/settings">
                    Upgrade Now
                </Link>
                <div className="vertical-menu-separator" />
                <p className="vertical-footer-text">coinfive</p>
            </ul>
        </div>
    )
}



export default VerticalDrawer;