import React, { useEffect, useState } from 'react'
import * as FiIcons from 'react-icons/fi'
import * as IoIcons from 'react-icons/io5'
import { connect } from "react-redux";
import { getMe } from '../../redux/actions/UserActions';
import { Link } from 'react-router-dom';
import { deleteBot, updateBot, getBot } from '../../redux/actions/BotActions';
import { Line } from 'react-chartjs-2';

import './styles.css'

const BotDetails = ({ setOpen, botDetails, disptachDeleteBot, disptachUpdateBot, dispatchGetBot, disptachGetMe }) => {
    let moment = require('moment');
    const [orders, setOrders] = useState([])
    const [updateError, setUpdateError] = useState("")
    const [logType, setLogtype] = useState("orders")

    useEffect(() =>
        dispatchGetBot(
            botDetails._id,
            (response) => { setOrders(response.data?.orders) },
            (error) => console.log(error)
            // eslint-disable-next-line react-hooks/exhaustive-deps
        ), [])

    const data = []
    const time = []

    for (const item of orders?.slice(-10)) {
        if (!item.active) {
            data.push(item.profit.toFixed(2))
            time.push(moment(item.close_time).format("MMM DD hh:mm A"))
        }
    }

    const chartData = {
        labels: time,
        datasets: [
            {
                label: "Closed Orders",
                data: data,
                fill: true,
                backgroundColor: 'rgba(130, 87, 230, 0.3)',
                pointBorderColor: "rgba(130, 87, 230, 0.8)",
                tension: 0.4,
                borderWidth: 3,
                pointRadius: 4,
                pointBorderWidth: 3,
            },
        ],
    };

    const options = {
        plugins: {
            tooltip: {
                padding: 10,
                intersect: false,
                usePointStyle: true,
                footerAlign: 'right'
            },

        },
        scales: {
            y: {
                ticks: {
                    color: 'rgba(255, 255, 255, 0.5)',
                    maxTicksLimit: 3,
                    beginAtZero: true,
                },
                grid: {
                    display: false,
                }
            },
            x: {
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                }
            }
        },
    };

    const handleOutsideClick = (e) => {
        if (e.target.id === "bot") {
            setOpen(false)
        }
    }

    const handleDelete = (botId) => {
        disptachDeleteBot(
            botId,
            (response) => {
                console.log(response);
                disptachGetMe();
            },
            (error) => console.log(error)
        )
    }

    const handleUpdate = (botId, active) => {
        if (!!botDetails.settings.exchange.name) {
            disptachUpdateBot(
                active,
                botId,
                (response) => {
                    console.log(response);
                    disptachGetMe();
                    setOpen(false)
                },
                (error) => console.log(error)
            )
            setUpdateError("")
        } else {
            setUpdateError("Please add an exchange before start your bot.")
        }
    }

    return (
        <React.Fragment >
            <div
                id="bot"
                className="bot-modal"
                onClick={handleOutsideClick}
            >
                <div className="bot-modal-container">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 className="bot-modal-title">Bot Settings</h3>
                        <IoIcons.IoCloseSharp className="indicator-modal-close" onClick={() => setOpen(false)} />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <p className="bot-model-data-name">Name:</p>
                        <p className="bot-model-data-name_item">{botDetails.name}</p>
                    </div>
                    <div className="bot-modal-header">
                        <ul>
                            <li style={{ display: 'flex' }}>
                                <p className="bot-model-data-name">Status:</p>
                                <p className="bot-model-data-name_item">{botDetails.active ? "Active" : "Inactive"}</p>
                            </li>
                            <li style={{ display: 'flex' }}>
                                <p className="bot-model-data-name">Symbol:</p>
                                <p className="bot-model-data-name_item">{botDetails.settings.symbol.slice(0, -4) + "/" + botDetails.settings.symbol.slice(-4)}</p>
                            </li>
                            <li style={{ display: 'flex' }}>
                                <p className="bot-model-data-name">Exchange:</p>
                                <p className="bot-model-data-name_item">{botDetails.settings.exchange.name.toUpperCase()}</p>
                            </li>
                            <li style={{ display: 'flex' }}>
                                <p className="bot-model-data-name">Started:</p>
                                <p className="bot-model-data-name_item">{moment(botDetails.createdAt).format("MMM DD YYYY hh:mm A")}</p>
                            </li>
                            <li style={{ display: 'flex' }}>
                                <p className="bot-model-data-name">Growth:</p>
                                <p className="bot-model-data-name_item">{botDetails.growth.toFixed(2)}%</p>
                            </li>
                        </ul>
                        <ul>
                            {botDetails.active ?
                                <li className="bot-model-icon-container" onClick={() => { handleUpdate(botDetails.id, false); setOpen(false); }}>
                                    <FiIcons.FiPause size={17} style={{ marginRight: 5 }} />
                                    <p className="bot-model-icon-name">Pause</p>
                                </li>
                                : <li className="bot-model-icon-container" onClick={() => { handleUpdate(botDetails.id, true) }}>
                                    <FiIcons.FiPlay size={17} style={{ marginRight: 5 }} />
                                    <p className="bot-model-icon-name">Start</p>
                                </li>
                            }
                            <Link className="bot-model-icon-container" to={`/edit-bot/${botDetails._id}`} onClick={() => { setOpen(false) }} >
                                <FiIcons.FiEdit size={17} style={{ marginRight: 5 }} />
                                <p className="bot-model-icon-name">Edit</p>
                            </Link>
                            <li className="bot-model-icon-container" onClick={() => { handleDelete(botDetails.id); setOpen(false) }} >
                                <FiIcons.FiTrash size={17} style={{ marginRight: 5 }} />
                                <p className="bot-model-icon-name">Delete</p>
                            </li>
                        </ul>
                    </div>
                    {!!updateError && (<p className="bot_model-error">{updateError}</p>)}

                    <div width="100%" height={300}>
                        <Line data={chartData} options={options} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20, marginTop: 20 }}>
                        <button
                            className={logType === "orders" ? "bot-modal_orders-button-active" : "bot-modal_orders-button"}
                            onClick={() => setLogtype("orders")}
                        >Orders History</button>
                        <button
                            className={logType === "events" ? "bot-modal_orders-button-active" : "bot-modal_orders-button"}
                            onClick={() => setLogtype("events")}
                        >Event logs</button>
                    </div>
                    {logType === "orders" ?
                        <div>
                            {!!orders.length ?
                                orders.map((item) => (
                                    <div key={item.id} className="bot-model-order_container">
                                        <ul className="bot-modal-order_list">
                                            <li style={{ display: 'flex' }}>
                                                <p className="bot-model-data-name">Order Status:</p>
                                                <p className="bot-model-data-name_item">{item.active ? "Open" : "Closed"}</p>
                                            </li>
                                            <li style={{ display: 'flex' }}>
                                                <p className="bot-model-data-name">Open Time:</p>
                                                <p className="bot-model-data-name_item">{moment(item.open_time).format("MM-DD-YYYY hh:mm A")}</p>
                                            </li>
                                            <li style={{ display: 'flex' }}>
                                                <p className="bot-model-data-name">Quantity:</p>
                                                <p className="bot-model-data-name_item">{item.quantity?.toFixed(4)}</p>
                                            </li>
                                            <li style={{ display: 'flex' }}>
                                                <p className="bot-model-data-name">Buy Price:</p>
                                                <p className="bot-model-data-name_item">{item.buy_price?.toFixed(2)}</p>
                                            </li>
                                            <li style={{ display: 'flex' }}>
                                                <p className="bot-model-data-name">Close Time:</p>
                                                <p className="bot-model-data-name_item">{item.close_time && (moment(item.close_time).format("MM-DD-YYYY hh:mm A"))}</p>
                                            </li>
                                            <li style={{ display: 'flex' }}>
                                                <p className="bot-model-data-name">Sell Price:</p>
                                                <p className="bot-model-data-name_item">{item.sell_price?.toFixed(2)}</p>
                                            </li>
                                            <li style={{ display: 'flex' }}>
                                                <p className="bot-model-data-name">Percent:</p>
                                                <p className="bot-model-data-name_item">{!!item.percent ? item.percent?.toFixed(2) + "%" : ""}</p>
                                            </li>
                                            <li style={{ display: 'flex' }}>
                                                <p className="bot-model-data-name">Total:</p>
                                                <p className="bot-model-data-name_item">{!!item.profit ? "$" + item.profit.toFixed(2) : ""}</p>
                                            </li>
                                        </ul>
                                    </div>
                                ))
                                :
                                <div style={{ marginTop: 35 }}>
                                    <p style={{ fontWeight: 500, color: 'rgba(255,255,255, 0.8)', fontSize: 18, textAlign: 'center', marginBottom: 10 }}>No orders were found.</p>
                                    <p style={{ fontWeight: 400, color: 'rgba(255,255,255, 0.8)', fontSize: 14, textAlign: 'center' }}>Waiting for condition logic to be triggered.</p>
                                </div>
                            }
                        </div>
                        :
                        <div>
                            {!!botDetails.events.length ?
                                botDetails.events.map((item) => (
                                    <div key={item.id} className="bot-model-order_container">
                                        <ul className="bot-modal-order_list">
                                            <li style={{ display: 'flex' }}>
                                                <p className="bot-model-data-name">Exchange:</p>
                                                <p className="bot-model-data-name_item">{item?.exchange.toUpperCase()}</p>
                                            </li>
                                            <li style={{ display: 'flex' }}>
                                                <p className="bot-model-data-name">Side:</p>
                                                <p className="bot-model-data-name_item">{item?.side}</p>
                                            </li>
                                            <li style={{ display: 'flex' }}>
                                                <p className="bot-model-data-name">Time:</p>
                                                <p className="bot-model-data-name_item">{moment(item?.time).format("MM-DD-YYYY hh:mm A")}</p>
                                            </li>
                                            <li style={{ display: 'flex' }}>
                                                <p className="bot-model-data-name">Type:</p>
                                                <p className="bot-model-data-name_item">{item?.type}</p>
                                            </li>                                            
                                            <li style={{ display: 'flex' }}>
                                                <p className="bot-model-data-name">Details:</p>
                                                <p className="bot-model-data-name_item">{item?.message}</p>
                                            </li>
                                        </ul>
                                    </div>
                                )) :
                                <div style={{ marginTop: 35 }}>
                                    <p style={{ fontWeight: 500, color: 'rgba(255,255,255, 0.8)', fontSize: 18, textAlign: 'center', marginBottom: 10 }}>No events were found.</p>
                                    <p style={{ fontWeight: 400, color: 'rgba(255,255,255, 0.8)', fontSize: 14, textAlign: 'center' }}>Any events or errors were tracked so far.</p>
                                </div>
                            }
                        </div>}
                </div>
            </div>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    disptachGetMe: () => dispatch(getMe()),
    dispatchGetBot: (botId, onSuccess, onError) => dispatch(getBot(botId, onSuccess, onError)),
    disptachDeleteBot: (botId, onSuccess, onError) => dispatch(deleteBot(botId, onSuccess, onError)),
    disptachUpdateBot: (active, botId, onSuccess, onError) => dispatch(updateBot({ active }, botId, onSuccess, onError)),
});

export default connect(null, mapDispatchToProps)(BotDetails);



