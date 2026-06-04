import "./LaserSection.css";

function LaserSection() {
  return (
    <section className="laser">

      <div className="laser-container">

        <div className="laser-content">

          <span className="section-tag">
            Tecnología Láser
          </span>

          <h2>
            Tratamientos más cómodos y menos invasivos
          </h2>

          <p>
            Incorporamos tecnología láser para complementar
            distintos tratamientos odontológicos y mejorar
            la experiencia del paciente.
          </p>

          <p>
            Su utilización permite reducir molestias,
            favorecer la recuperación y optimizar
            determinados procedimientos clínicos.
          </p>

          <a
            href="https://wa.me/5493564616171"
            target="_blank"
            rel="noreferrer"
            className="laser-btn"
          >
            Consultar por Láser
          </a>

        </div>

        <div className="laser-image">
          <img
            src="/laser.jpg"
            alt="Laserterapia odontológica"
          />
        </div>

      </div>

    </section>
  );
}

export default LaserSection;