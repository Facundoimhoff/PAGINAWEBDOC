import { useState } from "react";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        Anabel Sánchez
      </div>

      <ul className="nav-links desktop">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#ortodoncia">Ortodoncia</a></li>
        <li><a href="#laser">Láser</a></li>
        <li><a href="#casos">Casos</a></li>
        <li><a href="#cursos">Cursos</a></li>
      </ul>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>

        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <a href="#inicio">Inicio</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#ortodoncia">Ortodoncia</a>
        <a href="#laser">Láser</a>
        <a href="#casos">Casos</a>
        <a href="#cursos">Cursos</a>
        <a href="#instagram">Instagram</a>

      </div>

    </nav>
  );
}

export default Navbar;