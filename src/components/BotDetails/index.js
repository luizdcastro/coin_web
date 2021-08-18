import React, { useEffect, useState } from 'react'
import * as FiIcons from 'react-icons/fi'
import * as MdIcons from 'react-icons/md'
import { connect } from "react-redux";
import { getMe } from '../../redux/actions/UserActions'
import { deleteBot, updateBot, getBot } from '../../redux/actions/BotActions';
import { AreaChart, Area, CartesianGrid, Tooltip, ResponsiveContainer, XAxis } from 'recharts';

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

    for (const item of orders) {
        if (!item.active) {
            data.push({
                Date: moment(item.createdAt).format("DD-MM hh:mm A"),
                Value: (item.sell_price - item.buy_price).toFixed(2)
            })
        }
    }

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
                    <p style={{ fontSize: 13, marginTop: 1 }}>ID: {botDetails._id}</p>
                    <div className="bot-modal-header">
                        <ul>
                            <li style={{ display: 'flex' }}>
                                <p className="bot-model-data-name">Status:</p>
                                <p className="bot-model-data-name">{botDetails.active ? "Active" : "Inactive"}</p>
                            </li>
                            <li style={{ display: 'flex' }}>
                                <p className="bot-model-data-name">Exchange:</p>
                                <p className="bot-model-data-name">{botDetails.settings.exchange.name}</p>
                            </li>
                            <li style={{ display: 'flex' }}>
                                <p className="bot-model-data-name">Started:</p>
                                <p className="bot-model-data-name">{moment(botDetails.createdAt).format("MMM DD YYYY hh:mm A")}</p>
                            </li>
                        </ul>
                        <ul>
                            {botDetails.active ?
                                <li className="bot-model-icon-container" onClick={() => { handleUpdate(botDetails.id, false); setOpen(false); }}>
                                    <FiIcons.FiPause size={16} style={{ marginRight: 5 }} />
                                    <p className="bot-model-icon-name">Pause</p>
                                </li>
                                : <li className="bot-model-icon-container" onClick={() => { handleUpdate(botDetails.id, true); setOpen(false) }}>
                                    <FiIcons.FiPlay size={16} style={{ marginRight: 5 }} />
                                    <p className="bot-model-icon-name">Start</p>
                                </li>
                            }
                            <li className="bot-model-icon-container" onClick={() => { handleDelete(botDetails.id); setOpen(false) }} >
                                <FiIcons.FiTrash size={16} style={{ marginRight: 5 }} />
                                <p className="bot-model-icon-name">Delete</p>
                            </li>
                        </ul>
                    </div>
                    <ResponsiveContainer width="101%" height="35%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#635bff" stopOpacity={0.75} />
                                    <stop offset="75%" stopColor="#635bff" stopOpacity={0.3} />
                                </linearGradient>
                            </defs>
                            <Area dataKey="Value" stroke="#635bff" fill="url(#color)" />
                            <XAxis
                                dataKey="Date"
                                axisLine={false}
                                tickLine={false}
                                tickFormatter={() => ""}
                            />
                            <Tooltip />
                            <CartesianGrid opacity={0.4} strokeDasharray="3 3" />
                        </AreaChart>
                    </ResponsiveContainer>
                    <h3 className="bot-modal-order_title">Order History</h3>
                    {orders.length >= 1 && (
                        orders.map((item) => (
                            <div key={item.id} className="bot-model-order_container">
                                <ul className="bot-modal-order_list">
                                    <li style={{ display: 'flex' }}>
                                        <p className="bot-model-data-name">Symbol:</p>
                                        <p className="bot-model-data-name">{botDetails.settings.symbol}</p>
                                    </li>
                                    <li style={{ display: 'flex' }}>
                                        <p className="bot-model-data-name">Order Status:</p>
                                        <p className="bot-model-data-name">{item.active ? "open" : "closed"}</p>
                                    </li>
                                    <li style={{ display: 'flex' }}>
                                        <p className="bot-model-data-name">Open Time:</p>
                                        <p className="bot-model-data-name">{moment(item.open_time).format("MM-DD-YYYY hh:mm A")}</p>
                                    </li>
                                    <li style={{ display: 'flex' }}>
                                        <p className="bot-model-data-name">Buy Price:</p>
                                        <p className="bot-model-data-name">{item.buy_price?.toFixed(2)}</p>
                                    </li>
                                    <li style={{ display: 'flex' }}>
                                        <p className="bot-model-data-name">Close Time:</p>
                                        <p className="bot-model-data-name">{item.close_time && (moment(item.close_time).format("MM-DD-YYYY hh:mm A"))}</p>
                                    </li>
                                    <li style={{ display: 'flex' }}>
                                        <p className="bot-model-data-name">Sell Price:</p>
                                        <p className="bot-model-data-name">{item.sell_price?.toFixed(2)}</p>
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



