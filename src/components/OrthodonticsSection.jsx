function OrthodonticsSection() {
  return (
    <section className="ortho">

      <div className="section-header">
        <span className="section-tag">Ortodoncia</span>

        <h2>
          Un tratamiento para cada sonrisa
        </h2>

        <p>
          Elegimos la opción que mejor se adapta a tu caso,
          estilo de vida y objetivos.
        </p>
      </div>

      <div className="ortho-grid">

        <div className="ortho-card">
          <h3>Brackets Metálicos</h3>
          <p>
            Máxima eficacia y excelente relación costo-beneficio.
          </p>
        </div>

        <div className="ortho-card">
          <h3>Brackets Estéticos</h3>
          <p>
            Discretos y elegantes, manteniendo la misma eficacia.
          </p>
        </div>

        <div className="ortho-card">
          <h3>Autoligado</h3>
          <p>
            Menor fricción y controles más cómodos.
          </p>
        </div>

        <div className="ortho-card featured">
          <span className="featured-badge">
            Más solicitado
          </span>

          <h3>Ortodoncia Invisible</h3>

          <p>
            Alineadores transparentes para corregir tu sonrisa
            sin brackets ni alambres visibles.
          </p>
        </div>

      </div>

    </section>
  );
}

export default OrthodonticsSection;