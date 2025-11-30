import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-gray-900 shadow-sm fixed w-full top-0 z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/uponware.png"
              alt="UponWare"
              width={150}
              height={50}
              className="h-8 w-auto brightness-0 invert"
              priority
            />
          </Link>

          {/* Espacio vacío */}
          <div className="flex-1"></div>

          {/* Navegación */}
          <nav className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="bg-blue-600 text-white hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium transition duration-200">Inicio
            </Link>
            <Link href="/servicios" className="bg-blue-600 text-white hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium transition duration-200">
              Servicios
            </Link>
            <Link href="/nosotros" className="bg-blue-600 text-white hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium transition duration-200">
              Nosotros
            </Link>
            <Link 
              href="/contacto"
              className="bg-blue-600 text-white hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium transition duration-200"
            > 
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}