import React from 'react';
import './styles.css'

const Input = ({ inputLabel, ...otherProps }) => {
    return (
        <div className="custom-input_container">
            <div className="custom-input_label-container">
                <p className="custom-input_label">{inputLabel}</p>
            </div>
            <input className="custom-input" {...otherProps} />
        </div>
    );
};

export default Input;