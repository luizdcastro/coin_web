import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import * as FiIcons from 'react-icons/fi'
import Modal from '@material-ui/core/Modal'
import ByBit from '../../assets/images/bybit.jpg'

import './styles.css'

const ExchangeSelect = ({ exchange, setExchange, exchangesList, getme }) => {
    const [open, setOpen] = useState(false)
    const [openModal, setOpenModal] = useState(false)

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

    const handleOutsideClick = (e) => {
        if (e.target.id === "modal") {
            setOpenModal(false)
        }
    }

    return (
        <div ref={menuRef}>
            <button className="exchange-select_container" onClick={() => setOpen(!open)} >
                {exchange?.name ?
                    <div className="exchange-option_item_selected">
                        <img src={exchange.icon} alt={exchange.name} style={{ width: 30, height: 30, borderRadius: 5 }} />
                        <p className="exchange-option_title">{exchange.label}</p>
                    </div> :
                    <p className="exchange-select_title">Choose your exchange</p>
                }
                {open ?
                    <FiIcons.FiX size={22} style={{ marginRight: 3 }} /> :
                    <FiIcons.FiChevronDown size={22} style={{ marginRight: 3 }} />
                }
            </button>
            {open && (
                <div className="exchange-option_container">
                    <p style={{ paddingLeft: 15, marginTop: 10, fontSize: '0.9rem', fontWeight: 500 }}>Spot Trading</p>
                    {exchangesList.map((item) => (
                        <button key={item.name} className="exchange-option_item" onClick={() => { setExchange({ icon: item.icon, name: item.name, label: item.label, trading: item.trading }); setOpen(!open) }}>
                            <img src={item.icon} alt={item.name} style={{ width: 30, height: 30, borderRadius: 5 }} />
                            <p className="exchange-option_title">{item.label}</p>
                        </button>
                    ))}
                    <p style={{ paddingLeft: 15, marginTop: 10, fontSize: '0.9rem', fontWeight: 500 }}>Leverage Trading</p>
                    {!!getme.stripe.subscription.active === false ?
                        <button className="exchange-option_item" style={{ position: 'relative' }} onClick={() => { setOpenModal(true) }}>
                            <img src={ByBit} alt="bybit" style={{ width: 30, height: 30, borderRadius: 5 }} />
                            <p className="exchange-option_title">ByBit</p>
                            <p className="exchange-option_tag">Unlock</p>
                        </button> :
                        <button className="exchange-option_item" style={{ position: 'relative' }} onClick={() => { setExchange({ icon: ByBit, name: "bybit", label: "ByBit", trading: "Margin/Leverage" }); setOpen(!open) }}>
                            <img src={ByBit} alt="bybit" style={{ width: 30, height: 30, borderRadius: 5 }} />
                            <p className="exchange-option_title">ByBit</p>
                        </button>
                    }
                </div>
            )}
            <Modal open={openModal}>
                <div className="templates-page_inactive" onClick={handleOutsideClick} id="modal">
                    <div className="templates-page_inactive-modal">
                        <div>
                            <p className="templates-modal_title">Hey {getme?.name.split(" ")[0].slice(0, 12)},</p>
                            <p className="templates-modal_text">Leverage trading is avaliable to subscribers.</p>
                            <p className="templates-modal_text">Upgrade your plan to unlock all trading features.</p>
                            <div className="templates-modal_container-button">
                                <Link className="templates-update_button" to="/settings-pricing">Upgrade Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>

    );
};

const mapStateToProps = (state) => ({
    getme: state.getme,
});

export default connect(mapStateToProps, null)(ExchangeSelect);