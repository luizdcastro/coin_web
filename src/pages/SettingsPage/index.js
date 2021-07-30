import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getMe } from '../../redux/actions/UserActions'

import './styles.css'

const SettingsPage = ({ disptachGetMe, getme }) => {

    useEffect(() => {
        disptachGetMe()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(getme)

    return (
        <div className="settings-page">
            <div className="settings-container">
                <h2 className="seetings-title">Settings</h2>
                <div className="settings-header">
                    <div className="settings-avatar">
                        <p className="settings-avatar-name">{getme?.name.slice(0, 1).toUpperCase()}</p>
                    </div>
                    <div>
                        <p className="settings-header-name">{getme?.name}</p>
                        <p className="settings-header-name">{getme?.email}</p>
                    </div>
                </div>
                <div className="settings-list-header">
                    <p className="settings-header-col-name">Plan</p>
                    <p className="settings-header-col-name">Billing</p>
                    <p className="settings-header-col-name">Profile</p>
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