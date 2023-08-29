import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import Filter from "../components/Filter";
import "../components/style/Projects.css";

const filterConditions = ["All", "Javascript", "Typescript", "PHP"];

const projectsData = [
  {
    name: "Lecker Map",
    description:
      "Lecker Map ist mein Capstone-Project von intensivem Kurs für Web-develop. Es ist eine full-sack-App and biete die functions:Restaurants Anschauen, Reservieren, Kommentieren und in Map schauen. Außerdem kann man noch die Kommentars und Reserves sich verändern und entfern.",
    photo: "/images/lecker-map.jpg",
    techStack:
      "Next.js, React, Javascript, MangoDB, Mangoose, testing-library/react",
    keyWord: "Javascript",
    code: "https://github.com/LuYujin9/capstone-project",
    preview: "https://capstone-project-luyujin9.vercel.app/",
  },
  {
    name: "Feedback Page",
    description: "Das ist eine einfache Webseite, um PHP zu lernen und üben.",
    photo: "/images/lecker-map.jpg",
    techStack: "PHP",
    keyWord: "PHP",
    code: "https://github.com/LuYujin9/PHP_Project_Feedback_Page",
    preview: "",
  },
  {
    name: "Portfolio",
    description:
      "Die Portfolio Webseite ist von mir. Sie können dadurch mich mehr kennenlernen",
    photo: "/images/lecker-map.jpg",
    techStack: "Javascript, React, styled-components",
    keyWord: "Javascript",
    code: "https://github.com/LuYujin9/Portfolio",
    preview: "https://potfolio-gray.vercel.app/",
  },
  {
    name: "",
    description:
      "Das ist die Portfolio von mir. Sie können dadurch mich mehr kennenlernen",
    photo: "/images/lecker-map.jpg",
    techStack: "",
    keyWord: "",
    code: "",
    preview: "",
  },
];

function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const [fitlerActive, setFitlerActive] = useState("All");

  function handleProjectsList(condition) {
    setFitlerActive(condition);
    if (condition === "All") {
      setProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter((project) => {
        return project.keyWord === condition ? true : false;
      });
      setProjects(filteredProjects);
    }
  }
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main>
      <div className={`${isVisible ? "slide-up" : "slide-up-active"}`}>
        <h3>PROJEKTE</h3>
        <p className="projects-description">
          Lecker Map is a full stack App for restaurant browsing and reserving.
          It's my capstone project from the neue fische boot camp.
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
