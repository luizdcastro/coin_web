import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import * as FiIcons from 'react-icons/fi'
import * as MdIcons from 'react-icons/md'
import Modal from '@material-ui/core/Modal'
import { Link } from 'react-router-dom'

import indicators from '../../assets/data/indicators'

import './styles.css'
import { TrendingUpTwoTone } from '@material-ui/icons'

const IndicatorsList = ({ indicator, modalName, setModalName, setIndicator, getme }) => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [activeMenu, setActiveMenu] = useState("indicator")
    const [open, setOpen] = useState(false)
    const [openModal, setOpenModal] = useState(false)


    useEffect(() => {
        setData(
            indicators.filter((item) =>
                (item.type?.toLowerCase().includes(activeMenu)) &&
                (item.label?.toLowerCase().includes(search.toLocaleLowerCase())))
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, activeMenu]);

    const handleOutsideClick = (e) => {
        if (e.target.id === "modal") {
            setModalName("")
            setOpen(false)
        }
    }

    const handleOutsideUnlock = (e) => {
        if (e.target.id === "modal_unlock") {
            setOpenModal(false)
        }
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment >

            <div className="custom-input_container">
                <div className="custom-input_label-container">
                    <p className="custom-input_label">Indicator</p>
                </div>
                <div className="custom-input" style={{ display: 'flex', alignItems: 'center' }} onClick={() => { setModalName("indicator"); handleOpen() }}>
                    <p>{indicator.indicator || "Select the indicator"}</p>
                </div>
            </div>
            <Modal open={open} onClose={handleClose}>
                <React.Fragment>
                    {modalName === "indicator" && (
                        <div
                            id="modal"
                            className="indicator-modal"
                            onClick={handleOutsideClick}
                        >
                            <div className="indicator-modal-container">
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <h3 className="indicator-modal-title">Select your indicator</h3>
                                    <MdIcons.MdClose className="indicator-modal-close" onClick={() => setOpen(false)} />
                                </div>
                                <div className="indicator-modal-search-container">
                                    <FiIcons.FiSearch className="indicator-modal-search-icon" size={18} />
                                    <input
                                        onChange={e => { setSearch(e.target.value) }}
                                        className="indicator-modal-search-input"
                                        type="text"
                                        placeholder="Search indicator name"
                                    />
                                </div>
                                <div className="indicator-list-header">
                                    <p
                                        className={activeMenu === 'indicator' ? 'indicator_col_active' : 'indicator_col'}
                                        onClick={() => { setActiveMenu('indicator') }}
                                    >Indicators</p>
                                    <p
                                        className={activeMenu === 'ma' ? 'indicator_col_active' : 'indicator_col'}
                                        onClick={() => { setActiveMenu('ma') }}
                                    >Moving Averages</p>
                                    <p
                                        className={activeMenu === 'candle' ? 'indicator_col_active' : 'indicator_col'}
                                        onClick={() => { setActiveMenu('candle') }}
                                    >Candle Patterns</p>
                                </div>
                                {!!getme.stripe.subscription.active === false ?
                                    <div className="indicator-list-content">
                                        {data.map((item) => (
                                            item?.permission === "all" ?
                                                <button
                                                    className="indicator-modal-button"
                                                    key={item.label}
                                                    onClick={() => {
                                                        setIndicator({ indicator: item.label, type: item.type, signal: true });
                                                        setModalName("");
                                                        setOpen(false);
                                                    }}>
                                                    {item.label}
                                                </button>
                                                :
                                                <button
                                                    className="indicator-modal-button"
                                                    key={item.label}                                                    
                                                    onClick={() => setOpenModal(true)}>
                                                    {item.label}
                                                    <span className="indicator-expert_label">Unlock</span>
                                                </button>
                                        ))}
                                    </div>
                                    : <div className="indicator-list-content">
                                        {data.map((item) => (
                                            <button
                                                className="indicator-modal-button"
                                                key={item.label}
                                                onClick={() => {
                                                    setIndicator({ indicator: item.label, type: item.type, signal: true });
                                                    setModalName("");
                                                    setOpen(false);
                                                }}>
                                                {item.label}
                                            </button>
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>)}
                </React.Fragment>               
            </Modal>
            <Modal open={openModal}>
                <div className="templates-page_inactive" onClick={handleOutsideUnlock} id="modal_unlock">
                    <div className="templates-page_inactive-modal">
                        <div>
                            <p className="templates-modal_title">Hey {getme?.name.split(" ")[0].slice(0, 12)},</p>
                            <p className="templates-modal_text">Advance indicators are avaliable to subscribers.</p>
                            <p className="templates-modal_text">Upgrade your plan to unlock all trading features.</p>
                            <div className="templates-modal_container-button">
                                <Link className="templates-update_button" to="/settings-pricing">Upgrade Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    getme: state.getme,
});

export default connect(mapStateToProps, null)(IndicatorsList);



