import React, { useState, useEffect } from 'react'
import * as MdIcons from 'react-icons/md'
import * as FiIcons from 'react-icons/fi'

import './styles.css'

const IndicatorsList = ({ indicator, modalName, setModalName, setIndicator }) => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")

    const indicators = [
        { value: "rsi", label: "RSI" },
        { value: "supertrend", label: "Supertrend" },
        { value: "macd", label: "MACD" },
        { value: "stochastic", label: "Stochastic" },
    ]

    useEffect(() => {
        setData(
            indicators.filter((item) =>
                item.value?.toLowerCase().includes(search.toLocaleLowerCase())
            )
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

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
                            <MdIcons.MdClose className="indicator-modal-close" onClick={() => setModalName("")} />
                            <h3 className="indicator-modal-title">Select your indicator</h3>
                            <div className="indicator-modal-search-container">
                                <FiIcons.FiSearch className="indicator-modal-search-icon" size={18} />
                                <input
                                    onChange={e => { setSearch(e.target.value) }}
                                    className="indicator-modal-search-input"
                                    type="text"
                                    placeholder="Search indicator name"
                                />
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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




