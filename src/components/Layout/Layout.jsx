// components/Layout/Layout.jsx
import Sidebar from "./Sidebar";
import Header from "./Header";
import React from "react";


const Layout = ({ children, isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className="layout">
      <button className="hamburger" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      <Sidebar isOpen={isSidebarOpen} />
      <main className="overview-container">{children}</main>
    </div>
  );
};

export default Layout;
