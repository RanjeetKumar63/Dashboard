import React from "react";
import { TbLayoutDashboard } from "react-icons/tb";
import { IoScan } from "react-icons/io5";
import { GiInvertedDice4 } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <h2>🛡️ Seczap</h2>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="Dashboard">
            <TbLayoutDashboard className="icon" />
            Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="Scan">
            <IoScan className="icon" />
            Scan
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="OSINT Analysis">
            <GiInvertedDice4 className="icon" />
            OSINT Analysis
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="Settings">
            <CiSettings className="icon" />
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
