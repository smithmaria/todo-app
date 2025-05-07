import React from "react";
import { Outlet } from "react-router-dom";
import './layout.css';
import logo from "../imgs/crossed-logo.png";

const MainLayout: React.FC = () => {
  return (
    <div className="body">
      <div className="navbar">
        <img className="logo" src={logo} alt="crossed logo" />
        <ul>
          <li><a href="/">All Tasks</a></li>
          <li><a >Calendar</a></li>
        </ul>
      </div>

      <main style={{ flex: 1, padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;