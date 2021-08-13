import React from 'react'
import * as MdIcons from 'react-icons/md'
import * as FiIcons from 'react-icons/fi'
import { connect } from "react-redux";
import { getMe } from '../../redux/actions/UserActions'
import { deleteBot, updateBot } from '../../redux/actions/BotActions';
import { AreaChart, Area, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './styles.css'

const BotDetails = ({ setOpen, botDetails, disptachDeleteBot, disptachUpdateBot, disptachGetMe }) => {
    let moment = require('moment');
    
    const data = [
        {
            uv: 0.5,
        },    
        {
            uv: 0.3,
        },    
        {
            uv: 1,
        }, 
        {
            uv: -1,
        }, 
        {
            uv: -2,
        }        
    ];

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
                    <MdIcons.MdClose className="bot-modal-close" onClick={() => setOpen(false)} />
                    <h3 className="bot-modal-title">Bot Settings</h3>
                    <div className="bot-modal-header">                  
                    <ul>
                        <li style={{ display: 'flex' }}>
                            <p className="bot-model-data-name">Status:</p>
                            <p className="bot-model-data-name">{botDetails.active ? "Active" : "Inactive"}</p>
                        </li>
                        <li style={{ display: 'flex' }}>
                            <p className="bot-model-data-name">Exchange:</p>
                            <p className="bot-model-data-name">{botDetails.settings.exchange}</p>
                        </li>
                        <li style={{ display: 'flex' }}>
                            <p className="bot-model-data-name">Started:</p>
                            <p className="bot-model-data-name">{moment(botDetails.createdAt).format("MMMM Do YYYY hh:mm A")}</p>
                        </li>
                    </ul>
                    <ul>
                        {botDetails.active ?
                            <li className="bot-model-icon-container" onClick={() => { handleUpdate(botDetails.id, false); setOpen(false); }}>
                                <FiIcons.FiPause size={16} style={{marginRight: 5}} />
                                <p className="bot-model-icon-name">Pause</p>
                            </li>
                            : <li className="bot-model-icon-container" onClick={() => { handleUpdate(botDetails.id, true); setOpen(false) }}>
                                <FiIcons.FiPlay size={16} style={{marginRight: 5}} />
                                <p className="bot-model-icon-name">Start</p>
                            </li>
                        }                       
                        <li className="bot-model-icon-container" onClick={() => { handleDelete(botDetails.id); setOpen(false) }} >
                            <FiIcons.FiTrash size={16} style={{marginRight: 5}} />
                            <p className="bot-model-icon-name">Delete</p>
                        </li>
                    </ul>
                    </div>
                    <ResponsiveContainer width="106%" height="25%">
                        <AreaChart
                            width={450}
                            height={200}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />

                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    disptachGetMe: () => dispatch(getMe()),
    disptachDeleteBot: (botId, onSuccess, onError) => dispatch(deleteBot(botId, onSuccess, onError)),
    disptachUpdateBot: (active, botId, onSuccess, onError) => dispatch(updateBot({ active }, botId, onSuccess, onError)),
});

export default connect(null, mapDispatchToProps)(BotDetails);



