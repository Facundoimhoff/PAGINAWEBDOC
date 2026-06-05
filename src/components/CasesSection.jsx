import { useState, useRef, useCallback, useEffect } from 'react';
import './Casos.css';

/*
  Estructura esperada de imagenes:
  - Cada caso es un objeto con: id, titulo, imgAntes, imgDespues
  - imgAntes = foto con los dientes en peor estado
  - imgDespues = foto con el resultado final
*/
const casosData = [
  {
    id: 1,
    titulo: 'Alineación dental',
    imgAntes: '/casos/caso1-antes.jpg',
    imgDespues: '/casos/caso1-despues.jpg',
  },
  {
    id: 2,
    titulo: 'Corrección de mordida',
    imgAntes: '/casos/caso2-antes.jpg',
    imgDespues: '/casos/caso2-despues.jpg',
  },
  {
    id: 3,
    titulo: 'Ortodoncia invisible',
    imgAntes: '/casos/caso3-antes.jpg',
    imgDespues: '/casos/caso3-despues.jpg',
  },
];

/* ================================
   Componente ComparisonSlider
   ================================ */
function ComparisonSlider({ caso }) {
  const containerRef = useRef(null);
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);

  const updateSlider = useCallback((clientX) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    let percentage = ((clientX - rect.left) / rect.width) * 100;
    percentage = Math.max(0, Math.min(100, percentage));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    updateSlider(e.clientX);
  }, [updateSlider]);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging.current) return;
    updateSlider(e.touches[0].clientX);
  }, [updateSlider]);

  const handleClick = useCallback((e) => {
    updateSlider(e.clientX);
  }, [updateSlider]);

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleMouseUp, handleMouseMove, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className="comparison-container"
      onClick={handleClick}
      style={{ cursor: 'col-resize', userSelect: 'none' }}
    >
      {/* Imagen DESPUÉS (fondo) */}
      <div className="comparison-image after-image">
        <img src={caso.imgDespues} alt={`Después - ${caso.titulo}`} draggable={false} />
        <span className="label label-after">DESPUÉS</span>
      </div>

      {/* Imagen ANTES (superpuesta, ancho controlado) */}
      <div
        className="comparison-image before-image"
        style={{ width: `${sliderPos}%` }}
      >
        <img src={caso.imgAntes} alt={`Antes - ${caso.titulo}`} draggable={false} />
        <span className="label label-before">ANTES</span>
      </div>

      {/* Barra deslizadora */}
      <div
        className="slider-handle"
        style={{ left: `${sliderPos}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        role="slider"
        aria-valuenow={Math.round(sliderPos)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Comparar antes y después"
      >
        <div className="slider-button">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M5 10l-4-4v8l4-4zm14 0l-4-4v8l4-4z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ================================
   Componente principal Casos
   ================================ */
export default function Casos() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = casosData.length;

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section id="casos" className="casos-section">
      <div className="container">
        <p className="section-tag">CASOS REALES</p>
        <h2>Resultados que hablan por sí solos</h2>
        <p className="section-desc">
          Algunos ejemplos de tratamientos realizados por la Dra. Anabel Sánchez.
        </p>

        {/* Carrusel */}
        <div className="carousel-wrapper">
          <div className="carousel-slides">
            {casosData.map((caso, index) => (
              <div
                key={caso.id}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <h3 className="case-title">{caso.titulo}</h3>
                <ComparisonSlider caso={caso} />
              </div>
            ))}
          </div>

          {/* Botones de navegación */}
          <div className="carousel-buttons">
            <button
              className="prev-btn"
              onClick={goToPrev}
              aria-label="Caso anterior"
              type="button"
            >
              &#10094;
            </button>
            <span className="slide-counter">
              <span className="current">{currentSlide + 1}</span>
              {' / '}
              <span className="total">{totalSlides}</span>
            </span>
            <button
              className="next-btn"
              onClick={goToNext}
              aria-label="Caso siguiente"
              type="button"
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}