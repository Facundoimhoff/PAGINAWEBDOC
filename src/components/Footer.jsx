import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <h3>
        Dra. Anabel Sánchez Chazarreta
      </h3>

      <p>
        MP 8636 · Ortodoncia
      </p>

      <div className="footer-links">

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>

        <a
          href="https://wa.me/5493564616171"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>

      </div>

      <p className="copyright">
        © 2026 Todos los derechos reservados.
      </p>

    </footer>
  );
}

export default Footer;