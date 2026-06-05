import "./InstagramSection.css";

function InstagramSection() {
  return (
    <section className="instagram">

      <div className="section-header">
        <span className="section-tag">Instagram</span>

        <h2>
          Seguinos en redes
        </h2>

        <p>
          Casos clínicos, consejos y novedades.
        </p>
      </div>

      <div className="instagram-content">

        <div className="instagram-card">
          <h3>@anabel.sanchezchazarreta</h3>

          <p>
            Descubrí más contenido y resultados reales.
          </p>

          <a
            href="https://www.instagram.com/anabel.sanchezchazarreta/"
            target="_blank"
            rel="noreferrer"
            className="instagram-btn"
          >
            Ver Instagram
          </a>

        </div>

      </div>

    </section>
  );
}

export default InstagramSection;