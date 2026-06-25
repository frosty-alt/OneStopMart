import React from 'react'
import { NavLink } from 'react-router-dom';
import {useState} from 'react'
import './SideBar.css'
import { faBox, faMapMarkerAlt, faCreditCard, faCog} from '@fortawesome/free-solid-svg-icons'
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = () => {
const [open, setOpen] = React.useState(false)
  return (
    <>
        <nav className="sidebar">
                  <h2 className="sidebar-title">DASHBOARD</h2>
         <ul>
        <li><NavLink to="/overview"><FontAwesomeIcon icon={faWindows} /><span>Overview</span></NavLink></li>
       <li><NavLink to="/orders"><FontAwesomeIcon icon={faBox} /><span>Orders</span></NavLink></li>
    <li><NavLink to="/address"><FontAwesomeIcon icon={faMapMarkerAlt} /><span>Address</span></NavLink></li>
    <li><NavLink to="/payment"><FontAwesomeIcon icon={faCreditCard} /><span>Payment</span></NavLink></li>
    <li><NavLink to="/settings"><FontAwesomeIcon icon={faCog} /><span>Settings</span></NavLink></li>
  </ul>

           </nav>
      </> );
      };
  
export default SideBar;
