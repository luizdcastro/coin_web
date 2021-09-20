import React, {useState} from 'react';
import './styles.css'
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const InputCheck = ({ checked, onChange }) => {

    return (
        <div className="custom-input_container">
            <div className="custom-input_label-container">
                <p className="custom-input_label">Signal</p>
            </div>
            <div className="input-range_container">
                <Checkbox
                    {...label}
                    onChange={onChange}
                    checked={checked}
                    sx={{
                        color: 'rgb(130, 87, 230)',
                        '&.Mui-checked': {
                            color: 'rgb(130, 87, 230)',
                        },
                    }}
                />
                    <p>Wait new signal</p>
                 
            </div>
        </div>
    );
};

export default InputCheck;