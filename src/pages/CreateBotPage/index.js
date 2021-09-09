import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createBot } from '../../redux/actions/BotActions';
import { Ellipsis } from 'react-css-spinners';
import { Link } from 'react-router-dom'
import * as GoIcons from 'react-icons/go'

import IndicatorsList from '../../components/IndicatorsList';
import BotSettings from '../../components/BotSettings'
import MovingAverage from '../../components/Indicators/MovingAverage';
import Indicator from '../../components/Indicators/Indicator';
import CandlePattern from '../../components/Indicators/CandlePattern';

import './styles.css'

const CreateBotPage = ({ dispatchCreateBot, user }) => {
    const [loading, setLoading] = useState(false)
    const [openFinal, setOpenFinal] = useState(false)
    const [closeFinal, setCloseFinal] = useState(false)
    const [positionSide, setPositionSide] = useState("")
    const [amount, setAmount] = useState("")
    const [stopLoss, setStopLoss] = useState("")
    const [name, setName] = useState("")
    const [exchange, setExchange] = useState("")
    const [symbol, setSymbol] = useState("")
    const [timeframe, setTimeframe] = useState("")
    const [modalName, setModalName] = useState("")
    const [modalNameClose, setModalNameClose] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const [openIndicator_01, setOpenIndicator_01] = useState({})
    const [openIndicator_02, setOpenIndicator_02] = useState({})
    const [openIndicator_03, setOpenIndicator_03] = useState({})
    const [openIndicator_04, setOpenIndicator_04] = useState({})
    const [openIndicator_05, setOpenIndicator_05] = useState({})
    const [openIndicator_06, setOpenIndicator_06] = useState({})

    const [closeIndicator_01, setCloseIndicator_01] = useState({})
    const [closeIndicator_02, setCloseIndicator_02] = useState({})
    const [closeIndicator_03, setCloseIndicator_03] = useState({})
    const [closeIndicator_04, setCloseIndicator_04] = useState({})
    const [closeIndicator_05, setCloseIndicator_05] = useState({})
    const [closeIndicator_06, setCloseIndicator_06] = useState({})

    const settings = { exchange, symbol, timeframe, positionSide, amount, stopLoss }
    const history = useHistory();

    function openBotPayload() {
        let payload = []
        const indicators = [openIndicator_01, openIndicator_02, openIndicator_03, openIndicator_04, openIndicator_05, openIndicator_06]

        for (const item of indicators) {
            !!item.indicator && (payload.push(item))
        }

        return payload
    }

    function closeBotPayload() {
        let payload = []
        const indicators = [closeIndicator_01, closeIndicator_02, closeIndicator_03, closeIndicator_04, closeIndicator_05, closeIndicator_06]

        for (const item of indicators) {
            !!item.indicator && (payload.push(item))
        }

        return payload
    }

    const open_logic = openBotPayload()
    const close_logic = closeBotPayload()

    useEffect(() => {
        for (const item of open_logic) {
            item?.addConditional === "Final" & !!item?.indicator & !!item?.conditional ? setOpenFinal(true) : setOpenFinal(false)
        }
    }, [open_logic])

    useEffect(() => {
        for (const item of close_logic) {
            item?.addConditional === "Final" & !!item?.indicator & !!item?.conditional ? setCloseFinal(true) : setCloseFinal(false)
        }
    }, [close_logic])

    const handleSubmmit = () => {
        setLoading(true)
        dispatchCreateBot(
            user.id,
            name,
            settings,
            open_logic,
            close_logic,
            () => {
                setLoading(false);
                history.push("/strategies");
            },
            (error) => {
                setErrorMessage(error.message)
                setLoading(false);
            }
        )
    }

    return (
        <div className="bots-page">
            <div className="strategies-container">
                <div className="strategies-header">
                    <h2 className="strategies-page-title">Craate Bot</h2>
                    <Link className="add-bot-button" to="exchanges">
                        <GoIcons.GoPlus size={16} style={{ marginRight: 3 }} />
                        New Exchange
                    </Link>
                </div>
                <h3 className="bots-condition-title">Bot Settings</h3>
                <div className="bots-condition-container">
                    <BotSettings
                        name={name}
                        setName={setName}
                        exchange={exchange}
                        symbol={symbol}
                        timeframe={timeframe}
                        setExchange={setExchange}
                        setSymbol={setSymbol}
                        setTimeframe={setTimeframe}
                        positionSide={positionSide}
                        stopLoss={stopLoss}
                        setStopLoss={setStopLoss}
                        amount={amount}
                        setAmount={setAmount}
                        setPositionSide={setPositionSide}
                    />
                </div>
                <h3 className="bots-condition-title">Open Condition</h3>
                <div className="bots-condition-container">
                    <IndicatorsList
                        indicator={openIndicator_01}
                        setIndicator={setOpenIndicator_01}
                        setModalName={setModalName}
                        modalName={modalName}
                    />
                    {openIndicator_01.type === "ma" ?
                        <MovingAverage indicator={openIndicator_01} setIndicator={setOpenIndicator_01} setNextIndicator={setOpenIndicator_02} />
                        : openIndicator_01.type === "indicator" ?
                            <Indicator indicator={openIndicator_01} setIndicator={setOpenIndicator_01} setNextIndicator={setOpenIndicator_02} />
                            : openIndicator_01.type === "candle" ?
                                <CandlePattern indicator={openIndicator_01} setIndicator={setOpenIndicator_01} setNextIndicator={setOpenIndicator_02} />
                                : null}

                </div>
                {openIndicator_01?.addConditional === "OR" || openIndicator_01?.addConditional === "AND" ?
                    <div className="bots-condition-container">
                        <IndicatorsList
                            indicator={openIndicator_02}
                            setIndicator={setOpenIndicator_02}
                            setModalName={setModalName}
                            modalName={modalName}
                        />
                        {openIndicator_02.type === "ma" ?
                            <MovingAverage indicator={openIndicator_02} setIndicator={setOpenIndicator_02} setNextIndicator={setOpenIndicator_03} />
                            : openIndicator_02.type === "indicator" ?
                                <Indicator indicator={openIndicator_02} setIndicator={setOpenIndicator_02} setNextIndicator={setOpenIndicator_03} />
                                : openIndicator_02.type === "candle" ?
                                    <CandlePattern indicator={openIndicator_02} setIndicator={setOpenIndicator_02} setNextIndicator={setOpenIndicator_03} />
                                    : null}
                    </div>
                    : null}
                {openIndicator_02?.addConditional === "OR" || openIndicator_02?.addConditional === "AND" ?
                    <div className="bots-condition-container">
                        <IndicatorsList
                            indicator={openIndicator_03}
                            setIndicator={setOpenIndicator_03}
                            setModalName={setModalName}
                            modalName={modalName}
                        />
                        {openIndicator_03.type === "ma" ?
                            <MovingAverage indicator={openIndicator_03} setIndicator={setOpenIndicator_03} setNextIndicator={setOpenIndicator_04} />
                            : openIndicator_03.type === "indicator" ?
                                <Indicator indicator={openIndicator_03} setIndicator={setOpenIndicator_03} setNextIndicator={setOpenIndicator_04} />
                                : openIndicator_03.type === "candle" ?
                                    <CandlePattern indicator={openIndicator_03} setIndicator={setOpenIndicator_03} setNextIndicator={setOpenIndicator_04} />
                                    : null}
                    </div>
                    : null}
                {openIndicator_03?.addConditional === "OR" || openIndicator_03?.addConditional === "AND" ?
                    <div className="bots-condition-container">
                        <IndicatorsList
                            indicator={openIndicator_04}
                            setIndicator={setOpenIndicator_04}
                            setModalName={setModalName}
                            modalName={modalName}
                        />
                        {openIndicator_04.type === "ma" ?
                            <MovingAverage indicator={openIndicator_04} setIndicator={setOpenIndicator_04} setNextIndicator={setOpenIndicator_05} />
                            : openIndicator_04.type === "indicator" ?
                                <Indicator indicator={openIndicator_04} setIndicator={setOpenIndicator_04} setNextIndicator={setOpenIndicator_05} />
                                : openIndicator_04.type === "candle" ?
                                    <CandlePattern indicator={openIndicator_04} setIndicator={setOpenIndicator_04} setNextIndicator={setOpenIndicator_05} />
                                    : null}
                    </div>
                    : null}
                {openIndicator_04?.addConditional === "OR" || openIndicator_04?.addConditional === "AND" ?
                    <div className="bots-condition-container">
                        <IndicatorsList
                            indicator={openIndicator_05}
                            setIndicator={setOpenIndicator_05}
                            setModalName={setModalName}
                            modalName={modalName}
                        />
                        {openIndicator_05.type === "ma" ?
                            <MovingAverage indicator={openIndicator_05} setIndicator={setOpenIndicator_05} setNextIndicator={setOpenIndicator_06} />
                            : openIndicator_05.type === "indicator" ?
                                <Indicator indicator={openIndicator_05} setIndicator={setOpenIndicator_05} setNextIndicator={setOpenIndicator_06} />
                                : openIndicator_05.type === "candle" ?
                                    <CandlePattern indicator={openIndicator_05} setIndicator={setOpenIndicator_05} setNextIndicator={setOpenIndicator_06} />
                                    : null}
                    </div>
                    : null}
                <h3 className="bots-condition-title">Close Condition</h3>

                <div className="bots-condition-container">
                    <IndicatorsList
                        indicator={closeIndicator_01}
                        setIndicator={setCloseIndicator_01}
                        setModalName={setModalNameClose}
                        modalName={modalNameClose}
                    />

                    {closeIndicator_01.type === "ma" ?
                        <MovingAverage indicator={closeIndicator_01} setIndicator={setCloseIndicator_01} setNextIndicator={setCloseIndicator_02} />
                        : closeIndicator_01.type === "indicator" ?
                            <Indicator indicator={closeIndicator_01} setIndicator={setCloseIndicator_01} setNextIndicator={setCloseIndicator_02} />
                            : closeIndicator_01.type === "candle" ?
                                <CandlePattern indicator={closeIndicator_01} setIndicator={setCloseIndicator_01} setNextIndicator={setCloseIndicator_02} />
                                : null}
                </div>
                {closeIndicator_01?.addConditional === "OR" || closeIndicator_01?.addConditional === "AND" ?
                    <div className="bots-condition-container">
                        <IndicatorsList
                            indicator={closeIndicator_02}
                            setIndicator={setCloseIndicator_02}
                            setModalName={setModalNameClose}
                            modalName={modalNameClose}
                        />

                        {closeIndicator_02.type === "ma" ?
                            <MovingAverage indicator={closeIndicator_02} setIndicator={setCloseIndicator_02} setNextIndicator={setCloseIndicator_03} />
                            : closeIndicator_02.type === "indicator" ?
                                <Indicator indicator={closeIndicator_02} setIndicator={setCloseIndicator_02} setNextIndicator={setCloseIndicator_03} />
                                : closeIndicator_02.type === "candle" ?
                                    <CandlePattern indicator={closeIndicator_02} setIndicator={setCloseIndicator_02} setNextIndicator={setCloseIndicator_03} />
                                    : null}
                    </div>
                    : null}
                {closeIndicator_02?.addConditional === "OR" || closeIndicator_02?.addConditional === "AND" ?
                    <div className="bots-condition-container">
                        <IndicatorsList
                            indicator={closeIndicator_03}
                            setIndicator={setCloseIndicator_03}
                            setModalName={setModalNameClose}
                            modalName={modalNameClose}
                        />
                        {closeIndicator_03.type === "ma" ?
                            <MovingAverage indicator={closeIndicator_03} setIndicator={setCloseIndicator_03} setNextIndicator={setCloseIndicator_04} />
                            : closeIndicator_03.type === "indicator" ?
                                <Indicator indicator={closeIndicator_03} setIndicator={setCloseIndicator_03} setNextIndicator={setCloseIndicator_04} />
                                : closeIndicator_03.type === "candle" ?
                                    <CandlePattern indicator={closeIndicator_03} setIndicator={setCloseIndicator_03} setNextIndicator={setCloseIndicator_04} />
                                    : null}
                    </div>
                    : null}
                {closeIndicator_03?.addConditional === "OR" || closeIndicator_03?.addConditional === "AND" ?
                    <div className="bots-condition-container">
                        <IndicatorsList
                            indicator={closeIndicator_04}
                            setIndicator={setCloseIndicator_04}
                            setModalName={setModalNameClose}
                            modalName={modalNameClose}
                        />
                        {closeIndicator_04.type === "ma" ?
                            <MovingAverage indicator={closeIndicator_04} setIndicator={setCloseIndicator_04} setNextIndicator={setCloseIndicator_05} />
                            : closeIndicator_04.type === "indicator" ?
                                <Indicator indicator={closeIndicator_04} setIndicator={setCloseIndicator_04} setNextIndicator={setCloseIndicator_05} />
                                : closeIndicator_04.type === "candle" ?
                                    <CandlePattern indicator={closeIndicator_04} setIndicator={setCloseIndicator_04} setNextIndicator={setCloseIndicator_05} />
                                    : null}
                    </div>
                    : null}
                {closeIndicator_04?.addConditional === "OR" || closeIndicator_04?.addConditional === "AND" ?
                    <div className="bots-condition-container">
                        <IndicatorsList
                            indicator={closeIndicator_05}
                            setIndicator={setCloseIndicator_05}
                            setModalName={setModalNameClose}
                            modalName={modalNameClose}
                        />
                        {closeIndicator_05.type === "ma" ?
                            <MovingAverage indicator={closeIndicator_05} setIndicator={setCloseIndicator_05} setNextIndicator={setCloseIndicator_06} />
                            : closeIndicator_05.type === "indicator" ?
                                <Indicator indicator={closeIndicator_05} setIndicator={setCloseIndicator_05} setNextIndicator={setCloseIndicator_06} />
                                : closeIndicator_05.type === "candle" ?
                                    <CandlePattern indicator={closeIndicator_05} setIndicator={setCloseIndicator_05} setNextIndicator={setCloseIndicator_06} />
                                    : null}
                    </div>
                    : null}
                {errorMessage ? <p className="create-bot-error">{errorMessage}</p> : null}
                {!!exchange & !!symbol & !!timeframe & closeFinal & openFinal ?
                    <button className="create-bot-button_active" disabled={loading ? true : false} onClick={() => handleSubmmit()}>
                        {
                            !loading ? 'Create Bot' : <span> <Ellipsis color="#FFF" size={42} /></span>
                        }
                    </button>
                    :
                    <button className="create-bot-button_disabled" disabled>Create Bot</button>
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    dispatchCreateBot: (user, name, settings, open_logic, close_logic, onSuccess, onError) =>
        dispatch(createBot({ user, name, settings, open_logic, close_logic }, onSuccess, onError)),
});

const mapStateToProps = (state) => ({
    bot: state.bot,
    user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBotPage);