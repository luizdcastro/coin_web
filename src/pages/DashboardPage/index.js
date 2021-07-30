
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './styles.css'

const DashboardPage = () => {

    const data = [
        {
            name: '25/07',
            long: 4000,
            short: 2400,
            amt: 2400,
        },
        {
            name: '26/07',
            long: 3000,
            short: 1398,
            amt: 2210,
        },
        {
            name: '27/07',
            long: 2000,
            short: 9800,
            amt: 2290,
        },
        {
            name: '28/07',
            long: 2780,
            short: 3908,
            amt: 2000,
        },     
    ];
    

    return (
        <div className="dashboard-page">
            <div className="dashboard-container">
            <h2 className="dashboard-title">Dashboard</h2>
               
            </div>
        </div>
    )
}

export default DashboardPage