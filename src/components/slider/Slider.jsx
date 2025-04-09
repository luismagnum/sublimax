"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useState, useRef } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const sliderRef = useRef(null);

  const [sliderInstanceRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created(s) {
      setLoaded(true);
      sliderRef.current = s;
    },
  });

  const imagenes = [
    "/imag1.png",
    "/imag2.png",
    "/imag3.png",
    "/imag4.png",
    "/imag5.png",
    "/imag6.png",
    "/imag7.png",
  ];

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16 lg:px-24 relative">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Diseños Realizados
      </h2>

      <div className="relative">
        {/* Slider */}
        <div ref={sliderInstanceRef} className="keen-slider">
          {imagenes.map((img, index) => (
            <div key={index} className="keen-slider__slide">
              <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={img}
                  alt={`Trabajo ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Botones de navegación */}
        {loaded && sliderRef.current && (
          <>
            <button
              onClick={() => sliderRef.current.prev()}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition z-10"
              aria-label="Anterior"
            >
              ◀
            </button>
            <button
              onClick={() => sliderRef.current.next()}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition z-10"
              aria-label="Siguiente"
            >
              ▶
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default Slider;
