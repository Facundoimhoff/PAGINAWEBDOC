import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-image">
          <img
            src="/doctora2.png"
            alt="Dra. Anabel Sánchez"
          />
        </div>

        <div className="about-content">

          <span className="section-tag">
            Sobre mí
          </span>

          <h2>
            Conocé a la Dra. Anabel Sánchez Chazarreta
          </h2>

          <p>
            Soy odontóloga especializada en ortodoncia y
            comprometida con brindar tratamientos
            personalizados para cada paciente.
          </p>

          <p>
            Mi objetivo es ayudarte a lograr una sonrisa
            funcional, armónica y saludable utilizando
            tecnología moderna y técnicas actualizadas.
          </p>

          <p>
            Cada tratamiento comienza con una evaluación
            detallada para encontrar la mejor solución
            para tu caso.
          </p>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;