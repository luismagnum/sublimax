import Image from "next/image";

const SubliTazas = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Sublimación en Tazas
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-stretch gap-8">
        <div className="w-full md:w-1/2 text-center md:text-left self-center md:self-start flex flex-col justify-center h-full">
          <p className="text-gray-700 text-lg leading-relaxed">
            El proceso de sublimación en tazas consiste en transferir diseños impresos con tinta
            especial a la superficie de una taza de cerámica recubierta con polímero. 
            Utilizamos calor y presión para lograr que el diseño se fusione permanentemente 
            con la taza, garantizando durabilidad y colores vibrantes.
          </p>
          <p className="text-gray-700 text-lg mt-6">
            Es ideal para regalos personalizados, eventos especiales y merchandising de marca. 
            Las tazas sublimadas son resistentes al uso diario y aptas para microondas.
          </p>
        </div>

        <div data-aos="fade-left" className="w-full md:w-1/2">
          <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/tazas.png" 
              alt="Taza sublimada"
              width={500}
              height={500}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubliTazas;

