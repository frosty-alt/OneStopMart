import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

import {
  MdOutlineDashboard,
  MdOutlineShoppingBag,
  MdOutlineLocationOn,
  MdOutlineCreditCard,
  MdOutlineSettings,
} from "react-icons/md";

const SideBar = () => {
  return (
    <>
      <nav className="sidebar">
        <h2 className="sidebar-title">DASHBOARD</h2>

        <ul className="icons">
          <li>
            <NavLink to="/overview">
              <MdOutlineDashboard />
              <span>Overview</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/orders">
              <MdOutlineShoppingBag />
              <span>Orders</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/address">
              <MdOutlineLocationOn />
              <span>Address</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/payment">
              <MdOutlineCreditCard />
              <span>Payment</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/settings">
              <MdOutlineSettings />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SideBar;
