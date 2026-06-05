import { useState } from "react";
import "./CasesSection.css";

function CasesSection() {

  const casos = [
    {
      titulo: "Alineación dental",
      imagenes: [
        "/caso1-1.jpg",
        "/caso1-2.jpg",
        "/caso1-3.jpg"
      ]
    },
    {
      titulo: "Corrección de mordida",
      imagenes: [
        "/caso2-1.jpg",
        "/caso2-2.jpg",
        "/caso2-3.jpg"
      ]
    },
    {
      titulo: "Ortodoncia invisible",
      imagenes: [
        "/caso3-1.jpg",
        "/caso3-2.jpg",
        "/caso3-3.jpg"
      ]
    }
  ];

  const [indices, setIndices] = useState([0, 0, 0]);

  const siguiente = (casoIndex) => {
    const nuevos = [...indices];

    nuevos[casoIndex] =
      (nuevos[casoIndex] + 1) %
      casos[casoIndex].imagenes.length;

    setIndices(nuevos);
  };

  const anterior = (casoIndex) => {
    const nuevos = [...indices];

    nuevos[casoIndex] =
      (nuevos[casoIndex] - 1 +
        casos[casoIndex].imagenes.length) %
      casos[casoIndex].imagenes.length;

    setIndices(nuevos);
  };

  return (
    <section className="cases" id="casos">

      <div className="section-header">
        <span className="section-tag">
          Casos Reales
        </span>

        <h2>
          Resultados que hablan por sí solos
        </h2>

        <p>
          Algunos ejemplos de tratamientos realizados por la Dra. Anabel Sánchez.
        </p>
      </div>

      <div className="cases-grid">

        {casos.map((caso, index) => (
          <div className="case-card" key={index}>

            <img
              src={caso.imagenes[indices[index]]}
              alt={caso.titulo}
            />

            <div className="carousel-buttons">
              <button onClick={() => anterior(index)}>
                ◀
              </button>

              <button onClick={() => siguiente(index)}>
                ▶
              </button>
            </div>

            <h3>{caso.titulo}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default CasesSection;