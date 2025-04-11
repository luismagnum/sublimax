import Image from "next/image";
import { FaBrain, FaPuzzlePiece, FaBullseye } from "react-icons/fa";

const Rompecabezas = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Sublimados en Rompecabezas 🧩
      </h2>

      <div data-aos="zoom-in" className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:items-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/rompe.JPG"
            alt="Rompecabezas personalizado"
            width={350}
            height={350}
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        </div>

        <div className="w-full md:w-1/2 flex md:h-[350px]">
          <div className="flex flex-col justify-center space-y-6 text-center md:text-left text-gray-700 text-lg">
            <div className="flex items-start gap-3">
              <FaBrain className="text-purple-600 mt-1" size={24} />
              <p>
                Los rompecabezas personalizados son más que un simple juego. Estimulan el desarrollo cognitivo, mejorando la concentración, memoria y coordinación mano-ojo de los niños.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaBullseye className="text-red-500 mt-1" size={24} />
              <p>
                Ayudan a desarrollar habilidades como el enfoque, la paciencia y la lógica de una forma entretenida y educativa.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaPuzzlePiece className="text-green-600 mt-1" size={24} />
              <p>
                Personalizados con sus personajes favoritos, los rompecabezas sublimados motivan más a los niños y hacen del aprendizaje una experiencia divertida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rompecabezas;

