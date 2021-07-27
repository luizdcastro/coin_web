import React from 'react'
import * as MdIcons from 'react-icons/md'


const IndicatorsList = ({ indicator, modalName, setModalName, setIndicator }) => {

    const indicators = [
        { value: "rsi", label: "RSI" },
        { value: "supertrend", label: "Supertrend" },
        { value: "macd", label: "MACD" },
        { value: "stochastic", label: "Stochastic" },
    ] 

    return (
        <React.Fragment>
            <div style={{ marginRight: 20 }}>
                {!!indicator?.indicator ?
                    <button className="modal-select_container" onClick={() => { setModalName("indicators") }}>
                        <p className="option_title">{indicator.indicator}</p>
                    </button> :
                    <button className="modal-select_container" onClick={() => { setModalName("indicators") }}>
                        <p className="option_title">Indicator</p>
                    </button>
                }
            </div>
            {
                modalName === "indicators" ?
                    <div className="modal-container">
                        <div style={{ display: 'block' }}>
                            <MdIcons.MdClose className="modal-close-icon" onClick={() => setModalName("")} />
                            <h3 className="modal-title">Select your indicator</h3>
                            {indicators.map((item) => (
                                <button className="modal-item" key={item.label} onClick={() => { setIndicator({ indicator: item.label }); setModalName("") }}>
                                    <p className="modal-option_title">{item.label}</p>
                                </button>
                            ))}
                        </div>
                    </div> : null
            }
        </React.Fragment>
    )
}

export default IndicatorsList




