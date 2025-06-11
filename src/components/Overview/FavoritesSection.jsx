// components/Overview/FavoritesSection.jsx
import React from "react";
const FavoritesSection = ({ favorites, toggleFavorite }) => {
  return (
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
  );
};

export default FavoritesSection;
