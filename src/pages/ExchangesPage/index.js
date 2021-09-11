import React, { useState, useEffect } from 'react'
import ExchangeSelect from '../../components/ExchangeSelect'
import { Ellipsis } from 'react-css-spinners'
import Binance from '../../assets/images/binance.png'
import Kraken from '../../assets/images/kraken.png'
import ByBit from '../../assets/images/bybit.jpg'
import OKEx from '../../assets/images/OKEx.png'
import FTX from '../../assets/images/ftx.png'
import Huobi from '../../assets/images/huobi.jpg'
import * as MdIcons from 'react-icons/md'
import * as FiIcons from 'react-icons/fi'
import * as IoIcons from 'react-icons/io5'
import { createExchange, deleteExchange } from '../../redux/actions/ExchangeActions';
import { getMe } from '../../redux/actions/UserActions'
import { connect } from "react-redux";

import './styles.css'

const ExchangesPage = ({ dispatchCreateExchange, disptachGetMe, getme, dispatchDeleteExchange }) => {

    const [loading, setLoading] = useState(false)
    const [apiKey, setApiKy] = useState("")
    const [secretKey, setSecretKey] = useState("")
    const [passphrase, setPassphrase] = useState("")
    const [exchange, setExchange] = useState({})
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    useEffect(() => disptachGetMe(),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    const exchangesList = [
        {
            icon: Binance,
            name: "binance",
            label: "Binance",
            trading: "Spot"
        },       
        {
            icon: FTX,
            name: "ftx",
            label: "FTX",
            trading: "Spot"
        },
        {
            icon: Huobi,
            name: "huobipro",
            label: "Huobi",
            trading: "Spot",
        },
        {
            icon: Kraken,
            name: "kraken",
            label: "Kraken",
            trading: "Spot"
        },
        {
            icon: OKEx,
            name: "okex",
            label: "OKEx",
            trading: "Spot"
        },

    ]

    const handleSubmmit = () => {
        setLoading(true)
        setError("")
        setSuccess("")
        dispatchCreateExchange(
            exchange.name,
            exchange.label,
            exchange.trading,
            getme.id,
            apiKey,
            secretKey,
            passphrase,
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
                <h2 className="exchanges-page-title">Exchanges</h2>
                <p className="exchanges-subtitle">Connect New Exchange</p>
                <ExchangeSelect exchange={exchange} setExchange={setExchange} exchangesList={exchangesList} />
                <input className="exchanges-input" placeholder="API key" onChange={(e) => setApiKy(e.target.value)} />
                <input className="exchanges-input" placeholder="Secret key" onChange={(e) => setSecretKey(e.target.value)} />
                {exchange.name === "okex" ?
                    <input className="exchanges-input" placeholder="Passphrase" onChange={(e) => setPassphrase(e.target.value)} />
                    : null}
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
                <div style={{ display: 'flex', width: 325, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                    <div style={{ width: 125 }}>
                        <IoIcons.IoShieldCheckmark size={42} color="rgba(255,255,255, 0.5)" style={{ marginLeft: 4 }} />
                        <p style={{ fontSize: 12 }}>AES 256</p>
                    </div>
                    <p style={{ fontSize: 12, paddingLeft: 12, textAlign: 'left', lineHeight: 1.6 }}>We store API keys in encrypted form AES 256 with dedicated private keys which are generated for each user separately.</p>
                </div>
            </div>
            <div style={{ flex: 2, paddingTop: 70, paddingRight: 40 }}>
                <p className="exchanges-subtitle">Connected Exchanges</p>
                <div className="exchanges-list-header">
                    <p className="exchanges_col_exchange">Exchange</p>
                    <p className="exchanges_col_status">API Key</p>
                    <p className="exchanges_col_status">Status</p>
                    <p className="exchanges_col_status">Trading</p>
                    <span className="exchanges_col_actions"><MdIcons.MdRefresh size={22} color="rgba(255,255,255,0.9)" style={{ cursor: 'pointer' }} /></span>
                </div>
                {getme.exchanges?.length >= 1 ?
                    <React.Fragment>
                        {getme.exchanges.map((item) => (
                            <div key={item.id} className="exchanges-list-content">
                                <div className="exchanges_row_exchange">
                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                        <img
                                            src={item.exchange === 'binance' ? Binance
                                                : item.exchange === 'kraken' ? Kraken
                                                    : item.exchange === 'okex' ? OKEx
                                                        : item.exchange === 'ftx' ? FTX
                                                            : item.exchange === 'huobipro' ? Huobi
                                                                : item.exchange === 'bybit' ? ByBit : null}
                                            alt={
                                                item.exchange === 'binance' ? 'Binance'
                                                    : item.exchange === 'kraken' ? 'Kraken'
                                                        : item.exchange === 'okex' ? 'OKEx'
                                                            : item.exchange === 'ftx' ? 'FTX'
                                                                : item.exchange === 'huobipro' ? 'FTX'
                                                                    : item.exchange === 'bybit' ? 'ByBit' : 'null'}
                                            style={{ width: 30, height: 30, borderRadius: 5, marginRight: 8 }}
                                        />
                                        <p className="exchanges_row_exchange">{item.label}</p>
                                    </span>
                                </div>
                                <p className="exchanges_row_status">{item.api_key.slice(0, 10) + "*******"}</p>
                                <span className="exchanges_row_status">
                                    <p className="exchanges_row_status-active">Connected</p>
                                </span>
                                <p className="exchanges_row_exchange">{item.trading}</p>
                                <span className="exchanges_row_actions">
                                    <FiIcons.FiTrash
                                        size={17}
                                        color="rgba(255,255,255,0.9)"
                                        style={{ cursor: 'pointer', marginBottom: 5 }}
                                        onClick={() => handleDelete(item.id)} />
                                </span>
                            </div>
                        ))}
                    </React.Fragment>
                    :
                    <div className="strategies-no-result">
                        <div >
                            <p style={{ fontWeight: 500, color: 'rgba(255,255,255, 0.8)', fontSize: 18, textAlign: 'center', marginBottom: 10 }}>No API keys were found</p>
                            <p style={{ fontWeight: 400, color: 'rgba(255,255,255, 0.8)', fontSize: 14, textAlign: 'center' }}>You haven't connected your exchanges yet.</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    disptachGetMe: () => dispatch(getMe()),
    dispatchCreateExchange: (exchange, label, trading, user, api_key, secret_key, passphrase, onSuccess, onError) =>
        dispatch(createExchange({ exchange, label, trading, user, api_key, secret_key, passphrase }, onSuccess, onError)),
    dispatchDeleteExchange: (exchangeId, onSuccess, onError) =>
        dispatch(deleteExchange(exchangeId, onSuccess, onError)),
});

const mapStateToProps = (state) => ({
    getme: state.getme,

});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangesPage);