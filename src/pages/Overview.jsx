import React, { useState, useEffect } from "react";

import "./Overview.css"; // Asegúrate de tener el CSS adecuado
import mockData from "../data/mockData.js"; // Asegúrate de que la ruta sea correcta

const Overview = () => {
  const { proyectos } = mockData;
  const [selectedProject, setSelectedProject] = useState(proyectos[0]);
  const [activeTab, setActiveTab] = useState("fuentes");
  const [search, setSearch] = useState("");
  const [projectFilter, setProjectFilter] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [sortBy, setSortBy] = useState("nombre");

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Funciones de filtrado y ordenamiento
  const filteredProyectos = proyectos.filter((p) =>
    p.nombre.toLowerCase().includes(projectFilter.toLowerCase())
  );

  const filterBySearch = (items) => {
    return items.filter((item) =>
      item.nombre?.toLowerCase().includes(search.toLowerCase()) ||
      item.autor?.toLowerCase().includes(search.toLowerCase()) ||
      item.descripcion?.toLowerCase().includes(search.toLowerCase())
    );
  };

  const sortItems = (items) => {
    return [...items].sort((a, b) => {
      switch (sortBy) {
        case "fecha":
          return new Date(b.fecha_creacion) - new Date(a.fecha_creacion);
        case "autor":
          return a.autor.localeCompare(b.autor);
        default:
          return a.nombre.localeCompare(b.nombre);
      }
    });
  };

  const toggleFavorite = (itemName) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(itemName)) {
      newFavorites.delete(itemName);
    } else {
      newFavorites.add(itemName);
    }
    setFavorites(newFavorites);
  };

  const formatDate = (dateString) => {
    if (dateString === "No registra") return dateString;
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const renderTabContent = (items, label) => {
    const filtered = filterBySearch(items);
    const sorted = sortItems(filtered);

    return (
      <>
        <div className="controls-row">
          <div className="search-bar">
            <input
              type="text"
              placeholder={`Buscar ${label}...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="sort-selector">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="nombre">Ordenar por Nombre</option>
              <option value="fecha">Ordenar por Fecha</option>
              <option value="autor">Ordenar por Autor</option>
            </select>
          </div>
        </div>

        {sorted.length === 0 ? (
          <div className="no-data-container">
            <div className="no-data-icon">🔍</div>
            <p className="no-data">No se encontraron resultados</p>
            <p className="no-data-subtitle">Intenta con otros términos de búsqueda</p>
          </div>
        ) : (
          sorted.map((item, i) => (
            <div key={i} className="fuente selectable" onClick={() => alert(JSON.stringify(item, null, 2))}>
              <div className="fuente-header">
                <div className="fuente-content">
                  <div className="fuente-title">
                    <h4>{item.nombre}</h4>
                    <button
                      className={`favorite-btn ${favorites.has(item.nombre) ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(item.nombre);
                      }}
                    >
                      {favorites.has(item.nombre) ? '★' : '☆'}
                    </button>
                  </div>
                  <p className="item-description">{item.descripcion}</p>
                  <div className="item-meta">
                    <span className="item-author">👤 {item.autor}</span>
                    <span className="item-date">📅 {formatDate(item.fecha_creacion)}</span>
                    {item.fecha_ultima_modificacion && item.fecha_ultima_modificacion !== "No registra" && (
                      <span className="item-modified">🔄 Modificado: {formatDate(item.fecha_ultima_modificacion)}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </>
    );
  };

  return (

    <div className="layout">
      <button
        className="hamburger"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
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

      <main className="overview-container">
        <section className="header">
          <h2>Proyectos</h2>
          <p>Gestiona y monitorea tus proyectos de infraestructura</p>
        </section>

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
                  console.log("Proyecto seleccionado:", project);
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

              {selectedProject ? (
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
              ) : (
                <div className="no-data-container">
                  <div className="no-data-icon">📊</div>
                  <p className="no-data">Seleccione un proyecto para ver los detalles</p>
                </div>
              )}
            </>
          )}
        </section>

        <section className="resumen card">
          <h3>Resumen del Proyecto</h3>
          <p>Información detallada sobre fuentes de datos, tableros y métricas</p>

          <div className="tabs">
            <div className={`tab ${activeTab === "fuentes" ? "active" : ""}`} onClick={() => setActiveTab("fuentes")}>
              Fuentes de Datos ({selectedProject?.resumen?.fuentes?.length || 0})
            </div>
            <div className={`tab ${activeTab === "paneles" ? "active" : ""}`} onClick={() => setActiveTab("paneles")}>
              Dashboards ({selectedProject?.resumen?.paneles?.length || 0})
            </div>
            <div className={`tab ${activeTab === "tableros" ? "active" : ""}`} onClick={() => setActiveTab("tableros")}>
              Reportes ({selectedProject?.resumen?.tableros?.length || 0})
            </div>
          </div>

          <div className="resumen-body">
            {activeTab === "fuentes" && renderTabContent(selectedProject?.resumen?.fuentes || [], "fuente")}
            {activeTab === "paneles" && renderTabContent(selectedProject?.resumen?.paneles || [], "dashboard")}
            {activeTab === "tableros" && renderTabContent(selectedProject?.resumen?.tableros || [], "reporte")}
          </div>
        </section>

        {favorites.size > 0 && (
          <section className="favorites-section card">
            <h3>⭐ Elementos Favoritos ({favorites.size})</h3>
            <p>Tus elementos marcados como favoritos</p>
            <div className="favorites-list">
              {Array.from(favorites).map((favName, index) => (
                <div key={index} className="favorite-item">
                  <span>{favName}</span>
                  <button
                    className="remove-favorite"
                    onClick={() => toggleFavorite(favName)}
                    title="Quitar de favoritos"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>

  );
};

export default Overview;