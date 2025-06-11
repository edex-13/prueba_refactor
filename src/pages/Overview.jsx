// components/Overview/Overview.jsx
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Layout/Header";
import ProjectSelector from "../components/ProjectSelector";
import ResumenTabs from "../components/ResumenTabs";
import TabContent from "../components/TabContent";
import ImportantSection from "../components/ImportantSection"; // Assuming you have an ImportantSection component
import mockData from "../data/mockData";
import React from "react";

// import "./Overview.css"; // Assuming you have a CSS file for styling

const Overview = () => {

  const [proyectos] = useState(mockData.proyectos)
  console.log("Proyectos actuales:", proyectos);

  const [selectedProject, setSelectedProject] = useState(null);
  const [projectFilter, setProjectFilter] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("nombre");
  const [activeTab, setActiveTab] = useState("fuentes");
  const [important, setimportant] = useState(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleImportant = (name) => {
    const newImportant = new Set(important);
    if (newImportant.has(name)) {
      newImportant.delete(name);
    } else {
      newImportant.add(name);
    }
    setimportant(newImportant);
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
              toggleImportant={toggleImportant}
              important={important}
              selectedProject={selectedProject}
            />
          </section>
        </div>
            <ImportantSection important={important} toggleImportant={toggleImportant} />

      </section>
    </Layout>
  );
};

export default Overview;
