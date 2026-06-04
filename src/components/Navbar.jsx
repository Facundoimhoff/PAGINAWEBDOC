import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Anabel Sánchez
      </div>

      <ul className="nav-links">

        <li>
          <a href="#inicio">Inicio</a>
        </li>

        <li>
          <a href="#sobre-mi">Sobre mí</a>
        </li>

        <li>
          <a href="#ortodoncia">Ortodoncia</a>
        </li>

        <li>
          <a href="#laser">Láser</a>
        </li>

        <li>
          <a href="#casos">Casos</a>
        </li>

        <li>
          <a href="#cursos">Cursos</a>
        </li>

        <li>
          <a href="#instagram">Instagram</a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;