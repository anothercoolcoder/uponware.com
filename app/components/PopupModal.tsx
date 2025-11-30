'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setIsOpen(false);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full mx-auto overflow-hidden">
        
        <button onClick={closeModal} className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition duration-200">
          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Sección de imagen destacada */}
          <div className="lg:w-2/5 relative h-64 lg:h-auto">
            <Image
              src="/portugues.jpg" // ← RUTA DE LA IMAGEN AQUÍ
              alt="Curso de Portugués - UponWare"
              fill
              className="object-cover"
              priority
            />
            {/* Texto sobre la imagen */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-white text-center p-4">
                <h2 className="text-2xl lg:text-3xl font-bold mb-2">PORTUGUÉS</h2>
                <div className="text-lg">Curso Básico</div>
              </div>
            </div>
          </div>

          {/* Sección de contenido */}
          <div className="lg:w-3/5 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Información del curso */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Información del Curso</h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">20</div>
                      <div className="text-sm text-gray-600">horas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">VIRTUAL</div>
                      <div className="text-sm text-gray-600">Modalidad</div>
                    </div>
                  </div>
                  <div className="text-center bg-blue-100 rounded py-2">
                    <div className="font-semibold text-blue-800">REGISTRATE</div>
                    <div className="text-sm text-blue-600">comercial@uponware.com</div>
                  </div>
                </div>
              </div>

              {/* Oferta especial */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Oferta Especial</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-600 mb-4">¡20% de descuento en tu primer proyecto!</p>
                  <Link href="/contacto" onClick={closeModal} className="block">
                    <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-green-700 transition duration-200">
                      Obtener oferta
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}