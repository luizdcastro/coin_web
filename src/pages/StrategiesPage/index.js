import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import * as GoIcons from 'react-icons/go'
import * as MdIcons from 'react-icons/md'
import { SwishSpinner  } from "react-spinners-kit";

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
                    <p className="strategies_col_name">Name</p>
                    <p className="strategies_col_status">Status</p>
                    <p className="strategies_col_status">Growth</p>
                    <p className="strategies_col_status">Net Profit</p>
                    <span className="strategies_col_actions"><MdIcons.MdRefresh size={22} color="#425466" style={{ cursor: 'pointer' }} /></span>
                </div>
                {getme.bots?.length >= 1 ?
                    <React.Fragment>
                        {getme.bots.map((item) => (
                            <div key={item.id} className="strategies-list-content">
                                <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                                    <SwishSpinner size={18} frontColor="#A19CFF" backColor="#A19CFF" />
                                    <p style={{ fontSize: 13, fontWeight:500, color: "#425466", paddingLeft: 12 }}> Bot MACD</p>
                                </div>
                                <div style={{flex: 1}}>
                                <p className="strategies_row_status-active">{item.active ? 'Active' : 'Inactive'}</p>
                                </div>
                                <p className="strategies_row_status">0,00%</p>
                                <p className="strategies_row_status">$0,00</p>
                                <span className="strategies_row_actions">
                                    <MdIcons.MdMoreHoriz size={22} color="#425466" style={{ cursor: 'pointer' }} onClick={() => { open === item.id ? setOpen("") : setOpen(item.id) }} />
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
                            <p style={{ fontWeight: 400, color: '#425466', fontSize: 18, textAlign: 'center', marginBottom: 10 }}>No bots were found!</p>
                            <p style={{ fontWeight: 300, color: '#425466', fontSize: 14, textAlign: 'center' }}>You haven't created any trading strategy yet.</p>
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