import { useState } from "react";
import "./CasesSection.css";

function CasesSection() {
  const casos = [
    {
      titulo: "Alineación dental",
      imagenes: [
        { src: "/caso1-1.jpg", etiqueta: "Antes" },
        { src: "/caso1-2.jpg", etiqueta: "Después" },
        { src: "/caso1-3.jpg", etiqueta: "Resultado" },
      ],
    },
    {
      titulo: "Corrección de mordida",
      imagenes: [
        { src: "/caso2-1.jpg", etiqueta: "Antes" },
        { src: "/caso2-2.jpg", etiqueta: "Después" },
        { src: "/caso2-3.jpg", etiqueta: "Resultado" },
      ],
    },
    {
      titulo: "Ortodoncia invisible",
      imagenes: [
        { src: "/caso3-1.jpg", etiqueta: "Antes" },
        { src: "/caso3-2.jpg", etiqueta: "Después" },
        { src: "/caso3-3.jpg", etiqueta: "Resultado" },
      ],
    },
  ];

  const [indices, setIndices] = useState([0, 0, 0]);

  const cambiarImagen = (casoIndex, direccion) => {
    setIndices((prev) => {
      const nuevos = [...prev];
      const total = casos[casoIndex].imagenes.length;

      if (direccion === "next") {
        nuevos[casoIndex] = (nuevos[casoIndex] + 1) % total;
      } else {
        nuevos[casoIndex] = (nuevos[casoIndex] - 1 + total) % total;
      }

      return nuevos;
    });
  };

  return (
    <section className="cases" id="casos">
      <div className="section-header">
        <span className="section-tag">Casos Reales</span>
        <h2>Resultados que hablan por sí solos</h2>
        <p>
          Algunos ejemplos de tratamientos realizados por la Dra. Anabel Sánchez.
        </p>
      </div>

      <div className="cases-grid">
        {casos.map((caso, index) => {
          const actual = caso.imagenes[indices[index]];

          return (
            <div className="case-card" key={index}>
              <div className="case-image-wrapper">
                <span className="case-badge">{actual.etiqueta}</span>

                <button
                  className="case-arrow left"
                  onClick={() => cambiarImagen(index, "prev")}
                  aria-label="Imagen anterior"
                  type="button"
                >
                  ‹
                </button>

                <img src={actual.src} alt={`${caso.titulo} - ${actual.etiqueta}`} />

                <button
                  className="case-arrow right"
                  onClick={() => cambiarImagen(index, "next")}
                  aria-label="Imagen siguiente"
                  type="button"
                >
                  ›
                </button>
              </div>

              <h3>{caso.titulo}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CasesSection;