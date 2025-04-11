"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonios = () => {
  const sliderRef = useRef(null);
  const [sliderInstanceRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 30 },
      },
    },
    created(s) {
      sliderRef.current = s;
    },
  });

  const testimonios = [
    {
      nombre: "Luis Diaz",
      mensaje:
        "Encargué unas tazas personalizadas para un cumpleaños y quedaron increíbles. ¡Gracias por la rapidez y la calidad!",
    },
    {
      nombre: "Martín Ríos",
      mensaje:
        "Pedí franelas para mi emprendimiento y el resultado fue excelente. Colores vivos y entrega puntual.",
    },
    {
      nombre: "Paula Gómez",
      mensaje:
        "Me encantó el trato y cómo entendieron mi idea. Las gorras quedaron hermosas y mis clientes felices.",
    },
    {
      nombre: "Julio Alves",
      mensaje:
        "Excelente atención y resultados. Ya he hecho varios pedidos y siempre cumplen. Lo recomiendo 100%",
    },
  ];

  return (
    <section className="bg-gray-300 py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Lo que dicen nuestros clientes
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Slider */}
        <div ref={sliderInstanceRef} className="keen-slider">
          {testimonios.map((t, index) => (
            <div
              key={index}
              className="keen-slider__slide bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 min-h-[200px]"
            >
              <p className="text-gray-600 italic mb-4">"{t.mensaje}"</p>
              <h4 className="text-gray-800 font-semibold text-lg">— {t.nombre}</h4>
            </div>
          ))}
        </div>

        {/* Botones en desktop (a los costados) */}
        <div className="hidden md:flex justify-between items-center absolute top-1/2 left-[-40px] right-[-40px] -translate-y-1/2 z-10 pointer-events-none">
          <button
            onClick={() => sliderRef.current?.prev()}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition pointer-events-auto"
            aria-label="Anterior"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={() => sliderRef.current?.next()}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition pointer-events-auto"
            aria-label="Siguiente"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Botones en mobile (abajo, centrados) */}
        <div className="md:hidden flex justify-center gap-4 mt-6">
          <button
            onClick={() => sliderRef.current?.prev()}
            className="bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition"
            aria-label="Anterior"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={() => sliderRef.current?.next()}
            className="bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition"
            aria-label="Siguiente"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
