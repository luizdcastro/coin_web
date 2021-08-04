import React, { useState, useEffect } from 'react'
import * as MdIcons from 'react-icons/md'
import * as FiIcons from 'react-icons/fi'

import './styles.css'

const IndicatorsList = ({ indicator, modalName, setModalName, setIndicator }) => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [activeMenu, setActiveMenu] = useState("indicator")

    const indicators = [
        { type: "indicator", value: "rsi", label: "RSI" },
        { type: "indicator", value: "supertrend", label: "Supertrend" },
        { type: "indicator", value: "macd", label: "MACD" },
        { type: "indicator", value: "stochastic", label: "Stochastic" },
        { type: "indicator", value: "atr", label: "ATR" },
        { type: "indicator", value: "ad", label: "AD" },
        { type: "indicator", value: "obv", label: "OBV" },
        { type: "indicator", value: "bollinger_bands", label: "Bollinger Bands" },
        { type: "indicator", value: "wma", label: "WMA" },
        { type: "indicator", value: "adx", label: "ADX" },
        { type: "indicator", value: "arron", label: "ARRON" },
        { type: "indicator", value: "mfi", label: "MFI" },
        { type: "indicator", value: "mom", label: "MOM" },
        { type: "indicator", value: "willr", label: "WillR" },
        { type: "ma", value: "ma_10", label: "MA 10" },
        { type: "ma", value: "ma_20", label: "MA 20" },
        { type: "ma", value: "ma_30", label: "MA 30" },
        { type: "ma", value: "ma_40", label: "MA 40" },
        { type: "ma", value: "ma_50", label: "MA 50" },
        { type: "ma", value: "ma_100", label: "MA 100" },
        { type: "ma", value: "ma_200", label: "MA 200" },
        { type: "ma", value: "ema_10", label: "EMA 10" },
        { type: "ma", value: "ema_20", label: "EMA 20" },
        { type: "ma", value: "ema_30", label: "EMA 30" },
        { type: "ma", value: "ema_40", label: "EMA 40" },
        { type: "ma", value: "ema_50", label: "EMA 50" },
        { type: "ma", value: "ema_100", label: "EMA 100" },
        { type: "ma", value: "ema_200", label: "EMA 200" },
        { type: "candle", value: "cdlhammer", label: "Hammer" },
        { type: "candle", value: "cdlinvertedhammer", label: "Inverted Hammer" },
        { type: "candle", value: "cdlengulfing", label: "Engulfing Pattern" },
        { type: "candle", value: "cdlpiercing", label: "Piercing Pattern" },
        { type: "candle", value: "cdlmorningstar", label: "Morning Star" },
        { type: "candle", value: "cdl3whitesoldiers", label: "3 White Soldiers" },
        { type: "candle", value: "cdlabandonedbaby", label: "Abandoned Baby" },
        { type: "candle", value: "cdlbreakaway", label: "Breakaway" },
        { type: "candle", value: "cdlhangingman", label: "Hanging Man" },
        { type: "candle", value: "cdlshootingstar", label: "Shooting Star" },
        { type: "candle", value: "cdleveningstar", label: "Evening Star" },
        { type: "candle", value: "cdl3blackcrows", label: "3 Black Crows" },
        { type: "candle", value: "cdldarkcloudcover", label: "Dark Cloud Cover" },
        { type: "candle", value: "cdldoji", label: "Doji" },
        { type: "candle", value: "cdlspinningtop", label: "Spinning Top" },
        { type: "candle", value: "cdlharami", label: "Harami Pattern" },
        { type: "candle", value: "cdl3linestrike", label: " Three-Line Strike" },
        { type: "candle", value: "cdldragonflydoji", label: "Dragonfly Doji" },
        { type: "candle", value: "cdlmatchinglow", label: "Matching Low" },
        { type: "candle", value: "cdltasukigap", label: "Tasuki Gap" },
    ]

    useEffect(() => {
        setData(
            indicators.filter((item) =>
                (item.type?.toLowerCase().includes(activeMenu)) &&
                (item.label?.toLowerCase().includes(search.toLocaleLowerCase())))
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, activeMenu]);

    const handleOutsideClick = (e) => {
        if (e.target.id === "modal") {
            setModalName("")
        }
    }

    return (
        <React.Fragment >
            <div
                style={{ marginRight: 20 }}

            >
                {!!indicator?.indicator ?
                    <button className="indicator-list-select_container" onClick={() => { setModalName("indicators") }}>
                        <p className="indicator-list-select_title">{indicator.indicator}</p>
                    </button> :
                    <button className="indicator-list-select_container" onClick={() => { setModalName("indicators") }}>
                        <p className="indicator-list-option_title">Indicator</p>
                    </button>
                }
            </div>
            {
                modalName === "indicators" ?
                    <div
                        id="modal"
                        className="indicator-modal"
                        onClick={handleOutsideClick}
                    >
                        <div className="indicator-modal-container">
                            <div className="indicator-modal-search-container">
                                <FiIcons.FiSearch className="indicator-modal-search-icon" size={18} />
                                <input
                                    onChange={e => { setSearch(e.target.value) }}
                                    className="indicator-modal-search-input"
                                    type="text"
                                    placeholder="Search indicator name"
                                />
                            </div>
                            <div className="indicator-list-header">
                                <p
                                    className={activeMenu === 'indicator' ? 'indicator_col_active' : 'indicator_col'}
                                    onClick={() => {setActiveMenu('indicator')}}
                                >Indicators</p>
                                <p
                                    className={activeMenu === 'ma' ? 'indicator_col_active' : 'indicator_col'}
                                    onClick={() => {setActiveMenu('ma')}}
                                >Moving Averages</p>
                                <p
                                    className={activeMenu === 'candle' ? 'indicator_col_active' : 'indicator_col'}
                                    onClick={() => {setActiveMenu('candle')}}
                                >Candle Patterns</p>
                            </div>
                            <div className="indicator-list-content">
                                {data.map((item) => (
                                    <button
                                        className="indicator-modal-button"
                                        key={item.label}
                                        onClick={() => {
                                            setIndicator({ indicator: item.label });
                                            setModalName("")
                                        }}>
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div> : null
            }
        </React.Fragment>
    )
}

export default IndicatorsList




