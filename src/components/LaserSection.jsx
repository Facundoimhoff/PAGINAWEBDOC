import { useState } from "react";
import "./LaserSection.css";

function LaserSection() {

  const imagenes = [
    "/laser1.jpeg",
    "/laser2.jpg",
    "/laser3.jpg"
  ];

  const [imagenActual, setImagenActual] = useState(0);

  const siguiente = () => {
    setImagenActual((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setImagenActual(
      (prev) => (prev - 1 + imagenes.length) % imagenes.length
    );
  };

  return (
    <section className="laser" id="laser">

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
            href="https://wa.me/543564616171?text=Hola%20Anabel%2C%20quiero%20informaci%C3%B3n%20sobre%20las%20terapias%20l%C3%A1ser.%20Tengo%20molestias%20en%3A%20"
            target="_blank"
            rel="noreferrer"
            className="laser-btn"
          >
            Consultar por Láser
          </a>

        </div>

        <div className="laser-image">

          <button
            className="laser-arrow left"
            onClick={anterior}
            type="button"
          >
            ‹
          </button>

          <img
            src={imagenes[imagenActual]}
            alt="Laserterapia odontológica"
          />

          <button
            className="laser-arrow right"
            onClick={siguiente}
            type="button"
          >
            ›
          </button>

        </div>

      </div>

    </section>
  );
}

export default LaserSection;