function FormSection() {
  return (
    <section className="form-section">

      <div className="form-container">

        <span className="section-tag">
          Formulario
        </span>

        <h2>
          ¿Querés más información?
        </h2>

        <p>
          Completá el formulario y nos pondremos en contacto.
        </p>

        <a
          href="LINK_GOOGLE_FORM"
          target="_blank"
          rel="noreferrer"
          className="form-btn"
        >
          Completar Formulario
        </a>

      </div>

    </section>
  );
}

export default FormSection;