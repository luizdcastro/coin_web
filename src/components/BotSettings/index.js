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
            <button className="condition-select_container" onClick={() => { open === "exchange" ? setOpen("") : setOpen("exchange") }}>
                {!!exchange?.exchange ?
                    <p className="condition-option_title">{exchange.exchange}</p>
                    :
                    <p className="condition-select_title">Exchange</p>
                }
                {open === "exchange" ?
                    <MdIcons.MdKeyboardArrowUp size={24} style={{ marginRight: 3 }} /> :
                    <MdIcons.MdKeyboardArrowDown size={24} style={{ marginRight: 3 }} />
                }
            </button>
            {open === "exchange" && (
                <div className="condition-option_container">
                    {exchangeList.map((item) => (
                        <button key={item.label} className="condition-option_item" onClick={() => { setExchange({ exchange: item.label }); setOpen("") }}>
                            <p className="condition-option_title">{item.label}</p>
                        </button>
                    ))}
                </div>
            )}
        </div>
        <div style={{ marginRight: 20 }}>
            <button className="condition-select_container" onClick={() => { open === "symbol" ? setOpen("") : setOpen("symbol") }}>
                {!!symbol?.symbol ?
                    <p className="condition-option_title">{symbol.symbol}</p>
                    :
                    <p className="condition-select_title">Symbol</p>
                }
                {open === "symbol" ?
                    <MdIcons.MdKeyboardArrowUp size={24} style={{ marginRight: 3 }} /> :
                    <MdIcons.MdKeyboardArrowDown size={24} style={{ marginRight: 3 }} />
                }
            </button>
            {open === "symbol" && (
                <div className="condition-option_container">
                    {symbolsList.map((item) => (
                        <button key={item.label} className="condition-option_item" onClick={() => { setSymbol({ symbol: item.label }); setOpen("") }}>
                            <p className="condition-option_title">{item.label}</p>
                        </button>
                    ))}
                </div>
            )}
        </div>
        <div style={{ marginRight: 20 }}>
            <button className="condition-select_container" onClick={() => { open === "timeframe" ? setOpen("") : setOpen("timeframe") }}>
                {!!timeframe?.timeframe ?
                    <p className="condition-option_title">{timeframe.timeframe}</p>
                    :
                    <p className="condition-select_title">Timeframe</p>
                }
                {open === "timeframe" ?
                    <MdIcons.MdKeyboardArrowUp size={24} style={{ marginRight: 3 }} /> :
                    <MdIcons.MdKeyboardArrowDown size={24} style={{ marginRight: 3 }} />
                }
            </button>
            {open === "timeframe" && (
                <div className="condition-option_container">
                    {timeframeList.map((item) => (
                        <button key={item.label} className="condition-option_item" onClick={() => { setTimeframe({ timeframe: item.label }); setOpen("") }}>
                            <p className="condition-option_title">{item.label}</p>
                        </button>
                    ))}
                </div>
            )}
        </div>                                              
    </React.Fragment>
    );
};

export default BotSettings;