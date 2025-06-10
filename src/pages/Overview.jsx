import React, { useState } from "react";

// Mock data for demonstration
const mockData = {
  proyectos: [
    {
      id: "1",
      nombre: "ACCESO A INTERNET RURAL",
      descripcion: "Datos sobre conectividad en zonas rurales del país.",
      fecha_creacion: "30 de marzo de 2023",
      autor: "MinTIC",
      resumen: {
        fuentes: [
          { nombre: "Base de datos conectividad", codigo: "BD001", actualizacion: "15/06/2025", estado: "Activo" },
          { nombre: "Registro de torres", codigo: "RT002", actualizacion: "10/06/2025", estado: "Activo" }
        ],
        paneles: [
          { nombre: "Dashboard conectividad", codigo: "DC001", actualizacion: "12/06/2025", estado: "Activo" }
        ],
        tableros: [
          { nombre: "Reporte mensual", codigo: "RM001", actualizacion: "01/06/2025", estado: "Activo" }
        ]
      }
    },
    {
      id: "2",
      nombre: "INFRAESTRUCTURA VIAL",
      descripcion: "Monitoreo del estado de carreteras y vías principales.",
      fecha_creacion: "15 de abril de 2023",
      autor: "INVIAS",
      resumen: {
        fuentes: [
          { nombre: "Estado de vías", codigo: "EV001", actualizacion: "08/06/2025", estado: "Activo" }
        ],
        paneles: [
          { nombre: "Panel vial", codigo: "PV001", actualizacion: "05/06/2025", estado: "Activo" }
        ],
        tableros: [
          { nombre: "Informe vial", codigo: "IV001", actualizacion: "01/06/2025", estado: "Activo" }
        ]
      }
    }
  ]
};

