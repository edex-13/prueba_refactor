// components/Overview/ResumenTabs.jsx
//
import React from "react";

const ResumenTabs = ({ activeTab, setActiveTab, resumen }) => (
  <>
  <h2>Resumen del proyecto:</h2>
  <div className="tabs">
    <div className={`tab ${activeTab === "fuentes" ? "active" : ""}`} onClick={() => setActiveTab("fuentes")}>
      Fuentes de Datos ({resumen?.fuentes?.length || 0})
    </div>
    <div className={`tab ${activeTab === "paneles" ? "active" : ""}`} onClick={() => setActiveTab("paneles")}>
      Dashboards ({resumen?.paneles?.length || 0})
    </div>
    <div className={`tab ${activeTab === "tableros" ? "active" : ""}`} onClick={() => setActiveTab("tableros")}>
      Reportes ({resumen?.tableros?.length || 0})
    </div>
  </div>
  </>
);

export default ResumenTabs;
