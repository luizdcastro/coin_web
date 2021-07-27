import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import * as GoIcons from 'react-icons/go'
import * as MdIcons from 'react-icons/md'
import NoResult from '../../assets/images/no-result.png'

import { getMe } from '../../redux/actions/UserActions'

import './styles.css'

const StrategiesPage = ({ disptachGetMe, getme }) => {

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
                {getme.bots?.length >= 1 ?
                    <React.Fragment>
                        <div className="strategies-list-header">
                            <p className="strategies_col_name">Name</p>
                            <p className="strategies_col_exchange">Exchange</p>
                            <p className="strategies_col_status">Status</p>
                            <span className="strategies_col_actions"><MdIcons.MdRefresh size={22} color="#516078" style={{cursor: 'pointer'}}/></span>
                        </div>
                        {getme.bots.map((item) => (
                              <div key={item.id} className="strategies-list-content">
                              <p className="strategies_row_name">{item.id}</p>
                              <p className="strategies_row_exchange">{item.settings.exchange}</p>
                              <p className="strategies_row_status">Inactive</p>
                              <span className="strategies_row_actions"><MdIcons.MdMoreHoriz size={22} color="#516078" style={{cursor: 'pointer'}}/></span>
                          </div>
                        ))}                      
                    </React.Fragment>
                    :
                    <div className="strategies-no-result">
                        <div >
                            <p style={{ fontWeight: 400, color: 'grey', fontSize: 18, textAlign: 'center', marginBottom: 10 }}>No bots were found!</p>
                            <p style={{ fontWeight: 300, color: 'grey', fontSize: 14, textAlign: 'center' }}>You haven't created your trading strategies yet.</p>
                            <img src={NoResult} alt="No content" style={{ width: 350, height: 270, marginTop: 50 }} />
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