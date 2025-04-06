"use client";

import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Encargar = () => {
  return (
    <section className="relative w-full h-96 md:h-[450px] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/vasos.jpg" 
          alt="Fondo contacto"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" /> 
      </div>

      <div  className="relative z-10 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Querés encargar un diseño?
        </h2>

        <p data-aos="fade-right" className="text-lg mb-6">
          Contactanos directamente por WhatsApp y contanos tu idea ✨
        </p>

        <a
          href="https://wa.me/5492984916472?text=Hola quiero un presupuesto" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition"
        >
          <FaWhatsapp size={24} />
          Hablame por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Encargar;
