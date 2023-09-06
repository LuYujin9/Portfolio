import "../components/style/Projects.css";
import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import Filter from "../components/Filter";
import { filterConditions, projectsData } from "../data/data.js";

function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const [fitlerActive, setFitlerActive] = useState("All");
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    setIsStart(true);
  }, []);

  function handleProjectsList(condition) {
    setFitlerActive(condition);
    if (condition === "All") {
      setProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter((project) => {
        return project.keyWord.includes(condition);
      });
      setProjects(filteredProjects);
    }
  }

  return (
    <main>
      <div className={`${isStart ? "slide-up" : "slide-up-active"}`}>
        <h3>PROJEKTE</h3>
        <p className="projects-description">
          Sie können hier meine Projekte anschauen. Ich werden noch mehre
          Project machen und constent erneuen.
        </p>
        <Filter
          filterConditions={filterConditions}
          onProjectsList={handleProjectsList}
          fitlerActive={fitlerActive}
        />
        <ul className="projects-container">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Projects;
