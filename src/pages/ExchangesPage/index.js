import React, { useState, useEffect } from 'react'
import ExchangeSelect from '../../components/ExchangeSelect'
import { Ellipsis } from 'react-css-spinners'
import Binance from '../../assets/images/binance.png'
import Coinbase from '../../assets/images/coinbase.png'
import Kraken from '../../assets/images/kraken.png'
import Bybit from '../../assets/images/bybit.png'
import * as MdIcons from 'react-icons/md'
import * as FiIcons from 'react-icons/fi'
import { createExchange, deleteExchange } from '../../redux/actions/ExchangeActions';
import { getMe } from '../../redux/actions/UserActions'
import { connect } from "react-redux";

import './styles.css'

const ExchangesPage = ({ dispatchCreateExchange, disptachGetMe, getme, dispatchDeleteExchange }) => {

    const [loading, setLoading] = useState(false)
    const [apiKey, setApiKy] = useState("")
    const [secretKey, setSecretKey] = useState("")
    const [exchange, setExchange] = useState({})
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    useEffect(() => disptachGetMe(),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    const exchangesList = [
        {
            icon: Binance,
            name: "Binance"
        },
        {
            icon: Bybit,
            name: "Bybit"
        },
        {
            icon: Coinbase,
            name: "Coinbase"
        },
        {
            icon: Kraken,
            name: "Kraken"
        }
    ]

    const handleSubmmit = () => {
        setLoading(true)
        setError("")
        setSuccess("")
        dispatchCreateExchange(
            exchange.name,
            getme.id,
            apiKey,
            secretKey,
            () => {
                setSuccess("Exchange successfully connected!");
                setLoading(false);
                disptachGetMe()               
            },
            (error) => {
                setError(error.error);
                setLoading(false);
            }
        )
    }

    const handleDelete = (exchangeId) => {
        dispatchDeleteExchange(
            exchangeId,
            (response) => {
                console.log(response);
                disptachGetMe()
            },
            (error) => console.log(error)
        )
    }

    return (
        <div className="exchanges-page">
            <div style={{ flex: 1, paddingRight: 30 }}>
                <h2 style={{ marginBottom: 40, fontWeight: 500, color: '#425466' }}>Exchanges</h2>
                <p className="exchanges-subtitle">Connect new exchange</p>
                <ExchangeSelect exchange={exchange} setExchange={setExchange} exchangesList={exchangesList} />
                <p className="exchanges-label">API Key</p>
                <input className="exchanges-input" placeholder="eg. 51859tjd55896j885" onChange={(e) => setApiKy(e.target.value)} />
                <p className="exchanges-label">Secret Key</p>
                <input className="exchanges-input" placeholder="eg. 71859tjd88697j896" onChange={(e) => setSecretKey(e.target.value)} />
                {!!apiKey & !!secretKey & exchange.hasOwnProperty('name') ?
                    <button className="exchanges-bot-button_active" disabled={loading ? true : false} onClick={() => handleSubmmit()}>
                        {
                            !loading ? 'Connect' : <span> <Ellipsis color="#FFF" size={42} /></span>
                        }
                    </button>
                    :
                    <button className="exchanges-bot-button_disabled" disabled>Connect</button>
                }
                {!!error ?
                    <p className="exchange-error">{error}</p>
                    : !!success ?
                        <p className="exchange-success">{success}</p>
                        : null
                }
            </div>
            <div style={{ flex: 2, paddingTop: 70, paddingRight: 40 }}>
                <p className="exchanges-subtitle">Connected exchanges</p>
                <div className="exchanges-list-header">
                    <p className="exchanges_col_exchange">Exchange</p>
                    <p className="exchanges_col_status">API Key</p>
                    <p className="exchanges_col_status">Status</p>
                    <span className="exchanges_col_actions"><MdIcons.MdRefresh size={22} color="#425466" style={{ cursor: 'pointer' }} /></span>
                </div>
                {getme.exchanges?.length >= 1 ?
                    <React.Fragment>
                        {getme.exchanges.map((item) => (
                            <div key={item.id} className="exchanges-list-content">
                                <div className="exchanges_row_exchange">
                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                        <img
                                            src={item.exchange === 'Binance' ? Binance
                                                : item.exchange === 'Coinbase' ? Coinbase
                                                    : item.exchange === 'Kraken' ? Kraken
                                                        : item.exchange === 'Bybit' ? Bybit : null}
                                            alt={
                                                item.exchange === 'Binance' ? 'Binance'
                                                    : item.exchange === 'Coinbase' ? 'Coinbase'
                                                        : item.exchange === 'Kraken' ? 'Kraken'
                                                            : item.exchange === 'Bybit' ? 'Bybit' : 'null'}
                                            style={{ width: 30, height: 30, borderRadius: 5, marginRight: 8 }}
                                        />
                                        <p className="exchanges_row_exchange">{item.exchange}</p>
                                    </span>
                                </div>
                                <p className="exchanges_row_status">{item.api_key.slice(0, 10) + "*******"}</p>
                                <span className="exchanges_row_status">
                                    <p className="exchanges_row_status-active">Connected</p>
                                </span>
                                <span className="exchanges_row_actions">
                                    <FiIcons.FiTrash
                                        size={17}
                                        color="#425466"
                                        style={{ cursor: 'pointer', marginBottom: 5 }}
                                        onClick={() => handleDelete(item.id)} />
                                </span>
                            </div>
                        ))}
                    </React.Fragment>
                    :
                    <div className="strategies-no-result">
                        <div >
                            <p style={{ fontWeight: 400, color: '#425466', fontSize: 18, textAlign: 'center', marginBottom: 10 }}>No API keys were found!</p>
                            <p style={{ fontWeight: 300, color: '#425466', fontSize: 14, textAlign: 'center' }}>You haven't connected your exchanges yet.</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    disptachGetMe: () => dispatch(getMe()),
    dispatchCreateExchange: (exchange, user, api_key, secret_key, onSuccess, onError) =>
        dispatch(createExchange({ exchange, user, api_key, secret_key, }, onSuccess, onError)),
    dispatchDeleteExchange: (exchangeId, onSuccess, onError) =>
        dispatch(deleteExchange(exchangeId, onSuccess, onError)),
});

const mapStateToProps = (state) => ({
    getme: state.getme,

});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangesPage);