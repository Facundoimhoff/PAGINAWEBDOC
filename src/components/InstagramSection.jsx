import "./InstagramSection.css";

function InstagramSection() {
  return (
    <section className="instagram" id="instagram">

      <div className="instagram-card">

        <img
          src="/logoinstagram.webp"
          alt="Instagram"
          className="instagram-logo"
        />

        <span className="section-tag">
          Instagram
        </span>

        <h2>Seguinos en redes</h2>

        <p>
          Casos clínicos, consejos, tratamientos y novedades.
        </p>

        <h3>@anabel.sanchezchazarreta</h3>

        <a
          href="https://www.instagram.com/anabel.sanchezchazarreta/"
          target="_blank"
          rel="noreferrer"
          className="instagram-btn"
        >
          Ver Instagram
        </a>

      </div>

    </section>
  );
}

export default InstagramSection;