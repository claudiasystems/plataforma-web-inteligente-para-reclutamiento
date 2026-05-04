// Página de inicio (Home)

'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, Briefcase, TrendingUp } from 'lucide-react';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function Home() {
  // Características principales
  const features = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Gestión de Ofertas',
      description: 'Publica y gestiona ofertas de empleo de forma sencilla',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Candidatos Calificados',
      description: 'Encuentra los mejores talentos para tu empresa',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Analytics Inteligente',
      description: 'Análisis detallado del proceso de reclutamiento',
    },
  ];

  return (
    <>
      {/* Sección Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido izquierdo */}
          <div className="animate-slideInLeft">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Reclutamiento
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Inteligente
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Gestiona automaticamente tus procesos de reclutamiento y realiza entrevistas virtuales con nuestra plataforma inteligente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register?role=recruiter">
                <Button size="lg">
                  Para Reclutadores
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/register?role=candidate">
                <Button variant="outline" size="lg">
                  Para Candidatos
                </Button>
              </Link>
            </div>
          </div>

          {/* Ilustración derecha */}
          <div className="animate-slideInRight flex justify-center">
            <div className="w-full h-96 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center">
                <Briefcase size={100} className="mx-auto text-blue-600 mb-4" />
                <p className="text-gray-600 font-semibold">Ilustración Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de características */}
      <section className="bg-white py-20 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            ¿Por qué elegir RecluteApp?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} hoverable>
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de ventajas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Nuestras Ventajas</h2>

        <div className="space-y-4">
          {[
            'Interfaz intuitiva y fácil de usar',
            'Proceso de postulación rápido y sencillo',
            'Notificaciones en tiempo real',
            'Gestión centralizada de candidatos',
            'Análisis de datos para tomar mejores decisiones',
          ].map((advantage, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
              <span className="text-lg text-gray-700 font-medium">{advantage}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-20 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Comienza tu transformación en Reclutamiento Hoy
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Únete a cientos de empresas que ya utilizan RecluteApp
          </p>
          <Link href="/register">
            <Button variant="secondary" size="lg">
              Registrarse Gratis
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}