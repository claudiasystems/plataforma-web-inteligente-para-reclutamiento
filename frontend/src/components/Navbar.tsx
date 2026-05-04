// Barra de navegación principal con menú responsivo

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, LogOut, User } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuthStore();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:inline">
              RecluteApp
            </span>
          </Link>

          {/* Links de navegación - Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Inicio
            </Link>
            <Link
              href="/jobs"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Ofertas
            </Link>
            {isAuthenticated && (
              <Link
                href={user?.role === 'recruiter' ? '/recruiter/dashboard' : '/candidate/dashboard'}
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Panel
              </Link>
            )}
          </div>

          {/* Botones de autenticación - Desktop */}
          <div className="hidden md:flex space-x-4 items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User size={20} className="text-gray-600" />
                  <span className="text-gray-700 font-medium">{user?.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition font-medium flex items-center gap-2"
                >
                  <LogOut size={18} />
                  Salir
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-700 border-2 border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 font-medium transition"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  href="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium transition"
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>

          {/* Botón de menú móvil */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Alternar menú"
          >
            {isOpen ? (
              <X size={24} className="text-gray-900" />
            ) : (
              <Menu size={24} className="text-gray-900" />
            )}
          </button>
        </div>

        {/* Menú móvil - Responsivo */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 border-t">
            <Link
              href="/"
              className="block text-gray-700 hover:text-blue-600 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/jobs"
              className="block text-gray-700 hover:text-blue-600 py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Ofertas
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  href={user?.role === 'recruiter' ? '/recruiter/dashboard' : '/candidate/dashboard'}
                  className="block text-gray-700 hover:text-blue-600 py-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Panel
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-red-600 hover:text-red-700 py-2 font-medium"
                >
                  Salir
                </button>
              </>
            ) : (
              <div className="space-y-2 pt-4">
                <Link
                  href="/login"
                  className="block text-center text-gray-700 border-2 border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Iniciar Sesión
                </Link>
                <Link
                  href="/register"
                  className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Registrarse
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}