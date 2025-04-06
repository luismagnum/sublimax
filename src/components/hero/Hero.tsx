"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-80 md:h-screen flex flex-col justify-center items-center lg:px-32 px-4">
      <div className="absolute inset-0 z-[-1]">
        <Image 
          src="/subli.jpg"
          alt="Fondo del Hero"
          width={1920} 
          height={1080} 
          priority={true} 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="max-w-2xl text-center md:text-left mt-10 md:mt-0">
        <h1 className="text-2xl md:text-5xl font-bold inline-block bg-white/20 backdrop-blur-md text-black px-4 py-2 rounded-lg">
         Sublimá. Regalá. Sorprendé.
        </h1>
        <div data-aos="fade-right"  className="text-white mt-4 text-xl md:text-4xl font-bold">
          Personalizados para toda ocasion
        </div>
        <a 
          href="https://wa.me/542984916472?text=Hola quiero un presupuesto" target="_blank" className="mt-6 inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 transition duration-300 items-center justify-center space-x-2">
          WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Hero;
