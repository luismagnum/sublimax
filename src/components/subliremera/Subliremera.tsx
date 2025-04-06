import Image from "next/image";

const Subliremera = () => {
  return (
    <section className=" py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/remeras.jpg"
            alt="Sublimación en remeras"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>

        <div data-aos="fade-left" className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">Sublimación en Remeras</h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            La sublimación es una técnica de impresión que permite transferir diseños de alta calidad 
            a remeras de poliéster. Se caracteriza por su durabilidad, colores vibrantes y tacto suave, 
            ya que la tinta se fusiona con la tela sin dejar relieve.
          </p>
          <p className="text-gray-700 mt-2">
            Ideal para personalizar prendas con logos, frases o imágenes sin desgaste con el tiempo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subliremera;
