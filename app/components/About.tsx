import Image from 'next/image';

export default function About() {
  // Array de clientes con sus imágenes
  const clients = [
    {
      name: "Duitama",
      logo: "/duitama.png", // Ajusta la ruta según tus archivos
      width: 120,
      height: 60
    },
    {
      name: "Tic",
      logo: "/tic.png",
      width: 140,
      height: 40
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Acerca de nosotros */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Acerca de nosotros</h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Uponware es una empresa dedicada al desarrollo de soluciones tecnológicas innovadoras que combinan 
              educación STEM, control y monitoreo satelital, programación para niños y jóvenes, cohetería educativa, 
              desarrollo web a la medida y experiencias en realidad virtual.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                  Misión
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Desarrollar soluciones tecnológicas innovadoras que integren el control satelital, la formación en 
                  competencias digitales para niños y jóvenes, y el diseño de software a la medida.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-green-600 rounded-full mr-3"></span>
                  Visión
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Consolidarnos como una empresa líder en Latinoamérica en el desarrollo de soluciones tecnológicas 
                  de alto impacto, destacándonos por nuestra capacidad para integrar educación, innovación espacial 
                  y transformación digital.
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha - Clientes con imágenes */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Clientes con los que hemos trabajado
            </h3>
            
            {/* Grid de clientes con imágenes */}
            <div className="grid grid-cols-2 gap-6">
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 h-32 rounded-xl flex items-center justify-center p-4 border border-gray-200 hover:shadow-md transition duration-200"
                >
                  <Image
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    width={client.width}
                    height={client.height}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}