import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-[#15297c]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">¿Tienes un proyecto en mente?</h2>
        <p className="text-blue-100 text-lg mb-8">
          Podemos ayudarte a hacer realidad tus ideas. Hablemos sobre lo que podemos construir y lograr juntos.
        </p>
        <Link 
          href="/contacto"
          className="text-white hover:bg-white hover:text-black px-8 py-2 rounded-md text-sm font-medium transition duration-200"
        >
          Conecta con nosotros
        </Link>
      </div>
    </section>
  );
}