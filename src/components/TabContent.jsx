// components/Overview/TabContent.jsx
import React from "react";


const TabContent = ({ items, label, search, setSearch, sortBy, setSortBy, toggleImportant, important  , selectedProject}) => {
  const filtered = items.filter((item) =>
    item.nombre?.toLowerCase().includes(search.toLowerCase()) ||
    item.autor?.toLowerCase().includes(search.toLowerCase()) ||
    item.descripcion?.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case "fecha":
        return new Date(b.fecha_creacion) - new Date(a.fecha_creacion);
      case "autor":
        return a.autor.localeCompare(b.autor);
      default:
        return a.nombre.localeCompare(b.nombre);
    }
  });

  if (!selectedProject ) {
    return (
      <div className="no-data-container">
        <div className="no-data-icon">📊</div>
        <p className="no-data">Seleccione un proyecto para ver los detalles</p>
      </div>
    );
  }
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
                    className={`favorite-btn ${important.has(item.nombre) ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleImportant(item.nombre);
                    }}  
                  >
                  {important.has(item.nombre) ? '❗' : '❕'}
                  </button>
                </div>
                <p className="item-description">{item.descripcion}</p>
                <div className="item-meta">
                  <span className="item-author">👤 {item.autor}</span>
                  <span className="item-date">📅 {(item.fecha_creacion)}</span>
                  {item.fecha_ultima_modificacion && item.fecha_ultima_modificacion !== "No registra" && (
                    <span className="item-modified">🔄 Modificado: {(item.fecha_ultima_modificacion)}</span>
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

export default TabContent;
