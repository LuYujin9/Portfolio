import "./ProjectCard.css";
import { useEffect, useState } from "react";

function ProjectCard({ project }) {
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    setIsStart(true);
  }, []);

  //<li className="project-card enlarge-active">
  return (
    <li className={`project-card ${isStart ? "enlarge" : "enlarge-active"}`}>
      <h4>{project.name}</h4>
      <div className="project-link-container">
        <a href={project.code} target="_blank" rel="noreferrer">
          Code
        </a>
        <a href={project.preview} target="_blank" rel="noreferrer">
          Vorschau
        </a>
      </div>
      <p className="project-description">{project.description}</p>
      <img src={project.photo} alt="from project" className="project-photo" />
      <p className="project-description">
        <strong>Tech Stack: </strong>
        {project.techStack}
      </p>
    </li>
  );
}

export default ProjectCard;
