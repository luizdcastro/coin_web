import React from 'react';
import './styles.css'

const InputRange = ({ inputLabel, value, symbol, step, ...otherProps }) => {
    const background = `linear-gradient(90deg, rgb(130, 87, 230) ${value || 0}%, rgba(255,255,255,0.35) ${value || 0}%)`

    return (
        <div className="custom-input_container">
            <div className="custom-input_label-container">
                <p className="custom-input_label">{inputLabel}</p>
            </div>
            <div className="input-range_contaoner">
                <input type="range" min="0" max="100" step={step} value={value || 0} className="slider" style={{ background: background }} {...otherProps} />
                {value === undefined || (value < 0.5) ?
                    <p style={{ fontSize: 13, fontWeight: 600, paddingRight: 10 }}>Off</p>
                    : <p style={{ fontSize: 13, fontWeight: 600,}}>{value}{symbol}</p>
                }
            </div>
        </div>
    );
};

export default InputRange;