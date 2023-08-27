import ProjectCard from "../components/ProjectCard";
import Filter from "../components/Filter";
import styled from "styled-components";
import { useState } from "react";

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
    name: "",
    description: "Das ist eine einfache Webseite, um PHP zu lernen und üben.",
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

  return (
    <main>
      <article>
        <h3>PROJEKTE</h3>
        <p className="project-description">
          Lecker Map is a full stack App for restaurant browsing and reserving.
          It's my capstone project from the neue fische boot camp.
        </p>
      </article>
      <Filter
        filterConditions={filterConditions}
        onProjectsList={handleProjectsList}
        fitlerActive={fitlerActive}
      />
      <ProjectsContainer className="projects-container">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </ProjectsContainer>
    </main>
  );
}

export default Projects;

const ProjectsContainer = styled.ul`
  margin: auto;
  width: 95%;
  display: grid;
  @media screen and (min-width: 769px) {
    margin: auto;
    grid-gap: 2em;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1000px) {
    margin: auto;
    grid-gap: 2em;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
