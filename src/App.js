import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <header>
        <h1>Yujin Lu</h1>
        <nav id="">
          <Link class="link" to="/">
            Home
          </Link>
          <Link class="link" to="/resume">
            Lebenslauf
          </Link>
          <Link class="link" to="/projects">
            Projekte
          </Link>
          <Link class="link" to="/contact">
            Kontakt
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} exact />
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
