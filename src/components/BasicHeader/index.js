import React from 'react'
import { Link } from 'react-router-dom'
import * as IoIcons from 'react-icons/io5'

import './styles.css'

const BasicHeader = () => {

    return (
        <div className="main-header">
            <nav className="main-header-nav">
                <div className="main-header_logo-container">
                    <IoIcons.IoGrid className="main-header_logo-icon" />
                    <Link className="main-header_logo-text" to="/">tradingrid</Link>
                </div>
            </nav>
        </div>
    )
}

export default BasicHeader