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
            href="https://wa.me/5493564616171"
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