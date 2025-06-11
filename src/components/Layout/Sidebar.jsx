// components/Layout/Sidebar.jsx
import React from "react";

const Sidebar = ({ isOpen }) => (
  <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
    <div className="logo">InfraDash</div>
    <nav>
      <ul>
        <li className="active">Proyectos</li>
        <li>Indicadores</li>
        <li>Alertas</li>
        <li>Usuarios</li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
