import { Route, Routes, NavLink } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Homepage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import GithubIcon from "./github.svg";
import LinkedinIcon from "./linkedin.svg";

function App() {
  return (
    <>
      <header>
        <h1>Yujin</h1>
        <nav>
          <NavLink activeClassName="active-link" to="/">
            Home
          </NavLink>
          <NavLink activeClassName="active-link" to="/about">
            About
          </NavLink>
          <NavLink activeClassName="active-link" to="/resume">
            Lebenslauf
          </NavLink>
          <NavLink activeClassName="active-link" to="/projects">
            Projekte
          </NavLink>
          <NavLink activeClassName="active-link" to="/contact">
            Kontakt
          </NavLink>
        </nav>
        <div className="external-links">
          <a
            href="https://www.linkedin.com/in/yujin-lu-119556267/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GithubIcon} alt="github icon" className="icon" />
          </a>
          <a
            href="https://github.com/LuYujin9"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedinIcon} alt="linkedin icon" className="icon" />
          </a>
        </div>
      </header>
      <Routes>
        <Route path="/" Component={Home} exact />
        <Route path="/about" Component={About} />
        <Route path="/resume" Component={Resume} />
        <Route path="/projects" Component={Projects} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <footer>
        <p>© Copyright Yujin. All Rights Reserved </p>
        <p>Designed by Yujin</p>
      </footer>
    </>
  );
}

export default App;