const Overview = () => {
  const { proyectos } = mockData;
  const [selectedProject, setSelectedProject] = useState(proyectos[0]);
  const [activeTab, setActiveTab] = useState("fuentes");
  const [search, setSearch] = useState("");
  const [projectFilter, setProjectFilter] = useState("");

  const filteredProyectos = proyectos.filter((p) =>
    p.nombre.toLowerCase().includes(projectFilter.toLowerCase())
  );

  const filterBySearch = (items) => {
    return items.filter((item) =>
      item.nombre?.toLowerCase().includes(search.toLowerCase())
    );
  };

  const renderTabContent = (items, label) => {
    const filtered = filterBySearch(items);
    return (
      <>
        <div className="search-bar">
          <input
            type="text"
            placeholder={`Buscar ${label}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {filtered.length === 0 ? (
          <div className="no-data-container">
            <div className="no-data-icon">🔍</div>
            <p className="no-data">No se encontraron resultados</p>
            <p className="no-data-subtitle">Intenta con otros términos de búsqueda</p>
          </div>
        ) : (
          filtered.map((item, i) => (
            <div key={i} className="fuente selectable" onClick={() => alert(JSON.stringify(item, null, 2))}>
              <div className="fuente-content">
                <p><strong>{item.nombre}</strong></p>
                {item.codigo && <p className="item-code">#{item.codigo}</p>}
                {item.actualizacion && (
                  <p className="item-update">
                    <span className="update-icon">🕐</span>
                    Actualización: {item.actualizacion}
                  </p>
                )}
              </div>
              {item.estado && <span className="estado">{item.estado}</span>}
            </div>
          ))
        )}
      </>
    );
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f8f9fb;
          color: #333;
          line-height: 1.6;
        }

        .layout {
          display: flex;
          min-height: 100vh;
        }

        .sidebar {
          width: 220px;
          background: #0e2a47;
          color: white;
          padding: 2rem 1rem;
          box-shadow: 2px 0 10px rgba(0,0,0,0.1);
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 2rem;
          text-align: center;
        }

        .sidebar nav ul {
          list-style: none;
          padding: 0;
        }

        .sidebar nav li {
          padding: 0.75rem 1rem;
          margin-bottom: 0.5rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .sidebar nav li:hover {
          background: #1a4a73;
          transform: translateX(2px);
        }

        .sidebar nav li.active {
          background: #155a8a;
          box-shadow: 0 2px 8px rgba(21, 90, 138, 0.3);
        }

        .overview-container {
          flex: 1;
          padding: 2rem;
          background: #f8f9fb;
          font-family: 'Segoe UI', sans-serif;
          color: #333;
        }

        .header {
          margin-bottom: 2rem;
        }

        .header h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: #2c3e50;
        }

        .header p {
          color: #6c757d;
          font-size: 1.1rem;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          border: 1px solid #e9ecef;
          transition: all 0.3s ease;
        }

        .card:hover {
          box-shadow: 0 6px 20px rgba(0,0,0,0.12);
          transform: translateY(-2px);
        }

        .project-selector label {
          font-weight: 600;
          display: block;
          margin-bottom: 0.75rem;
          color: #495057;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .project-selector input,
        .project-selector select {
          padding: 0.75rem 1rem;
          font-size: 1rem;
          margin-bottom: 1.5rem;
          width: 100%;
          border-radius: 8px;
          border: 2px solid #dee2e6;
          background: #fff;
          transition: all 0.3s ease;
        }

        .project-selector input:focus,
        .project-selector select:focus {
          outline: none;
          border-color: #114488;
          box-shadow: 0 0 0 3px rgba(17, 68, 136, 0.1);
        }

        .project-summary {
          margin-top: 1.5rem;
          padding: 1.5rem;
          border-radius: 10px;
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          border: 1px solid #dee2e6;
        }

        .project-summary h3 {
          margin-top: 0;
          font-size: 1.4rem;
          color: #2c3e50;
          margin-bottom: 0.75rem;
        }

        .project-summary p {
          color: #6c757d;
          margin-bottom: 1rem;
        }

        .project-meta {
          display: flex;
          gap: 2rem;
          margin: 1rem 0;
          font-size: 0.95rem;
          color: #555;
          flex-wrap: wrap;
        }

        .project-meta span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .stats {
          display: flex;
          justify-content: space-around;
          margin-top: 1.5rem;
          text-align: center;
          gap: 1rem;
        }

        .stat {
          flex: 1;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 10px;
          border: 1px solid #e9ecef;
          transition: all 0.3s ease;
        }

        .stat:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .stat strong {
          display: block;
          font-size: 1.8rem;
          color: #114488;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .stat span {
          font-size: 0.85rem;
          color: #666;
          font-weight: 500;
        }

        .resumen h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: #2c3e50;
        }

        .resumen > p {
          color: #6c757d;
          margin-bottom: 1.5rem;
        }

        .tabs {
          display: flex;
          gap: 0.5rem;
          margin: 1.5rem 0;
          background: #f8f9fa;
          padding: 0.5rem;
          border-radius: 10px;
          flex-wrap: wrap;
        }

        .tab {
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          background: transparent;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
          color: #6c757d;
          white-space: nowrap;
        }

        .tab:hover {
          background: rgba(17, 68, 136, 0.1);
          color: #114488;
        }

        .tab.active {
          background: #114488;
          color: white;
          box-shadow: 0 2px 8px rgba(17, 68, 136, 0.3);
        }

        .search-bar {
          margin: 1.5rem 0;
        }

        .search-bar input {
          padding: 0.75rem 1rem;
          width: 100%;
          font-size: 1rem;
          border-radius: 8px;
          border: 2px solid #dee2e6;
          background: #fff;
          transition: all 0.3s ease;
        }

        .search-bar input:focus {
          outline: none;
          border-color: #114488;
          box-shadow: 0 0 0 3px rgba(17, 68, 136, 0.1);
        }

        .fuente {
          padding: 1.25rem;
          border: 2px solid #e9ecef;
          border-radius: 10px;
          margin-bottom: 1rem;
          background: #fff;
          transition: all 0.3s ease;
          position: relative;
        }

        .fuente.selectable:hover {
          cursor: pointer;
          background-color: #f8f9ff;
          transform: translateY(-2px);
          border-color: #114488;
          box-shadow: 0 4px 16px rgba(17, 68, 136, 0.15);
        }

        .fuente-content {
          padding-right: 4rem;
        }

        .fuente-content p {
          margin-bottom: 0.5rem;
        }

        .item-code {
          font-family: 'Courier New', monospace;
          color: #6f42c1;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .item-update {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #6c757d;
          font-size: 0.9rem;
        }

        .update-icon {
          font-size: 0.8rem;
        }

        .estado {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #d4f4dd;
          color: #2c7a34;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .no-data-container {
          text-align: center;
          padding: 3rem 2rem;
          color: #6c757d;
        }

        .no-data-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          opacity: 0.6;
        }

        .no-data {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #495057;
        }

        .no-data-subtitle {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .layout {
            flex-direction: column;
          }

          .sidebar {
            width: 100%;
            padding: 1rem;
          }

          .sidebar nav ul {
            display: flex;
            gap: 0.5rem;
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }

          .sidebar nav li {
            white-space: nowrap;
            min-width: fit-content;
          }

          .overview-container {
            padding: 1rem;
          }

          .header h2 {
            font-size: 1.5rem;
          }

          .project-meta {
            flex-direction: column;
            gap: 0.5rem;
          }

          .stats {
            flex-direction: column;
            gap: 1rem;
          }

          .tabs {
            flex-wrap: wrap;
            gap: 0.25rem;
          }

          .tab {
            flex: 1;
            text-align: center;
            min-width: 120px;
          }

          .fuente-content {
            padding-right: 2rem;
          }

          .estado {
            position: static;
            display: inline-block;
            margin-top: 0.5rem;
          }
        }
      `}</style>

      <div className="layout">
        <aside className="sidebar">
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
                      <span>📅 Creado: {selectedProject?.fecha_creacion}</span>
                      <span>👤 Autor: {selectedProject?.autor}</span>
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
                Fuentes de Datos
              </div>
              <div className={`tab ${activeTab === "creadas" ? "active" : ""}`} onClick={() => setActiveTab("creadas")}>
                Fuentes Creadas
              </div>
              <div className={`tab ${activeTab === "tableros" ? "active" : ""}`} onClick={() => setActiveTab("tableros")}>
                Tableros
              </div>
              <div className={`tab ${activeTab === "analisis" ? "active" : ""}`} onClick={() => setActiveTab("analisis")}>
                Análisis
              </div>
            </div>

            <div className="resumen-body">
              {activeTab === "fuentes" && renderTabContent(selectedProject?.resumen?.fuentes || [], "fuente")}
              {activeTab === "creadas" && renderTabContent(selectedProject?.resumen?.fuentes || [], "fuente creada")}
              {activeTab === "tableros" && renderTabContent(selectedProject?.resumen?.tableros || [], "tablero")}
              {activeTab === "analisis" && renderTabContent(selectedProject?.resumen?.paneles || [], "análisis")}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Overview;