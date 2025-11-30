import { RocketLaunchIcon, AcademicCapIcon, LightBulbIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: RocketLaunchIcon,
    title: "Futuro espacial",
    desc: "Diseñamos soluciones que apuntan más allá de la atmósfera."
  },
  {
    icon: AcademicCapIcon,
    title: "Educación real",
    desc: "Enseñamos tecnología a niños de forma práctica y divertida."
  },
  {
    icon: LightBulbIcon,
    title: "Innovación aplicada",
    desc: "Desarrollamos VR, estaciones terrenas y más, con impacto real."
  },
  {
    icon: UserGroupIcon,
    title: "Equipo apasionado",
    desc: "Unimos ciencia, educación y creatividad para cambiar el mundo."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">¿Por qué elegirnos?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}