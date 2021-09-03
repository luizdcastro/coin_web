import React from 'react'
import { Link } from 'react-router-dom'
import * as BiIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io5";
import './styles.css'

const TemplatesPage = ({ name, description, config, to }) => {

    return (
        <Link className="template-bot-content" to={to}>
            <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                <div style={{ width: 25 }}>
                    <BiIcons.BsFillGrid1X2Fill size={24} color="#bb86fc" style={{ marginTop: 4, paddingRight: 2 }} />
                </div>
                <p className="templates_row_name" style={{ paddingLeft: 10 }}>{name}</p>
            </div>
            <div style={{ flex: 2 }}>
                <div style={{ width: 400 }}>
                    <p className="templates_row_description">{description}</p>
                </div>
            </div>
            <div style={{ flex: 1 }}>
                <p className="templates_row_name">{config}</p>
            </div>
            <div style={{ flex: 1, textAlign: 'right' }}>
                <IoIcons.IoArrowForwardOutline size={22} color="#bb86fc" style={{ marginRight: 35 }} />
            </div>
        </Link>
    )
}

export default TemplatesPage