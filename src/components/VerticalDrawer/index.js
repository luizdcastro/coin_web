import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import * as FiIcons from 'react-icons/fi'
import './styles.css'

const VerticalDrawer = () => {
    const [activeMenu, setActiveMenu] = useState("strategies")

    return (
        <div className="vertical-container">

            <ul className="vertical-menu-container"> 
            <li>
                    <Link className={activeMenu === 'dashboard' ? 'menu-item-active' : 'vertical-menu-item'} to="/dashboard" onClick={() => setActiveMenu('dashboard')}>
                        <FiIcons.FiGrid size={20} />
                        <p className="vertical-menu-title">Dashbard</p>
                    </Link>
                </li>              
                <li>
                    <Link className={activeMenu === 'strategies' ? 'menu-item-active' : 'vertical-menu-item'} to="/strategies" onClick={() => setActiveMenu('strategies')}>
                        <FiIcons.FiServer size={20} />
                        <p className="vertical-menu-title">Strategies</p>
                    </Link>
                </li>
                <li>
                    <Link className={activeMenu === 'exchanges' ? 'menu-item-active' : 'vertical-menu-item'} to="/exchanges" onClick={() => setActiveMenu('exchanges')}>
                        <FiIcons.FiShare2 size={20} />
                        <p className="vertical-menu-title">Exchanges</p>
                    </Link>
                </li>
                <li>
                    <Link className={activeMenu === 'settings' ? 'menu-item-active' : 'vertical-menu-item'} to="/settings" onClick={() => setActiveMenu('settings')}>
                        <FiIcons.FiSettings size={20} />
                        <p className="vertical-menu-title">Settings</p>
                    </Link>
                </li>
            </ul>
            <ul className="vertical-menu-footer">
                <Link className="vertical-menu-button" to="/settings">
                    Upgrade Now
                </Link>
                <div className="vertical-menu-separator" />
                <p className="vertical-footer-text">Mambit | BETA</p>
            </ul>
        </div>
    )
}



export default VerticalDrawer;