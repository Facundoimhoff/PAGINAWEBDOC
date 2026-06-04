import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
        <li><a href="#instagram">Instagram</a></li>
      </ul>

      <a
        href="https://wa.me/5493564616171"
        target="_blank"
        rel="noreferrer"
        className="turno-btn desktop"
      >
        Solicitar Turno
      </a>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(true)}
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <button
          className="close-btn"
          onClick={closeMenu}
          aria-label="Cerrar menú"
        >
          ✕
        </button>

        <a href="#inicio" onClick={closeMenu}>Inicio</a>
        <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
        <a href="#ortodoncia" onClick={closeMenu}>Ortodoncia</a>
        <a href="#laser" onClick={closeMenu}>Láser</a>
        <a href="#casos" onClick={closeMenu}>Casos</a>
        <a href="#cursos" onClick={closeMenu}>Cursos</a>
        <a href="#instagram" onClick={closeMenu}>Instagram</a>

        <a
          href="https://wa.me/5493564616171"
          target="_blank"
          rel="noreferrer"
          className="turno-btn mobile-turno"
          onClick={closeMenu}
        >
          Solicitar Turno
        </a>
      </div>

      {menuOpen && <div className="overlay" onClick={closeMenu} />}
    </nav>
  );
}

export default Navbar;