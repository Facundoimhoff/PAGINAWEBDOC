function CoursesSection() {
  return (
    <section className="courses">

      <div className="section-header">
        <span className="section-tag">Cursos</span>

        <h2>
          Formación para profesionales
        </h2>

        <p>
          Capacitaciones diseñadas para odontólogos que buscan actualizarse.
        </p>
      </div>

      <div className="courses-grid">

        <div className="course-card">
          <h3>Ortodoncia Clínica</h3>

          <p>
            Aplicación práctica y resolución de casos reales.
          </p>

          <a href="#">
            Ver Curso
          </a>
        </div>

        <div className="course-card">
          <h3>Laserterapia</h3>

          <p>
            Uso clínico del láser en odontología moderna.
          </p>

          <a href="#">
            Ver Curso
          </a>
        </div>

        <div className="course-card">
          <h3>Capacitaciones Especiales</h3>

          <p>
            Formación continua para profesionales.
          </p>

          <a href="#">
            Ver Curso
          </a>
        </div>

      </div>

    </section>
  );
}

export default CoursesSection;