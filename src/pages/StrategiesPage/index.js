import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import * as GoIcons from 'react-icons/go'
import * as MdIcons from 'react-icons/md'
import * as IoIcons from "react-icons/io5";
import { GuardSpinner } from "react-spinners-kit";
import BotDetails from '../../components/BotDetails';
import { getMe } from '../../redux/actions/UserActions'

import './styles.css'

const StrategiesPage = ({ disptachGetMe, getme }) => {
    const [open, setOpen] = useState(false)
    const [botDetails, setBotDetails] = useState({})

    useEffect(() => disptachGetMe(),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [open])

    return (
        <div className="strategies-page">
            <div className="strategies-container">
                <div className="strategies-header">
                    <h2 className="strategies-page-title">Strategies</h2>
                    <Link className="add-bot-button" to="create-bot">
                        <GoIcons.GoPlus size={16} style={{ marginRight: 3 }} />
                        New Strategy
                    </Link>
                </div>
                <div className="strategies-list-header">
                    <p className="strategies_col_name">Name</p>
                    <p className="strategies_col_name">Status</p>
                    <p className="strategies_col_name">Growth</p>
                    <p className="strategies_col_name">Gross Profit</p>
                    <span><MdIcons.MdRefresh size={22} color="rgba(255,255,255,0.9)" style={{ cursor: 'pointer' }} /></span>
                </div>
                {getme.bots?.length >= 1 ?
                    <React.Fragment>
                        {getme.bots.map((item) => (
                            <div key={item.id} className="strategies-list-content" onClick={() => { setOpen(true); setBotDetails(item) }}>
                                <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                                    <div style={{ width: 25 }}>
                                        {item.active ?
                                            <GuardSpinner size={20} frontColor="#bb86fc" />
                                            : <IoIcons.IoAppsSharp size={26.5} color="rgba(255,255,255, 0.8)" style={{ marginTop: 4, paddingRight: 2 }} />}
                                    </div>
                                    <p className="strategies_row_name" style={{ paddingLeft: 10 }}>{item.name}</p>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p className={item.active ? "strategies_row_status-active" : "strategies_row_status-inactive"}>
                                        {item.active ? 'Active' : 'Inactive'}
                                    </p>
                                </div>
                                <p className="strategies_row_name">{item.growth.toFixed(2)}%</p>
                                <p className="strategies_row_name">$ {item.profit.toFixed(2)}</p>
                                <span style={{ width: 22 }} />
                            </div>
                        ))}
                    </React.Fragment>
                    :
                    <div className="strategies-no-result">
                        <div>
                            <p style={{ fontWeight: 500, color: 'rgba(255,255,255, 0.8)', fontSize: 18, textAlign: 'center', marginBottom: 10 }}>No bots were found</p>
                            <p style={{ fontWeight: 400, color: 'rgba(255,255,255, 0.8)', fontSize: 14, textAlign: 'center' }}>You haven't created any trading strategy yet.</p>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Link className="strategy-get-started" to="/create-bot">Get Started</Link>
                            </div>
                        </div>
                    </div>
                }
                {
                    open && (
                        <BotDetails setOpen={setOpen} botDetails={botDetails} />
                    )
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