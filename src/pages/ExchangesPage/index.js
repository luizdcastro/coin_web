import React, { useState } from 'react'
import ExchangeSelect from '../../components/ExchangeSelect'
import { Ellipsis } from 'react-css-spinners'
import Binance from '../../assets/images/binance.png'
import Coinbase from '../../assets/images/coinbase.png'
import Kraken from '../../assets/images/kraken.png'
import Bybit from '../../assets/images/bybit.png'
import * as MdIcons from 'react-icons/md'

import './styles.css'

const ExchangesPage = () => {
    const [loading, setLoading] = useState(false)
    const [apiKey, setApiKy] = useState("")
    const [secretKey, setSecretKey] = useState("")
    const [exchange, setExchange] = useState({})

    console.log(exchange)

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

    const handleSubmmit = () => { }

    return (
        <div className="exchanges-page">
            <div style={{ flex: 1, paddingRight: 30 }}>
                <h2 style={{ marginBottom: 30 }}>Exchanges</h2>
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
            </div>
            <div style={{ flex: 2, paddingTop: 60, paddingRight: 40 }}>
                <p className="exchanges-subtitle">Connected exchanges</p>
                <React.Fragment>
                    <div className="exchanges-list-header">
                        <p className="exchanges_col_name">ID</p>
                        <p className="exchanges_col_exchange">Exchange</p>
                        <p className="exchanges_col_status">Status</p>
                        <span className="exchanges_col_actions"><MdIcons.MdRefresh size={22} color="#516078" style={{ cursor: 'pointer' }} /></span>
                    </div>
                    <div className="exchanges-list-content">
                        <p className="exchanges_row_name">item.id</p>
                        <p className="exchanges_row_exchange">item.settings.exchange</p>
                        <p className="exchanges_row_status">Connected</p>
                        <span className="exchanges_row_actions"><MdIcons.MdMoreHoriz size={22} color="#516078" style={{ cursor: 'pointer' }} /></span>
                    </div>
                </React.Fragment>
            </div>
        </div>
    )
}

export default ExchangesPage