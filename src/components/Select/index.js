import React from 'react';

import './styles.css'

const Select = ({ inputLabel, onChange, placeholder, children, onClick}) => {

    return (
        <div className="custom-select_container">
            <div className="custom-select_label-container">
                <p className="custom-select_label">{inputLabel}</p>
            </div>
            <select className="custom-select"  onChange={onChange} onClick={onClick}>
                <option value="" defaultValue hidden>{placeholder}</option>
                {children}
            </select>
        </div>
    )
}

export default Select