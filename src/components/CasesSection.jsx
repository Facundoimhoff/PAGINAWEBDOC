function CasesSection() {
  return (
    <section className="cases">

      <div className="section-header">
        <span className="section-tag">Casos Reales</span>

        <h2>
          Resultados que hablan por sí solos
        </h2>

        <p>
          Algunos ejemplos de tratamientos realizados por la Dra. Anabel Sánchez.
        </p>
      </div>

      <div className="cases-grid">

        <div className="case-card">
          <img src="/caso1.jpg" alt="Caso clínico 1" />
          <h3>Alineación dental</h3>
        </div>

        <div className="case-card">
          <img src="/caso2.jpg" alt="Caso clínico 2" />
          <h3>Corrección de mordida</h3>
        </div>

        <div className="case-card">
          <img src="/caso3.jpg" alt="Caso clínico 3" />
          <h3>Ortodoncia invisible</h3>
        </div>

      </div>

    </section>
  );
}

export default CasesSection;