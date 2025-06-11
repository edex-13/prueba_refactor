// components/Overview/Overview.jsx
import { useState } from "react";
import Layout from "../Layout/Layout";
import Header from "../Layout/Header";
import ProjectSelector from "./ProjectSelector";
import ResumenTabs from "./ResumenTabs";
import TabContent from "./TabContent";
import FavoritesSection from "./FavoritesSection";
import mockData from "../../data/mockData";
import React from "react";

import "./Overview.css"; // Assuming you have a CSS file for styling

const Overview = () => {

  const [proyectos] = useState(mockData.proyectos)
  console.log("Proyectos actuales:", proyectos);

  const [selectedProject, setSelectedProject] = useState(null);
  const [projectFilter, setProjectFilter] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("nombre");
  const [activeTab, setActiveTab] = useState("fuentes");
  const [favorites, setFavorites] = useState(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleFavorite = (name) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(name)) {
      newFavorites.delete(name);
    } else {
      newFavorites.add(name);
    }
    setFavorites(newFavorites);
  };

  const resumen = selectedProject?.resumen || {};
  const tabData = resumen[activeTab] || [];

  return (
    <Layout isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}>
      <Header />

      <section className="dashboard">
        <div className="dashboard-grid">

          <div className="left-column">
            <ProjectSelector
              proyectos={proyectos}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
              projectFilter={projectFilter}
              setProjectFilter={setProjectFilter}
              setActiveTab={setActiveTab}
              setSearch={setSearch}
            />
          </div>
        <section className="resumen card">

            <ResumenTabs
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              resumen={resumen}
            />
            <TabContent
              items={tabData}
              label={activeTab}
              search={search}
              setSearch={setSearch}
              sortBy={sortBy}
              setSortBy={setSortBy}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
          </section>
        </div>
            <FavoritesSection favorites={favorites} toggleFavorite={toggleFavorite} />

      </section>
    </Layout>
  );
};

export default Overview;
