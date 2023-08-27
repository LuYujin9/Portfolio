import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import GithubIcon from "./github.svg";
import LinkedinIcon from "./linkedin.svg";

function App() {
  return (
    <>
      <header>
        <h1>Yujin</h1>
        <nav id="">
          <Link className="page-link" to="/">
            Home
          </Link>
          <Link className="page-link" to="/about">
            About
          </Link>
          <Link className="page-link" to="/resume">
            Lebenslauf
          </Link>
          <Link className="page-link" to="/projects">
            Projekte
          </Link>
          <Link className="page-link" to="/contact">
            Kontakt
          </Link>
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
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>
        <p>© Copyright Yujin. All Rights Reserved </p>
        <p>Designed by Yujin</p>
      </footer>
    </>
  );
}

export default App;
