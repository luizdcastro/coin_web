import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import * as GoIcons from 'react-icons/go'
import * as MdIcons from 'react-icons/md'
import * as FiIcons from 'react-icons/fi'
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
                        <GoIcons.GoPlus size={17} style={{ marginRight: 3 }} />
                        Add Strategy
                    </Link>
                </div>
                <div className="strategies-list-header">
                    <p className="strategies_col_name">Name</p>
                    <p className="strategies_col_name">Status</p>
                    <p className="strategies_col_name">Growth</p>
                    <p className="strategies_col_name">Net Profit</p>
                    <span><MdIcons.MdRefresh size={22} color="#425466" style={{ cursor: 'pointer' }} /></span>
                </div>
                {getme.bots?.length >= 1 ?
                    <React.Fragment>
                        {getme.bots.map((item) => (
                            <div key={item.id} className="strategies-list-content" onClick={() => { setOpen(true); setBotDetails(item) }}>
                                <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                                    <FiIcons.FiBarChart size={22} color={item.active ? "#635bff" : "#425466"} />
                                    <p style={{ fontSize: 13, color: "#425466", paddingLeft: 8 }}> Bot MACD</p>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p className="strategies_row_status-active" 
                                    style={!item.active ? {color: "#425466", borderColor: "#425466"} : {color: "#635bff"}}>
                                        {item.active ? 'Active' : 'Inactive'}
                                        </p>
                                </div>
                                <p className="strategies_row_name">{item.growth.toFixed(2)}%</p>
                                <p className="strategies_row_name">${item.profit.toFixed(2)}</p>     
                                <span style={{width: 22}} />                           
                            </div>
                        ))}
                    </React.Fragment>
                    :
                    <div className="strategies-no-result">
                        <div>
                            <p style={{ fontWeight: 500, color: 'grey', fontSize: 18, textAlign: 'center', marginBottom: 10 }}>No bots were found</p>
                            <p style={{ fontWeight: 400, color: 'grey', fontSize: 14, textAlign: 'center' }}>You haven't created any trading strategy yet.</p>
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