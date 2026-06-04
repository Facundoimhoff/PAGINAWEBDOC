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
          href="https://wa.me/543564616171?text=Hola%20Anabel%2C%20quiero%20sacar%20turno%20para%20una%20consulta.%20Mi%20motivo%20es%3A%20"
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