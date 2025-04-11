import Image from "next/image";
import { FaMugHot, FaGift, FaSmileBeam } from "react-icons/fa";

const SubliTazas = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
        Sublimación en Tazas
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-8 md:items-center">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="flex flex-col justify-center space-y-6 h-full md:h-[500px] text-center md:text-left">
            <div className="flex items-start gap-3 text-gray-700 text-lg">
              <FaMugHot className="text-yellow-600 mt-1" size={24} />
              <p>
                El proceso de sublimación en tazas consiste en transferir diseños impresos con tinta especial
                a la superficie de una taza de cerámica. Utilizamos calor y presión para lograr una fusión duradera
                y con colores vibrantes.
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-700 text-lg">
              <FaGift className="text-pink-600 mt-1" size={24} />
              <p>
                Ideal para regalos personalizados, celebraciones especiales o branding de tu emprendimiento. 
                Cada taza se convierte en algo único.
              </p>
            </div>

            <div className="flex items-start gap-3 text-gray-700 text-lg">
              <FaSmileBeam className="text-green-600 mt-1" size={24} />
              <p>
                Las tazas sublimadas son resistentes al uso diario, aptas para microondas, y generan una gran sonrisa 😊.
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/tazas.png"
            alt="Taza sublimada"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default SubliTazas;
