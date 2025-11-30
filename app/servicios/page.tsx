import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function ServiciosPage() {
    
  const services = [
  // PROGRAMA STEAM+
  {
    id: 1,
    title: "Programa STEAM+ Integral",
    description: "Transformación educativa completa mediante metodología STEAM, preparando estudiantes para los desafíos del siglo XXI.",
    features: [
      "STEAM en todas las áreas del conocimiento",
      "Enfoque basado en proyectos",
      "Certificación internacional",
      "Cierre de brechas tecnológicas y educativas",
      "Formación de líderes innovadores"
    ],
    levels: [
      "Estándar", 
      "Avanzado",
      "Consultoría y Acompañamiento Pedagógico"
    ],
    price: "Personalizado",
    icon: "🚀",
    audience: ["Docentes", "Estudiantes", "Directivos"]
  },

  // ROBÓTICA EDUCATIVA POR NIVELES
  {
    id: 2,
    title: "Robótica Educativa - Nivel 1",
    subtitle: "Mis Primeros Robots",
    description: "Introducción a conceptos básicos de construcción y movimiento mediante proyectos guiados.",
    features: [
      "Construcción Guiada",
      "Programación por Bloques", 
      "Resolución de Retos",
      "Kits LEGO WeDo 2.0 / Bee-Bots"
    ],
    objective: "Introducir conceptos básicos de construcción y movimiento",
    price: "Desde $450",
    icon: "🤖",
    audience: ["Estudiantes 6-8 años"]
  },
  {
    id: 3,
    title: "Robótica Educativa - Nivel 2", 
    subtitle: "Robótica para Solucionar Problemas",
    description: "Aprendizaje de mecanismos, sensores y programación condicional para resolver desafíos.",
    features: [
      "Mecanismos y engranajes",
      "Introducción a sensores",
      "Programación visual avanzada", 
      "Kits LEGO SPIKE / VEX IQ"
    ],
    objective: "Aprender sobre mecanismos, sensores y programación condicional",
    price: "Desde $550",
    icon: "🔧",
    audience: ["Estudiantes 9-11 años"]
  },
  {
    id: 4,
    title: "Robótica Educativa - Nivel 3",
    subtitle: "Automatización con Microcontroladores", 
    description: "Electrónica básica y programación en texto para crear sistemas autónomos.",
    features: [
      "Fundamentos de electrónica",
      "Programación C++/Python",
      "Integración sensores y actuadores",
      "Plataforma Arduino / Raspberry Pi Pico"
    ],
    objective: "Entender electrónica básica y programación en texto para sistemas autónomos",
    price: "Desde $650", 
    icon: "💡",
    audience: ["Estudiantes 12-14 años"]
  },
  {
    id: 5,
    title: "Robótica Educativa - Nivel 4",
    subtitle: "Robótica Inteligente y Visión Artificial",
    description: "Aplicación de IA y machine learning para robots con autonomía y capacidad de decisión.",
    features: [
      "Sistemas Operativos para Robots (ROS)",
      "Visión por computadora", 
      "Introducción Machine Learning",
      "Raspberry Pi, OpenCV, TensorFlow Lite"
    ],
    objective: "Aplicar IA y machine learning para robots autónomos",
    price: "Desde $750",
    icon: "👁️",
    audience: ["Estudiantes 15-18 años"]
  },

  // INTELIGENCIA ARTIFICIAL
  {
    id: 6,
    title: "IA para Docentes",
    subtitle: "La IA como Co-piloto en el Aula", 
    description: "Capacitación en integración de inteligencia artificial como herramienta educativa.",
    features: [
      "Fundamentos de IA en educación",
      "Creación de contenido y planificación aumentada",
      "Personalización del aprendizaje",
      "Ética y ciudadanía digital"
    ],
    modules: [
      "Fundamentos de la IA en la Educación",
      "Creación de Contenido y Planificación Aumentada", 
      "Personalización del Aprendizaje",
      "Ética, Ciudadanía Digital y Pensamiento Crítico"
    ],
    price: "Desde $600",
    icon: "🧠",
    audience: ["Docentes"]
  },
  {
    id: 7,
    title: "IA para Directivos",
    subtitle: "Estrategia de Integración Institucional",
    description: "Desarrollo de hoja de ruta para adopción de IA en instituciones educativas.",
    features: [
      "Panorama estratégico de IA en educación",
      "Diseño de hoja de ruta", 
      "Liderazgo y gestión del cambio",
      "Políticas institucionales y gobernanza"
    ],
    modules: [
      "Panorama Estratégico de la IA en la Educación",
      "Diseño de Hoja de Ruta para la Adopción",
      "Liderazgo y Gestión del Cambio", 
      "Políticas Institucionales y Gobernanza"
    ],
    price: "Consultar",
    icon: "🏫",
    audience: ["Directivos"]
  },

  // TECNOLOGÍAS INMERSIVAS
  {
    id: 8,
    title: "Realidad Virtual Educativa",
    description: "Creación de experiencias inmersivas para aprendizaje interactivo y memorable.",
    features: [
      "Diseño de entornos VR educativos",
      "Programación con A-Frame",
      "Experiencias interactivas",
      "Proyectos multidisciplinarios"
    ],
    price: "Desde $550",
    icon: "🥽", 
    audience: ["Estudiantes", "Docentes"]
  },
  {
    id: 9,
    title: "Realidad Aumentada en el Aula",
    description: "Integración de elementos digitales en el mundo real para enriquecer el aprendizaje.",
    features: [
      "Desarrollo con ARKit/ARCore",
      "Marcadores y tracking",
      "Animaciones 3D interactivas", 
      "Proyectos educativos con AR"
    ],
    price: "Desde $500",
    icon: "📱",
    audience: ["Estudiantes", "Docentes"]
  },

  // PROGRAMACIÓN
  {
    id: 10,
    title: "Programación para Niños",
    description: "Introducción a la programación mediante juegos y proyectos creativos.",
    features: [
      "Scratch y Blockly para principiantes",
      "Python para jóvenes programadores",
      "Desarrollo de videojuegos simples", 
      "Proyectos creativos y prácticos"
    ],
    price: "Desde $400",
    icon: "👨‍💻",
    audience: ["Estudiantes 7-12 años"]
  },
  {
    id: 11, 
    title: "Programación Avanzada",
    description: "Profundización en lenguajes de programación y desarrollo de software.",
    features: [
      "JavaScript y TypeScript",
      "Desarrollo web con HTML/CSS",
      "Apps móviles con React Native",
      "Introducción a bases de datos"
    ],
    price: "Desde $600",
    icon: "💻",
    audience: ["Estudiantes 13-18 años"]
  },

  // CIENCIAS ESPACIALES
  {
    id: 12,
    title: "Cohetería Espacial para Niños",
    description: "Cursos divertidos y educativos sobre fundamentos de cohetería y exploración espacial.",
    features: [
      "Instructores ganadores de concursos mundiales",
      "Experimentos seguros y supervisados",
      "Construcción de cohetes modelo", 
      "Principios de física y aerodinámica"
    ],
    price: "Desde $500",
    icon: "🚀",
    audience: ["Estudiantes 8-15 años"]
  },
  {
    id: 13,
    title: "Astronomía y Satélites", 
    description: "Introducción a la astronomía y tecnología satelital mediante proyectos prácticos.",
    features: [
      "Observación astronómica",
      "Fundamentos de tecnología satelital",
      "Proyectos de simulación",
      "Visitas a estaciones especiales"
    ],
    price: "Desde $450",
    icon: "🛰️",
    audience: ["Estudiantes", "Docentes"]
  },

  // CONCURSOS Y CERTIFICACIONES
  {
    id: 14,
    title: "Preparación para Concursos",
    description: "Entrenamiento especializado para competencias nacionales e internacionales STEAM.",
    features: [
      "Preparación técnica específica",
      "Desarrollo de proyectos competitivos",
      "Simulacros de competencias",
      "Acompañamiento de expertos"
    ],
    price: "Consultar",
    icon: "🏆",
    audience: ["Estudiantes", "Docentes"]
  },
  {
    id: 15,
    title: "Certificación Internacional STEAM",
    description: "Programa de certificación que valida competencias STEAM a nivel internacional.",
    features: [
      "Evaluación de competencias",
      "Portafolio de proyectos",
      "Certificación internacional",
      "Oportunidades de networking global"
    ],
    price: "Consultar", 
    icon: "📜",
    audience: ["Estudiantes", "Docentes", "Directivos"]
  }
];

  return (
    <>
    <Header/>
      <div className="min-h-screen bg-gray-50 pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-16 mb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Nuestros Servicios
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Ofrecemos soluciones digitales completas para impulsar tu negocio al siguiente nivel
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contacto"
                  className="bg-blue-600 text-white hover:bg-blue-500 px-6 py-3 rounded-lg font-medium transition duration-200"
                >
                  Solicitar Presupuesto
                </Link>
                <Link 
                  href="/"
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition duration-200"
                >
                  Volver al Inicio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{service.icon}</div>
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contacto"
                  className="block w-full bg-blue-600 text-white text-center hover:bg-blue-500 px-4 py-3 rounded-lg font-medium transition duration-200"
                >
                  Más Información
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 pb-20">
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contáctanos y creemos una solución personalizada para tu proyecto
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contacto"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition duration-200"
              >
                Hablar con un Experto
              </Link>
              <a 
                href="https://wa.me/+573005600943" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-200"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}