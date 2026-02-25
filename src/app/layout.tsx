import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Electriobras SAS | Ingeniería Eléctrica y Obras Civiles en Cali',
  description: 'Expertos en mantenimiento eléctrico, civil y metalmecánico en Cali y el Valle del Cauca. Garantizamos continuidad operativa y seguridad en cada proyecto.',
  keywords: ['Ingeniería Eléctrica Cali', 'Obras Civiles Cali', 'Mantenimiento Industrial Valle del Cauca', 'Electriobras SAS', 'Seguridad y Salud en el Trabajo', 'Instalaciones eléctricas industriales'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="antialiased bg-gray-50 text-gray-900 font-sans">
        <Navbar />
        <main className="min-h-screen pt-0 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
