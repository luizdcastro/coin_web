import React from 'react'
import * as BiIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io5";
import './styles.css'

const TemplatesPage = ({ name, description, config, onClick }) => {

    return (
        <div className="template-bot-content" onClick={onClick}>
            <div className="templates-bot_name-container">
                <div style={{ width: 25 }}>
                    <BiIcons.BsFillGrid1X2Fill size={24} color="#bb86fc" style={{ marginTop: 4, paddingRight: 2 }} />
                </div>
                <p className="template-bot_name-text">{name}</p>
            </div>
            <div style={{ flex: 2 }}>
                <p className="template-bot_description-text">{description}</p>
            </div>
            <div style={{ flex: 1 }}>
                <p className="template-bot_config-text">{config}</p>
            </div>
            <div style={{ flex: 1, textAlign: 'right' }}>
                <IoIcons.IoPlay size={22} color="#bb86fc" style={{ marginRight: 30 }} />
            </div>
        </div>
    )
}

export default TemplatesPage