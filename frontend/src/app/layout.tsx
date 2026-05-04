// Layout principal de la aplicación

import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'RecluteApp - Plataforma de Reclutamiento Inteligente',
  description:
    'Gestión automatizada de procesos de reclutamiento y entrevistas virtuales para pequeñas y medianas empresas',
  viewport: 'width=device-width, initial-scale=1',
  keywords: ['reclutamiento', 'empleo', 'recursos humanos', 'entrevistas virtuales'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#0066cc" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-light text-gray-900 font-sans">
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}