import "./Projects.css";

function Projects() {
  return (
    <main>
      <article>
        <h3>PROJEKTS</h3>
        <p className="project-description">
          Lecker Map is a full stack App for restaurant browsing and reserving.
          It's my capstone project from the neue fische boot camp.
        </p>
      </article>
      <div classNam="filter">
        <button>All</button>
        <button>Javascript</button>
        <button>React</button>
        <button>Typescript</button>
        <button>PHP</button>
      </div>
      <ul className="projects-container">
        <li className="project-card">
          <h4>Lecker Map</h4>
          <p className="project-description">
            Lecker Map ist mein Capstone-Project von intensivem Kurs für
            Web-develop. Es ist eine full-sack-App and biete die functions:
            Restaurants Anschauen, Reservieren, Kommentieren und in Map schauen.
            Außerdem kann man noch die Kommentars und Reserves sich verändern
            und entfern.
          </p>
          <img
            src="/images/lecker-map.jpg"
            alt="foto of project"
            className="project-foto"
          />
          <p className="project-description">
            <strong>Tech Stack: </strong>Next.js, React, Javascript, MangoDB,
            Mangoose, testing-library/react
          </p>
          <div className="project-link-container">
            <a
              href="https://github.com/LuYujin9/capstone-project"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
            <a
              href="https://capstone-project-luyujin9.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Vorschau
            </a>
          </div>
        </li>
        <li className="project-card">
          <h4>Lecker Map</h4>
          <p className="project-description">
            Lecker Map ist mein Capstone-Project von intensivem Kurs für
            Web-develop. Es ist eine full-sack-App and biete die functions:
            Restaurants Anschauen, Reservieren, Kommentieren und in Map schauen.
            Außerdem kann man noch die Kommentars und Reserves sich verändern
            und entfern.
          </p>
          <img
            src="/images/lecker-map.jpg"
            alt="foto of project"
            className="project-foto"
          />
          <p className="project-description">
            <strong>Tech Stack: </strong>Next.js, React, Javascript, MangoDB,
            Mangoose, testing-library/react
          </p>
          <div className="project-link-container">
            <a
              href="https://github.com/LuYujin9/capstone-project"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
            <a
              href="https://capstone-project-luyujin9.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Vorschau
            </a>
          </div>
        </li>
        <li className="project-card">
          <h4>Lecker Map</h4>
          <p className="project-description">
            Lecker Map ist mein Capstone-Project von intensivem Kurs für
            Web-develop. Es ist eine full-sack-App and biete die functions:
            Restaurants Anschauen, Reservieren, Kommentieren und in Map schauen.
            Außerdem kann man noch die Kommentars und Reserves sich verändern
            und entfern.
          </p>
          <img
            src="/images/lecker-map.jpg"
            alt="foto of project"
            className="project-foto"
          />
          <p className="project-description">
            <strong>Tech Stack: </strong>Next.js, React, Javascript, MangoDB,
            Mangoose, testing-library/react
          </p>
          <div className="project-link-container">
            <a
              href="https://github.com/LuYujin9/capstone-project"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
            <a
              href="https://capstone-project-luyujin9.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Vorschau
            </a>
          </div>
        </li>
      </ul>
    </main>
  );
}

export default Projects;
