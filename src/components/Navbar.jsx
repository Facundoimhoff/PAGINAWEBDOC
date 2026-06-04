import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div>
        <h2>Anabel Sánchez</h2>
      </div>

      <ul>
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
      >
        Solicitar Turno
      </a>
    </nav>
  );
}

export default Navbar;