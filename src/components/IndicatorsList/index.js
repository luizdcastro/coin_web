import React, { useState, useEffect } from 'react'
import * as FiIcons from 'react-icons/fi'
import * as MdIcons from 'react-icons/md'
import Modal from '@material-ui/core/Modal';

import indicators from '../../assets/data/indicators';
import Input from '../Input'

import './styles.css'

const IndicatorsList = ({ indicator, modalName, setModalName, setIndicator }) => {
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
            <Input
                inputLabel={"Indicators"}
                onClick={() => { setModalName("indicators"); handleOpen() }}
                value={indicator.indicator}
                placeholder="Indicators"
            />
            <Modal open={open} onClose={handleClose}>
                <React.Fragment>
                    {modalName === "indicators" && (
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
                                <div className="indicator-list-content">
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
                            </div>
                        </div>)}
                </React.Fragment>
            </Modal>
        </React.Fragment>
    )
}

export default IndicatorsList




