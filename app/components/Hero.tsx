import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-16 relative bg-gradient-to-br from-blue-900 to-gray-900">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/team.avif"
          alt="UponWare Tecnología Espacial"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Innovación más allá de la atmósfera
        </h1>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Soluciones tecnológicas que combinan educación STEM, desarrollo espacial y transformación digital
        </p>
        <a href="/servicios" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
          Descubre nuestros servicios
        </a>
      </div>
    </section>
  );
}