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
        if (getme.exchanges?.length >= 1) {
            setExchangeList(getme.exchanges)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const symbolsList = [
        { value: "BTC/USDT", label: "BTC/USDT" },
        { value: "ETH/USDT", label: "ETH/USDT" },
        { value: "ADA/USDT", label: "ADA/USDT" },
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
            <Select
                value={exchange}
                inputLabel={"Exchange"}
                placeholder="Exchange"
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