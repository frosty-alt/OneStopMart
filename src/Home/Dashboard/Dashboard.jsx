import React from 'react'
import { NavLink } from 'react-router-dom';
import './Dashboard.css'
import Order from '../../assets/Order.svg'
import Overview from '../../assets/Overview.svg'
import Address from '../../assets/Address.svg'
import Setting from '../../assets/Setting.svg' 
import Payment from '../../assets/Payment.svg'
const Dashboard = () => {
  return (
    <>
        <nav className="sidebar">
            <h2 className="sidebar-title">Dashboard</h2>
     <ul>
     <li><NavLink to="/Overview"><img src={Overview} alt="Overview" /><span>Overview</span></NavLink></li>
    <li><NavLink to="/orders"><img src={Order} alt="Orders" /><span>Orders</span></NavLink></li>
    <li><NavLink to="/address"><img src={Address} alt="Address" /><span>Address</span></NavLink></li>
    <li><NavLink to="/payment"><img src={Payment} alt="Payment" /><span>Payment</span></NavLink></li>
    <li><NavLink to="/settings"><img src={Setting} alt="Settings" /><span>Settings</span></NavLink></li>
  </ul>
</nav>
      
    </>
  )
}

export default Dashboard
