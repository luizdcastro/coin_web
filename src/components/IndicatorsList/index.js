import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import * as FiIcons from 'react-icons/fi'
import * as MdIcons from 'react-icons/md'
import Modal from '@material-ui/core/Modal'

import indicators from '../../assets/data/indicators'

import './styles.css'

const IndicatorsList = ({ indicator, modalName, setModalName, setIndicator, getme }) => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [activeMenu, setActiveMenu] = useState("indicator")
    const [open, setOpen] = useState(false)

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
                                {!getme.stripe.subscription.active ?
                                    <div className="indicator-list-content">
                                        {data.map((item) => (
                                            item?.permission === "all" ?
                                                <button
                                                    className="indicator-modal-button"
                                                    key={item.label}
                                                    onClick={() => {
                                                        setIndicator({ indicator: item.label, type: item.type });
                                                        setModalName("");
                                                        setOpen(false);
                                                    }}>
                                                    {item.label}
                                                </button>
                                                :
                                                <button
                                                    className="indicator-modal-button"
                                                    key={item.label}
                                                    disabled
                                                    onClick={() => {
                                                        setIndicator({ indicator: item.label, type: item.type });
                                                        setModalName("");
                                                        setOpen(false);
                                                    }}>
                                                    {item.label}
                                                    <span className="indicator-expert_label">Trader</span>
                                                </button>
                                        ))}
                                    </div>
                                    : <div className="indicator-list-content">
                                        {data.map((item) => (
                                            <button
                                                className="indicator-modal-button"
                                                key={item.label}
                                                onClick={() => {
                                                    setIndicator({ indicator: item.label, type: item.type });
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
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    getme: state.getme,
});

export default connect(mapStateToProps, null)(IndicatorsList);



