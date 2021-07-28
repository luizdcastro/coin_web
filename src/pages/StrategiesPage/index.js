import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import * as GoIcons from 'react-icons/go'
import * as MdIcons from 'react-icons/md'
import { Ripple } from 'react-css-spinners'

import { getMe } from '../../redux/actions/UserActions'

import './styles.css'

const StrategiesPage = ({ disptachGetMe, getme }) => {
    const [open, setOpen] = useState("")

    useEffect(() => disptachGetMe(),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    return (
        <div className="strategies-page">
            <div className="strategies-container">
                <div className="strategies-header">
                    <h2 className="strategies-page-title">Strategies</h2>
                    <Link className="add-bot-button" to="create-bot">
                        <GoIcons.GoPlus size={17} style={{ marginRight: 3 }} />
                        Add Strategy
                    </Link>
                </div>
                <div className="strategies-list-header">
                    <span style={{ width: 50 }}></span>
                    <p className="strategies_col_name">Name</p>
                    <p className="strategies_col_status">Status</p>
                    <p className="strategies_col_status">Growth</p>
                    <p className="strategies_col_status">Net Profit</p>
                    <span className="strategies_col_actions"><MdIcons.MdRefresh size={22} color="#516078" style={{ cursor: 'pointer' }} /></span>
                </div>
                {getme.bots?.length >= 1 ?
                    <React.Fragment>
                        {getme.bots.map((item) => (
                            <div key={item.id} className="strategies-list-content">
                                <Ripple color="#1DB954" size={40} thickness={2} style={{ width: 50 }} />
                                <p className="strategies_row_name">Teste Bot</p>
                                <p className="strategies_row_status">Inactive</p>
                                <p className="strategies_row_status">+22,00%</p>
                                <p className="strategies_row_status">$ 350,00</p>
                                <span className="strategies_row_actions">
                                    <MdIcons.MdMoreHoriz size={22} color="#516078" style={{ cursor: 'pointer' }} onClick={() => { open === item.id ? setOpen("") : setOpen(item.id) }} />
                                </span>
                                {open === item.id && (
                                    <div className="strategies_action-menu">
                                        <button className="strategies_action-menu-option" onClick={() => { setOpen("") }}>
                                            <p className="strategy-option_title">Pause</p>
                                        </button>
                                        <button className="strategies_action-menu-option" onClick={() => { setOpen("") }}>
                                            <p className="strategy-option_title">Delete</p>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </React.Fragment>
                    :
                    <div className="strategies-no-result">
                        <div>
                            <p style={{ fontWeight: 400, color: '#516078', fontSize: 18, textAlign: 'center', marginBottom: 10 }}>No bots were found!</p>
                            <p style={{ fontWeight: 300, color: '#516078', fontSize: 14, textAlign: 'center' }}>You haven't created any trading strategies yet.</p>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Link className="strategy-get-started" to="/create-bot">Get Started</Link>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    disptachGetMe: () => dispatch(getMe()),

});

const mapStateToProps = (state) => ({
    getme: state.getme,
});

export default connect(mapStateToProps, mapDispatchToProps)(StrategiesPage);