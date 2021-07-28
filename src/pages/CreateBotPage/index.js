import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { createBot } from '../../redux/actions/BotActions';
import { Ellipsis } from 'react-css-spinners';

import IndicatorsList from '../../components/IndicatorsList';
import BotSettings from '../../components/BotSettings'
import RSI from '../../components/Indicators/RSI';
import Supertrend from '../../components/Indicators/Supertrend';
import MACD from '../../components/Indicators/MACD';
import Stochastic from '../../components/Indicators/Stochastic';

import './styles.css'

const CreateBotPage = ({ dispatchCreateBot, user }) => {
    const [loading, setLoading] = useState(false)
    const [openFinal, setOpenFinal] = useState(false)
    const [closeFinal, setCloseFinal] = useState(false)
    const [exchange, setExchange] = useState("")
    const [symbol, setSymbol] = useState("")
    const [timeframe, setTimeframe] = useState("")
    const [modalName, setModalName] = useState("")
    const [modalNameClose, setModalNameClose] = useState("")

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

    const settings = { exchange, symbol, timeframe }
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
            settings,
            open_logic,
            close_logic,
            (response) => {
                console.log(response);
                setLoading(false);
                history.push("/strategies");
            },
            (error) => {
                console.log(error);
                setLoading(false);
            }
        )
    }
   
    return (
        <div className="bots-page">
            <div style={{ marginTop: 40 }} >
                <h2 className="bots-page-title">Create Bot</h2>
                <h3 className="bots-condition-title">Settings</h3>
                <div className="bots-condition-container">
                    <BotSettings
                        exchange={exchange}
                        symbol={symbol}
                        timeframe={timeframe}
                        setExchange={setExchange}
                        setSymbol={setSymbol}
                        setTimeframe={setTimeframe}
                    />
                </div>
                <h3 className="bots-condition-title">Open long condition</h3>
                <div className="bots-condition-container">
                    <IndicatorsList
                        indicator={openIndicator_01}
                        setIndicator={setOpenIndicator_01}
                        setModalName={setModalName}
                        modalName={modalName}
                    />
                    {openIndicator_01.indicator === 'RSI' ?
                        <RSI indicator={openIndicator_01} setIndicator={setOpenIndicator_01} setNextIndicator={setOpenIndicator_02} />
                        : openIndicator_01.indicator === 'Supertrend' ?
                            <Supertrend indicator={openIndicator_01} setIndicator={setOpenIndicator_01} setNextIndicator={setOpenIndicator_02} />
                            : openIndicator_01.indicator === 'MACD' ?
                                <MACD indicator={openIndicator_01} setIndicator={setOpenIndicator_01} setNextIndicator={setOpenIndicator_02} />
                                : openIndicator_01.indicator === 'Stochastic' ?
                                    <Stochastic indicator={openIndicator_01} setIndicator={setOpenIndicator_01} setNextIndicator={setOpenIndicator_02} />
                                    : null
                    }
                </div>
                {openIndicator_01?.addConditional === "OR" || openIndicator_01?.addConditional === "AND" ?
                    <div className="bots-condition-container">
                        <IndicatorsList
                            indicator={openIndicator_02}
                            setIndicator={setOpenIndicator_02}
                            setModalName={setModalName}
                            modalName={modalName}
                        />
                        {openIndicator_02.indicator === 'RSI' ?
                            <RSI indicator={openIndicator_02} setIndicator={setOpenIndicator_02} setNextIndicator={setOpenIndicator_03} />
                            : openIndicator_02.indicator === 'Supertrend' ?
                                <Supertrend indicator={openIndicator_02} setIndicator={setOpenIndicator_02} setNextIndicator={setOpenIndicator_03} />
                                : openIndicator_02.indicator === 'MACD' ?
                                    <MACD indicator={openIndicator_02} setIndicator={setOpenIndicator_02} setNextIndicator={setOpenIndicator_03} />
                                    : openIndicator_02.indicator === 'Stochastic' ?
                                        <Stochastic indicator={openIndicator_02} setIndicator={setOpenIndicator_02} setNextIndicator={setOpenIndicator_03} />
                                        : null
                        }
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
                        {openIndicator_03.indicator === 'RSI' ?
                            <RSI indicator={openIndicator_03} setIndicator={setOpenIndicator_03} setNextIndicator={setOpenIndicator_04} />
                            : openIndicator_03.indicator === 'Supertrend' ?
                                <Supertrend indicator={openIndicator_03} setIndicator={setOpenIndicator_03} setNextIndicator={setOpenIndicator_04} />
                                : openIndicator_03.indicator === 'MACD' ?
                                    <MACD indicator={openIndicator_03} setIndicator={setOpenIndicator_03} setNextIndicator={setOpenIndicator_04} />
                                    : openIndicator_03.indicator === 'Stochastic' ?
                                        <Stochastic indicator={openIndicator_03} setIndicator={setOpenIndicator_03} setNextIndicator={setOpenIndicator_04} />
                                        : null
                        }
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
                        {openIndicator_04.indicator === 'RSI' ?
                            <RSI indicator={openIndicator_04} setIndicator={setOpenIndicator_04} setNextIndicator={setOpenIndicator_05} />
                            : openIndicator_04.indicator === 'Supertrend' ?
                                <Supertrend indicator={openIndicator_04} setIndicator={setOpenIndicator_04} setNextIndicator={setOpenIndicator_05} />
                                : openIndicator_04.indicator === 'MACD' ?
                                    <MACD indicator={openIndicator_04} setIndicator={setOpenIndicator_04} setNextIndicator={setOpenIndicator_05} />
                                    : openIndicator_04.indicator === 'Stochastic' ?
                                        <Stochastic indicator={openIndicator_04} setIndicator={setOpenIndicator_04} setNextIndicator={setOpenIndicator_05} />
                                        : null
                        }
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
                        {openIndicator_05.indicator === 'RSI' ?
                            <RSI indicator={openIndicator_05} setIndicator={setOpenIndicator_05} setNextIndicator={setOpenIndicator_06} />
                            : openIndicator_05.indicator === 'Supertrend' ?
                                <Supertrend indicator={openIndicator_05} setIndicator={setOpenIndicator_05} setNextIndicator={setOpenIndicator_06} />
                                : openIndicator_05.indicator === 'MACD' ?
                                    <MACD indicator={openIndicator_05} setIndicator={setOpenIndicator_05} setNextIndicator={setOpenIndicator_06} />
                                    : openIndicator_05.indicator === 'Stochastic' ?
                                        <Stochastic indicator={openIndicator_05} setIndicator={setOpenIndicator_05} setNextIndicator={setOpenIndicator_06} />
                                        : null
                        }
                    </div>
                    : null}
                <h3 className="bots-condition-title">Close long condition</h3>

                <div className="bots-condition-container">
                    <IndicatorsList
                        indicator={closeIndicator_01}
                        setIndicator={setCloseIndicator_01}
                        setModalName={setModalNameClose}
                        modalName={modalNameClose}
                    />
                    {closeIndicator_01.indicator === 'RSI' ?
                        <RSI indicator={closeIndicator_01} setIndicator={setCloseIndicator_01} setNextIndicator={setCloseIndicator_02} />
                        : closeIndicator_01.indicator === 'Supertrend' ?
                            <Supertrend indicator={closeIndicator_01} setIndicator={setCloseIndicator_01} setNextIndicator={setCloseIndicator_02} />
                            : closeIndicator_01.indicator === 'MACD' ?
                                <MACD indicator={closeIndicator_01} setIndicator={setCloseIndicator_01} setNextIndicator={setCloseIndicator_02} />
                                : closeIndicator_01.indicator === 'Stochastic' ?
                                    <Stochastic indicator={closeIndicator_01} setIndicator={setCloseIndicator_01} setNextIndicator={setCloseIndicator_02} />
                                    : null
                    }
                </div>
                {closeIndicator_01?.addConditional === "OR" || closeIndicator_01?.addConditional === "AND" ?
                    <div className="bots-condition-container">
                        <IndicatorsList
                            indicator={closeIndicator_02}
                            setIndicator={setCloseIndicator_02}
                            setModalName={setModalNameClose}
                            modalName={modalNameClose}
                        />
                        {closeIndicator_02.indicator === 'RSI' ?
                            <RSI indicator={closeIndicator_02} setIndicator={setCloseIndicator_02} setNextIndicator={setCloseIndicator_03} />
                            : closeIndicator_02.indicator === 'Supertrend' ?
                                <Supertrend indicator={closeIndicator_02} setIndicator={setCloseIndicator_02} setNextIndicator={setCloseIndicator_03} />
                                : closeIndicator_02.indicator === 'MACD' ?
                                    <MACD indicator={closeIndicator_02} setIndicator={setCloseIndicator_02} setNextIndicator={setCloseIndicator_03} />
                                    : closeIndicator_02.indicator === 'Stochastic' ?
                                        <Stochastic indicator={closeIndicator_02} setIndicator={setCloseIndicator_02} setNextIndicator={setCloseIndicator_03} />
                                        : null
                        }
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
                        {closeIndicator_03.indicator === 'RSI' ?
                            <RSI indicator={closeIndicator_03} setIndicator={setCloseIndicator_03} setNextIndicator={setCloseIndicator_04} />
                            : closeIndicator_03.indicator === 'Supertrend' ?
                                <Supertrend indicator={closeIndicator_03} setIndicator={setCloseIndicator_03} setNextIndicator={setCloseIndicator_04} />
                                : closeIndicator_03.indicator === 'MACD' ?
                                    <MACD indicator={closeIndicator_03} setIndicator={setCloseIndicator_03} setNextIndicator={setCloseIndicator_04} />
                                    : closeIndicator_03.indicator === 'Stochastic' ?
                                        <Stochastic indicator={closeIndicator_03} setIndicator={setCloseIndicator_03} setNextIndicator={setCloseIndicator_04} />
                                        : null
                        }
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
                        {closeIndicator_04.indicator === 'RSI' ?
                            <RSI indicator={closeIndicator_04} setIndicator={setCloseIndicator_04} setNextIndicator={setCloseIndicator_05} />
                            : closeIndicator_04.indicator === 'Supertrend' ?
                                <Supertrend indicator={closeIndicator_04} setIndicator={setCloseIndicator_04} setNextIndicator={setCloseIndicator_05} />
                                : closeIndicator_04.indicator === 'MACD' ?
                                    <MACD indicator={closeIndicator_04} setIndicator={setCloseIndicator_04} setNextIndicator={setCloseIndicator_05} />
                                    : closeIndicator_04.indicator === 'Stochastic' ?
                                        <Stochastic indicator={closeIndicator_04} setIndicator={setCloseIndicator_04} setNextIndicator={setCloseIndicator_05} />
                                        : null
                        }
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
                        {closeIndicator_05.indicator === 'RSI' ?
                            <RSI indicator={closeIndicator_05} setIndicator={setCloseIndicator_05} setNextIndicator={setCloseIndicator_06} />
                            : closeIndicator_05.indicator === 'Supertrend' ?
                                <Supertrend indicator={closeIndicator_05} setIndicator={setCloseIndicator_05} setNextIndicator={setCloseIndicator_06} />
                                : closeIndicator_05.indicator === 'MACD' ?
                                    <MACD indicator={closeIndicator_05} setIndicator={setCloseIndicator_05} setNextIndicator={setCloseIndicator_06} />
                                    : closeIndicator_05.indicator === 'Stochastic' ?
                                        <Stochastic indicator={closeIndicator_05} setIndicator={setCloseIndicator_05} setNextIndicator={setCloseIndicator_06} />
                                        : null
                        }
                    </div>
                    : null}
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
    dispatchCreateBot: (user, settings, open_logic, close_logic, onSuccess, onError) =>
        dispatch(createBot({ user, settings, open_logic, close_logic }, onSuccess, onError)),
});

const mapStateToProps = (state) => ({
    bot: state.bot,
    user: state.user
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBotPage);