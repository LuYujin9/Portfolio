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
          <Link class="page-link" to="/">
            Home
          </Link>
          <Link class="page-link" to="/about">
            About
          </Link>
          <Link class="page-link" to="/resume">
            Lebenslauf
          </Link>
          <Link class="page-link" to="/projects">
            Projekte
          </Link>
          <Link class="page-link" to="/contact">
            Kontakt
          </Link>
        </nav>
        <div class="external-links">
          <a
            href="https://www.linkedin.com/in/yujin-lu-119556267/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GithubIcon} alt="github icon" class="icon" />
          </a>

          <a
            href="https://github.com/LuYujin9"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedinIcon} alt="linkedin icon" class="icon" />
          </a>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>
        <ul>
          <li>Bildrechte</li>
          <li>Hilfe/Kontakt</li>
          <li>Newsletter</li>
          <li>RSS</li>
        </ul>
      </footer>
    </>
  );
}

export default App;
