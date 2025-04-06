import Image from "next/image";

const Subli = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        
        <div className="w-full md:w-1/2">
          <Image
            src="/subliuno.jpeg" 
            alt="Trabajos de sublimación"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>

        <div data-aos="fade-right" className=" bg-gray-100 w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">Creamos diseños para vos</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Ofrecemos personalización con sublimación en una gran variedad de productos, 
            ideales para regalos, eventos y promociones.
          </p>
          
          <ul className="text-gray-700 mt-6 space-y-4 md:text-2xl md:text-left md:pl-5">
            <li className="flex items-center gap-2">
              ✅ <span>Tazas personalizadas</span>
            </li>
            <li className="flex items-center gap-2">
              ✅ <span>Llaveros únicos</span>
            </li>
            <li className="flex items-center gap-2">
              ✅ <span>Gorras con tu logo o diseño</span>
            </li>
            <li className="flex items-center gap-2">
              ✅ <span>Franelas con impresión de alta calidad</span>
            </li>
            <li className="flex items-center gap-2">
              ✅ <span>Vasos sublimados</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Subli;
