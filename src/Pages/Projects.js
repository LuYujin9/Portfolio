import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      name: "Lecker Map",
      description:
        "Lecker Map ist mein Capstone-Project von intensivem Kurs für Web-develop. Es ist eine full-sack-App and biete die functions:Restaurants Anschauen, Reservieren, Kommentieren und in Map schauen. Außerdem kann man noch die Kommentars und Reserves sich verändern und entfern.",

      photo: "/images/lecker-map.jpg",
      techStack:
        "Next.js, React, Javascript, MangoDB, Mangoose, testing-library/react",
      code: "https://github.com/LuYujin9/capstone-project",
      preview: "https://capstone-project-luyujin9.vercel.app/",
    },
    {
      name: "Lecker Map",
      description:
        "Lecker Map ist mein Capstone-Project von intensivem Kurs für Web-develop. Es ist eine full-sack-App and biete die functions:Restaurants Anschauen, Reservieren, Kommentieren und in Map schauen. Außerdem kann man noch die Kommentars und Reserves sich verändern und entfern.",

      photo: "/images/lecker-map.jpg",
      techStack:
        "Next.js, React, Javascript, MangoDB, Mangoose, testing-library/react",
      code: "https://github.com/LuYujin9/capstone-project",
      preview: "https://capstone-project-luyujin9.vercel.app/",
    },
    {
      name: "",
      description: "",
      photo: "/images/lecker-map.jpg",
      techStack: "",
      code: "",
      preview: "",
    },
  ];

  return (
    <main>
      <article>
        <h3>PROJEKTE</h3>
        <p className="project-description">
          Lecker Map is a full stack App for restaurant browsing and reserving.
          It's my capstone project from the neue fische boot camp.
        </p>
      </article>
      <div className="filter">
        <button name="All" className="fitler-button">
          All
        </button>
        <button name="Javascript" className="fitler-button">
          Javascript
        </button>
        <button name="React" className="fitler-button">
          React
        </button>
        <button name="Typescript" className="fitler-button">
          Typescript
        </button>
        <button name="PHP" className="fitler-button">
          PHP
        </button>
      </div>
      <ul className="projects-container">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </ul>
    </main>
  );
}

export default Projects;
