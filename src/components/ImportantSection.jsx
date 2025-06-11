// components/Overview/FavoritesSection.jsx
import React from "react";
const ImportantSection = ({ important, toggleImportant }) => {
  return (
    <section className="favorites-section card">
      <h3>❗❗❗ Elementos Importantes ({important.size})</h3>
      <p>Tus elementos marcados como importantes</p>
      <div className="favorites-list">
        {Array.from(important).map((imporName, index) => (
          <div key={index} className="favorite-item">
            <span>{imporName}</span>
            <button
              className="remove-favorite"
              onClick={() => toggleImportant(imporName)}
              title="Quitar de importantes"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImportantSection;
