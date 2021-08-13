import React, { useState, useEffect } from 'react';
import { getMe } from '../../redux/actions/UserActions'
import { connect } from "react-redux";

import Select from '../Select';

import './styles.css'

const BotSettings = ({ exchange, symbol, timeframe, setExchange, setSymbol, setTimeframe, disptachGetMe, getme }) => {
    const [exchangeList, setExchangeList] = useState([])

    useEffect(() => disptachGetMe(),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    useEffect(() => {
        if (getme?.exchanges.length >= 1) {
            setExchangeList(getme.exchanges)
        }
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
            <Select
                value={exchange}
                inputLabel={"Exchange"}
                placeholder="Exchange"
                onChange={(e) => setExchange(e.target.value)}
            >
                {exchangeList.map((item) => (
                    <option key={item?._id} value={item?.exchange}>{item?.exchange}</option>
                ))}
            </Select>
            <Select
                value={symbol}
                inputLabel={"Symbol"}
                placeholder="Symbol"
                onChange={(e) => setSymbol(e.target.value)}
            >
                {symbolsList.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </Select>
            <Select
                value={timeframe}
                inputLabel={"Timeframe"}
                placeholder="Timeframe"
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