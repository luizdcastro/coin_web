import React, { useEffect, useState } from 'react'
import * as FiIcons from 'react-icons/fi'
import * as MdIcons from 'react-icons/md'
import { connect } from "react-redux";
import { getMe } from '../../redux/actions/UserActions';
import { Link } from 'react-router-dom';
import { deleteBot, updateBot, getBot } from '../../redux/actions/BotActions';
import { Line } from 'react-chartjs-2';

import './styles.css'

const BotDetails = ({ setOpen, botDetails, disptachDeleteBot, disptachUpdateBot, dispatchGetBot, disptachGetMe }) => {
    let moment = require('moment');
    const [orders, setOrders] = useState([])

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
            data.push((item.sell_price - item.buy_price).toFixed(2))
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
        disptachUpdateBot(
            active,
            botId,
            (response) => {
                console.log(response);
                disptachGetMe();
            },
            (error) => console.log(error)
        )
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
                        <MdIcons.MdClose className="indicator-modal-close" onClick={() => setOpen(false)} />
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
                                <p className="bot-model-data-name_item">{botDetails.settings.symbol.slice(0,-4) + "/" + botDetails.settings.symbol.slice(-4)}</p>
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
                                : <li className="bot-model-icon-container" onClick={() => { handleUpdate(botDetails.id, true); setOpen(false) }}>
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
                    <div width="100%" height={300}>
                        <Line data={chartData} options={options} />
                    </div>
                    <h3 className="bot-modal-order_title">Orders History</h3>
                    {orders.length >= 1 && (
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
                                        <p className="bot-model-data-name_item">{item.percent?.toFixed(2)}</p>
                                    </li>
                                    <li style={{ display: 'flex' }}>
                                        <p className="bot-model-data-name">Profit:</p>
                                        <p className="bot-model-data-name_item">{item.profit?.toFixed(2)}</p>
                                    </li>
                                </ul>
                                <div className="bot-modal-order_percent">
                                </div>
                            </div>
                        )))}
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



