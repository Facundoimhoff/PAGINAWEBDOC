import "./CoursesSection.css";

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
          <h3>Cursos para odontólogos</h3>

          <p>
            Temas de ortodoncia, estética dental y terapias láser.
          </p>

          <a href="https://api.whatsapp.com/send?phone=543564616171&text=Hola%20%F0%9F%91%8B%20quiero%20info%20de%20cursos%20para%20odont%C3%B3logos">
            Ver Curso
          </a>
        </div>

        <div className="course-card">
          <h3>EL consultorio de tus sueños</h3>

          <p>
            Diseño, equipamiento y gestión para un consultorio moderno.
          </p>

          <a href="https://www.canva.com/design/DAFz5ryJR4A/oDLtXX4CCiL7ZY6w-hkI6Q/edit">
            Ver Curso
          </a>
        </div>

        <div className="course-card">
          <h3>Curso Blanqueamiento Dental</h3>

          <p>
            Técnicas avanzadas para resultados efectivos y seguros.
          </p>

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdDJuoYlUErsW1OSqHpnrRQsMrG4mz6esuxX4cg6T2B4Rd-ng/viewform">
            Ver Curso
          </a>
        </div>

      </div>

    </section>
  );
}

export default CoursesSection;