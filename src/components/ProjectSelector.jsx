// components/Overview/ProjectSelector.jsx
import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectSelector = ({
  proyectos,
  selectedProject,
  setSelectedProject,
  projectFilter,
  setProjectFilter,
  setActiveTab,
  setSearch
}) => {
  const filteredProyectos = proyectos.filter((p) =>
    p.nombre.toLowerCase().includes(projectFilter.toLowerCase())
  );

  return (
    <section className="project-selector card">
      <label>Buscar Proyecto</label>
      <input
        type="text"
        placeholder="Filtrar proyectos por nombre..."
        value={projectFilter}
        onChange={(e) => {
          setProjectFilter(e.target.value);
          setSelectedProject(null);
        }}
      />

      <label>Seleccionar Proyecto</label>
      {filteredProyectos.length === 0 ? (
        <div className="no-data-container">
          <div className="no-data-icon">📂</div>
          <p className="no-data">No hay proyectos con esa búsqueda</p>
          <p className="no-data-subtitle">Intenta con otros términos</p>
        </div>
      ) : (
        <>
          <select
            value={selectedProject?.id || ""}
            onChange={(e) => {
              const project = proyectos.find((p) => p.id === e.target.value);
              setSelectedProject(project);
              setActiveTab("fuentes");
              setSearch("");
            }}
          >
            <option value="">Seleccione un proyecto</option>
            {filteredProyectos.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nombre}
              </option>
            ))}
          </select>
          <ProjectSummary selectedProject={selectedProject  } />

        </>
      )}

    </section>
  );
};

export default ProjectSelector;
