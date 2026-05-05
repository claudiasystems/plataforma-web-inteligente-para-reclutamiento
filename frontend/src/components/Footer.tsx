// Footer con información de contacto y redes sociales

'use client';

import { Facebook, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { SOCIAL_LINKS } from '@/utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid de contenido - 4 columnas en desktop, 1 en móvil */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Información de la empresa */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded flex items-center justify-center text-white font-bold">
                R
              </span>
              RecluteApp
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Plataforma inteligente para la gestión automatizada de procesos de reclutamiento y entrevistas virtuales.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-green-500 transition font-medium"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/jobs"
                  className="text-gray-400 hover:text-green-500 transition font-medium"
                >
                  Ofertas de Empleo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition font-medium"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition font-medium"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-green-500 flex-shrink-0" />
                <a
                  href="mailto:info@recluteapp.com"
                  className="text-gray-400 hover:text-green-500 transition"
                >
                  info@recluteapp.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-green-500 flex-shrink-0" />
                <a
                  href="tel:+573126789342"
                  className="text-gray-400 hover:text-green-500 transition"
                >
                  +573126789342
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-green-500 flex-shrink-0" />
                <span className="text-gray-400">Madrid, España</span>
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.facebook}
                className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                className="bg-gray-700 hover:bg-blue-400 p-3 rounded-full transition"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                className="bg-gray-700 hover:bg-pink-600 p-3 rounded-full transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 pt-8">
          {/* Información legal y copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} RecluteApp. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
