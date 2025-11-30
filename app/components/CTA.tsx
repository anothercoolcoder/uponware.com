import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">¿Tienes un proyecto en mente?</h2>
        <p className="text-blue-100 text-lg mb-8">
          Podemos ayudarte a hacer realidad tus ideas. Hablemos sobre lo que podemos construir y lograr juntos.
        </p>
        <Link 
          href="/contacto"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200 inline-block"
        >
          Conecta con nosotros
        </Link>
      </div>
    </section>
  );
}