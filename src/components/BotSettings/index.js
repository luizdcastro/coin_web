import React, { useState, useEffect } from 'react';
import * as MdIcons from 'react-icons/md'
import { getMe } from '../../redux/actions/UserActions'
import { connect } from "react-redux";

import './styles.css'

const BotSettings = ({ exchange, symbol, timeframe, setExchange, setSymbol, setTimeframe, disptachGetMe, getme }) => {
    const [open, setOpen] = useState("")
    const [exchangeList, setExchangeList] = useState([])

    useEffect(() => disptachGetMe(),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    useEffect(() => {
            setExchangeList(getme.exchanges)        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                    {!!exchange.name ?
                        <p className="bot-settings-option_title">{exchange.name}</p>
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
                            <button key={item?.id} className="bot-settings-option_item" onClick={() => { setExchange({ name: item?.exchange, id: item.id }); setOpen("") }}>
                                <p className="bot-settings-option_title">{item?.exchange}</p>
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
                            <button key={item.label} className="bot-settings-option_item" onClick={() => { setSymbol(item.value); setOpen("") }}>
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
                            <button key={item.label} className="bot-settings-option_item" onClick={() => { setTimeframe(item.value); setOpen("") }}>
                                <p className="bot-settings-option_title">{item.label}</p>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

const mapDispatchToProps = (dispatch) => ({
    disptachGetMe: () => dispatch(getMe())
});

const mapStateToProps = (state) => ({
    getme: state.getme,

});

export default connect(mapStateToProps, mapDispatchToProps)(BotSettings);