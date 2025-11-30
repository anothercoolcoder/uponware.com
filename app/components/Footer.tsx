import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Información de la empresa */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">UponWare</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
              Líderes en soluciones tecnológicas innovadoras que combinan educación STEM, desarrollo espacial 
              y transformación digital para impulsar el futuro de Latinoamérica.
            </p>
          </div>

          {/* Contacto rápido */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto Rápido</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📧 comercial@uponware.com</p>
              <p>📍 CR 27 No. 46 85 Of. 201</p>
              <p>📞 +57 300 5600943</p>
            </div>
            <button className="w-full bg-[#15297c] text-white py-2 rounded-lg mt-4 hover:bg-blue-700 transition duration-200 text-sm font-medium">
              Solicitar Cotización
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2025 UponWare. NIT. 901.920.675-7. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}