import React, { useState } from 'react';

import './styles.css'

const BotSettings = ({ exchange, symbol, timeframe, setModalName, modalName }) => {

    return (
        <React.Fragment>
            <div style={{ marginRight: 20 }}>
                <button className="modal-select_container" onClick={() => { modalName === "exchange" ? setModalName("") : setModalName("exchange") }}>
                    {!!exchange?.label ?
                        <p className="modal-option_title">{exchange.label}</p>
                        :
                        <p className="modal-option_title">Exchange</p>
                    }
                </button>
            </div>
            <div style={{ marginRight: 20 }}>
                <button className="modal-select_container" onClick={() => { modalName === "symbol" ? setModalName("") : setModalName("symbol") }}>
                    {!!symbol?.label ?
                        <p className="modal-option_title">{symbol.label}</p>
                        :
                        <p className="modal-option_title">Symbol</p>
                    }
                </button>
            </div>
            <div style={{ marginRight: 20 }}>
                <button className="modal-select_container" onClick={() => { modalName === "timeframe" ? setModalName("") : setModalName("timeframe") }}>
                    {!!timeframe?.label ?
                        <p className="modal-option_title">{timeframe.label}</p>
                        :
                        <p className="modal-option_title">Timeframe</p>
                    }
                </button>
            </div>
        </React.Fragment>
    );
};

export default BotSettings;