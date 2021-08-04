import React, { useState, useEffect, useRef } from 'react';
import * as MdIcons from 'react-icons/md'

import './styles.css'

const ExchangeSelect = ({exchange, setExchange, exchangesList}) => {
    const [open, setOpen] = useState(false)

    let menuRef = useRef()

    useEffect(() => {
        let handler = (event) => {
            if (!menuRef.current.contains(event.target)) {
                setOpen(false)
            }
        };

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })

    return (
        <div ref={menuRef}>
            <button className="exchange-select_container" onClick={() => setOpen(!open)} >
                {exchange?.name ?
                    <div className="exchange-option_item_selected">
                        <img src={exchange.icon} alt="Binance" style={{ width: 30, height: 30, borderRadius: 5 }} />
                        <p className="exchange-option_title">{exchange.name}</p>
                    </div> :
                    <p className="exchange-select_title">Choose your exchange</p>
                }
                {open ? 
                    <MdIcons.MdKeyboardArrowUp size={24} style={{ marginRight: 3 }} /> :
                    <MdIcons.MdKeyboardArrowDown size={24} style={{ marginRight: 3 }} />
                }
            </button>
            {open && (
                <div className="exchange-option_container">
                    {exchangesList.map((item) => (
                        <button key={item.name} className="exchange-option_item" onClick={() => { setExchange({ icon: item.icon, name: item.name }); setOpen(!open) }}>
                            <img src={item.icon} alt={item.name} style={{ width: 30, height: 30, borderRadius: 5 }} />
                            <p className="exchange-option_title">{item.name}</p>
                        </button>
                    ))}
                </div>
            )}
        </div>

    );
};

export default ExchangeSelect;