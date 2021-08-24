import React, { useState, useEffect } from 'react';
import { getMe } from '../../redux/actions/UserActions'
import { connect } from "react-redux";

import Select from '../Select';
import Input from '../Input';
import './styles.css'

const BotSettings = ({ name, setName, exchange, symbol, timeframe, setExchange, setSymbol, setTimeframe, disptachGetMe, getme }) => {
    const [exchangeList, setExchangeList] = useState([])

    useEffect(() => disptachGetMe(),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    useEffect(() => {
        if (getme.exchanges?.length >= 1) {
            setExchangeList(getme.exchanges)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const symbolsList = [
        { value: "BTCUSDT", label: "BTC/USDT" },
        { value: "ETHUSDT", label: "ETH/USDT" },
        { value: "ADAUSDT", label: "ADA/USDT" },
        { value: "DOTUSDT", label: "DOT/USDT" },
        { value: "LTCUSDT", label: "LTC/USDT" },        
    ]

    const timeframeList = [
        { value: "5m", label: "5m" },
        { value: "15m", label: "15m" },
        { value: "30m", label: "30m" },
        { value: "1h", label: "1h" },
        { value: "2h", label: "2h" },
        { value: "4h", label: "4h" },
    ]

    const handleChange = (index) => {
        if (index === "demo") {
            setExchange({ name: "Demo", id: null })
        } else {
            setExchange({ name: exchangeList[index].exchange, id: exchangeList[index]._id })
        }
    }

    return (
        <React.Fragment>
            <Input
                inputLabel="Bot Name"
                placeholder="Bot Name"
                value={name}
                onChange={(e) => { setName(e.target.value) }}    
                maxLength={15}        
            />
            <Select
                value={exchange}                
                inputLabel={"Exchange"}
                placeholder={!!exchange ? exchange.name : "Exchange"}
                onChange={e => handleChange(e.target.value)}
            >
                <option value="demo">Demo</option>
                {exchangeList.map((item, index) => (
                    <option key={item?._id} value={index}>{item?.exchange}</option>
                ))}
            </Select>
            <Select
                value={symbol}
                inputLabel={"Symbol"}
                placeholder={!!symbol ? symbol : "Symbol"}
                onChange={(e) => setSymbol(e.target.value)}
            >
                {symbolsList.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </Select>
            <Select
                value={timeframe}
                inputLabel={"Timeframe"}
                placeholder={!!timeframe ? timeframe : "Timeframe"}
                onChange={(e) => setTimeframe(e.target.value)}
            >
                {timeframeList.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </Select>
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