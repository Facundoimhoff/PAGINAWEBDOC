import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <span className="hero-tag">
          Ortodoncia · San Francisco, Córdoba
        </span>

        <h1>
          Ortodoncia moderna,
          <br />
          personalizada y sin dolor.
        </h1>

        <p>
          Encontrá el tratamiento ideal para vos con la
          Dra. Anabel Sánchez Chazarreta.
        </p>

        <div className="hero-buttons">
          <a
            href="https://wa.me/543564616171?text=Hola%20Anabel%2C%20quiero%20informaci%C3%B3n%20sobre%20un%20tratamiento%20de%20ortodoncia.%20Mi%20motivo%20de%20consulta%20es%3A%20"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            Solicitar Turno
          </a>

          <a href="#casos" className="secondary-btn">
            Ver Casos
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;