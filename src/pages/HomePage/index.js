import React from 'react'
import MainHeader from '../../components/MainHeader'
import * as MdIcons from 'react-icons/md'
import { Link } from 'react-router-dom'
import './styles.css'

const HomePage = () => {

    return (
        <div>
            <MainHeader />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', height: "80vh" }}>
                <div>
                    <h1 style={{ fontSize: 80, fontWeight: 800, textAlign: 'center', color: "rgba(255,255,255,0.95)" }}>Automate your <br />trading strategies</h1>
                    <h2 style={{ textAlign: 'center', color: "rgba(255,255,255,0.7)", fontSize: 20, marginTop: 15, fontWeight: 300 }}>Create your custom crypto trading bot even without coding skills.</h2>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 30 }}>
                        <Link className="homepage-getstarted-button">Get Started
                            <MdIcons.MdKeyboardArrowRight size={22} color="rgba(255,255,255,0.8)" style={{marginTop: 1}} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage

