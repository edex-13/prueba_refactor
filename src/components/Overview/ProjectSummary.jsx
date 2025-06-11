// components/Overview/ProjectSummary.jsx
import React from "react";

import { formatDate } from "../../utils/formatDate";

const ProjectSummary = ({ selectedProject }) => {
  if (!selectedProject ) {
    return (
      <div className="no-data-container">
        <div className="no-data-icon">📊</div>
        <p className="no-data">Seleccione un proyecto para ver los detalles</p>
      </div>
    );
  }

  return (
    <div className="project-summary">
      <h3>{selectedProject?.nombre}</h3>
      <p>{selectedProject?.descripcion}</p>
      <div className="project-meta">
        <span>📅 Creado: {formatDate(selectedProject?.fecha_creacion)}</span>
        <span>👤 Autor: {selectedProject?.autor}</span>
        <span>👥 Grupo: {selectedProject?.grupo_proyecto}</span>
        {selectedProject?.fecha_ultima_modificacion && selectedProject?.fecha_ultima_modificacion !== "No registra" && (
          <span>🔄 Modificado: {formatDate(selectedProject?.fecha_ultima_modificacion)}</span>
        )}
      </div>

      <div className="project-details">
        <h4>Detalles del Proyecto</h4>
        <p><strong>ID:</strong> {selectedProject?.id}</p>
        <p><strong>Fuentes de datos disponibles:</strong> {selectedProject?.fuentes_datos_disponibles}</p>
      </div>

      <div className="stats">
        <div className="stat">
          <strong>{selectedProject?.resumen?.fuentes?.length || 0}</strong>
          <span>Fuentes de Datos</span>
        </div>
        <div className="stat">
          <strong>{selectedProject?.resumen?.paneles?.length || 0}</strong>
          <span>Dashboards</span>
        </div>
        <div className="stat">
          <strong>{selectedProject?.resumen?.tableros?.length || 0}</strong>
          <span>Reportes</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
