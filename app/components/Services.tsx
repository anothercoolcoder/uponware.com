import Image from 'next/image';
import { RocketLaunchIcon, ComputerDesktopIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: <RocketLaunchIcon className="w-6 h-6 text-blue-600" />,
    image: "/1.png",
    title: "Cohetería Espacial",
    description: "Nuestro equipo trabaja en proyectos de cohetería de vanguardia, explorando los límites de la innovación."
  },
  {
    icon: <ComputerDesktopIcon className="w-6 h-6 text-green-600" />,
    image: "/2.png", 
    title: "Educación Informática",
    description: "Creamos cursos divertidos y educativos de programación y tecnología para niños y jóvenes."
  },
  {
    icon: <VideoCameraIcon className="w-6 h-6 text-purple-600" />,
    image: "/3.png",
    title: "Tecnología y Desarrollo",
    description: "Desarrollo de estaciones terrenas avanzadas y experiencias inmersivas en realidad virtual."
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              {/* Imagen del servicio */}
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Contenido */}
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}