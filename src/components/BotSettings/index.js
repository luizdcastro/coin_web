import React, { useState } from 'react';
import * as MdIcons from 'react-icons/md'

import './styles.css'

const BotSettings = ({ exchange, symbol, timeframe, setExchange, setSymbol, setTimeframe }) => {
    const [open, setOpen] = useState("")

    const exchangeList = [
        { value: "binance", label: "Binance" },
        { value: "coinbase", label: "Coinbase" },
    ]

    const symbolsList = [
        { value: "BTCUSDT", label: "BTC/USDT" },
        { value: "ETHUSDT", label: "ETH/USDT" },
        { value: "ADAUSDT", label: "ADA/USDT" },
    ]

    const timeframeList = [
        { value: "5", label: "5 min" },
        { value: "15", label: "15 min" },
        { value: "30", label: "30 min" },
    ]

    return (
        <React.Fragment>
        <div style={{ marginRight: 20 }}>
            <button className="bot-settings-select_container" onClick={() => { open === "exchange" ? setOpen("") : setOpen("exchange") }}>
                {!!exchange ?
                    <p className="bot-settings-option_title">{exchange}</p>
                    :
                    <p className="bot-settings-select_title">Exchange</p>
                }
                {open === "exchange" ?
                    <MdIcons.MdKeyboardArrowUp size={24} style={{ marginRight: 3 }} /> :
                    <MdIcons.MdKeyboardArrowDown size={24} style={{ marginRight: 3 }} />
                }
            </button>
            {open === "exchange" && (
                <div className="bot-settings-option_container">
                    {exchangeList.map((item) => (
                        <button key={item.label} className="bot-settings-option_item" onClick={() => { setExchange(item.label); setOpen("") }}>
                            <p className="bot-settings-option_title">{item.label}</p>
                        </button>
                    ))}
                </div>
            )}
        </div>
        <div style={{ marginRight: 20 }}>
            <button className="bot-settings-select_container" onClick={() => { open === "symbol" ? setOpen("") : setOpen("symbol") }}>
                {!!symbol ?
                    <p className="bot-settings-option_title">{symbol}</p>
                    :
                    <p className="bot-settings-select_title">Symbol</p>
                }
                {open === "symbol" ?
                    <MdIcons.MdKeyboardArrowUp size={24} style={{ marginRight: 3 }} /> :
                    <MdIcons.MdKeyboardArrowDown size={24} style={{ marginRight: 3 }} />
                }
            </button>
            {open === "symbol" && (
                <div className="bot-settings-option_container">
                    {symbolsList.map((item) => (
                        <button key={item.label} className="bot-settings-option_item" onClick={() => { setSymbol(item.label); setOpen("") }}>
                            <p className="bot-settings-option_title">{item.label}</p>
                        </button>
                    ))}
                </div>
            )}
        </div>
        <div style={{ marginRight: 20 }}>
            <button className="bot-settings-select_container" onClick={() => { open === "timeframe" ? setOpen("") : setOpen("timeframe") }}>
                {!!timeframe ?
                    <p className="bot-settings-option_title">{timeframe}</p>
                    :
                    <p className="bot-settings-select_title">Timeframe</p>
                }
                {open === "timeframe" ?
                    <MdIcons.MdKeyboardArrowUp size={24} style={{ marginRight: 3 }} /> :
                    <MdIcons.MdKeyboardArrowDown size={24} style={{ marginRight: 3 }} />
                }
            </button>
            {open === "timeframe" && (
                <div className="bot-settings-option_container">
                    {timeframeList.map((item) => (
                        <button key={item.label} className="bot-settings-option_item" onClick={() => { setTimeframe( item.label); setOpen("") }}>
                            <p className="bot-settings-option_title">{item.label}</p>
                        </button>
                    ))}
                </div>
            )}
        </div>                                              
    </React.Fragment>
    );
};

export default BotSettings;