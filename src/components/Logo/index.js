import React from 'react'
import LogoTradingrid from '../../assets/images/logos/tradingrid.png'
import './styles.css'

const Logo = ({style, href}) => {
    return (
        <a className="main-logo_container" href={href || "/"} style={style}>
            <img src={LogoTradingrid} alt="tradingrid_logo" className="main-logo" />
        </a>
    )
}

export default Logo