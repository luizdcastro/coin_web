import React from 'react';
import './styles.css'

const Input = ({ onChange, inputLabel, ...otherProps }) => {
    return (
        <div className="custom-input_container">
            <div className="custom-input_label-container">
                <p className="custom-input_label">{inputLabel}</p>
            </div>
            <input className="custom-input" onChange={onChange} {...otherProps} />
        </div>
    );
};

export default Input;