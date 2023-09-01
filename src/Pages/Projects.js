import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import Filter from "../components/Filter";
import "../components/style/Projects.css";

const filterConditions = ["All", "Javascript", "PHP", "MangoDB", "MySQL"];

const projectsData = [
  {
    name: "Lecker Map",
    description:
      "Die Lecker Map ist mein Capstone-Project aus dem intensivkurs für Web-development. Es ist eine full-sack-App mit folgenden Funktionen: Restaurants Suche nach eigenen Kriterien, Vorschau(Location,Menü etc.), Reservierung und Möglichkeit für Kommentare.",
    photo: "/images/lecker-map.png",
    techStack:
      "Next.js, React, Javascript, MangoDB, Mangoose,styled-components, testing-library/react",
    keyWord: ["Javascript", "MangoDB"],
    code: "https://github.com/LuYujin9/capstone-project",
    preview: "https://capstone-project-luyujin9.vercel.app/",
  },
  {
    name: "Portfolio",
    description:
      "Die Portfolio Webseite zeigt meine Informationen, um mich besser kennenlernen zu können.",
    photo: "/images/portfolio.png",
    techStack: "Javascript, React, styled-components",
    keyWord: ["Javascript", "React"],
    code: "https://github.com/LuYujin9/Portfolio",
    preview: "https://potfolio-gray.vercel.app/",
  },
  {
    name: "Feedback Page",
    description:
      "Das ist eine Webseite, um PHP und MySQL zu lernen und zu üben.",
    photo: "/images/Feedback.png",
    techStack: "PHP, MySQL, phpMyAdmin",
    keyWord: ["PHP", "MySQL"],
    code: "https://github.com/LuYujin9/PHP_Project_Feedback_Page",
    preview: "",
  },
];

function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const [fitlerActive, setFitlerActive] = useState("All");
  const [isStart, setIsStart] = useState(false);

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

  useEffect(() => {
    setIsStart(true);
  }, []);

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
