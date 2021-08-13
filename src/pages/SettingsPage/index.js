import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { getMe } from '../../redux/actions/UserActions'
import PlanOptions from '../../components/PlanOptions'
import AccountSettings from '../../components/AccountSettings';

import './styles.css'

const SettingsPage = ({ disptachGetMe, getme }) => {
    const [activeMenu, setActiveMenu] = useState("plan")

    useEffect(() => {
        disptachGetMe()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="settings-page">
            <div className="settings-container">
                <h2 className="seetings-title">Settings</h2>
                <div className="settings-list-header">                    
                    <p className={activeMenu === 'plan' ? 'settings-header-col-name_active' : 'settings-header-col-name'}
                        onClick={() => setActiveMenu('plan')}>Pricing</p>
                    <p className={activeMenu === 'billing' ? 'settings-header-col-name_active' : 'settings-header-col-name'}
                        onClick={() => setActiveMenu('billing')}>Billing</p>
                </div>
                <div className="settings-page-content">
                 {activeMenu === "plan" ? 
                 <PlanOptions />
                 : activeMenu === "profile" ? 
                <AccountSettings />
                : null}
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    disptachGetMe: () => dispatch(getMe())
});

const mapStateToProps = (state) => ({
    getme: state.getme,
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);