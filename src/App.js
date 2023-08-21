import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

function App() {
  return (
    <main>
      <header>
        <nav id="guide">
          <a href="#home">Home</a>
          <a href="#aboutme">About me</a>
          <a href="#skills">Skills</a>
          <a href="#resume">Resume</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <footer>
        <ul class="footerul">
          <li>Bildrechte</li>
          <li>Hilfe/Kontakt</li>
          <li>Newsletter</li>
          <li>RSS</li>
        </ul>
      </footer>
    </main>
  );
}

export default App;
