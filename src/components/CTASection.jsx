import "./CTASection.css";

function CTASection() {
  return (
    <section className="cta">

      <div className="cta-content">

        <h2>
          Tu nueva sonrisa puede empezar hoy.
        </h2>

        <p>
          Solicitá una consulta y evaluemos juntos el mejor tratamiento para vos.
        </p>

        <a
          href="https://wa.me/5493564616171"
          target="_blank"
          rel="noreferrer"
          className="cta-btn"
        >
          Solicitar Turno
        </a>

      </div>

    </section>
  );
}

export default CTASection;