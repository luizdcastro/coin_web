import React from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";

import './styles.css'

const SettingsHeader = () => {
    let location = useLocation();

    return (
        <div>
            <div className="settings-list-header">
                <Link 
                to="/settings-pricing"
                className={location?.pathname === '/settings-pricing' ? 'settings-header-col-name_active' : 'settings-header-col-name'}>Pricing</Link>
                <Link 
                to="/settings-billing"
                className={location?.pathname === '/settings-billing' ? 'settings-header-col-name_active' : 'settings-header-col-name'}>Billing</Link>
            </div>
        </div>
    )
}

export default SettingsHeader