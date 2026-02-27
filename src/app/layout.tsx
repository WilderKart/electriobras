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
  openGraph: {
    title: 'Electriobras SAS | Ingeniería Eléctrica y Obras Civiles',
    description: 'Expertos en mantenimiento eléctrico, civil y metalmecánico en Cali y el Valle del Cauca.',
    url: 'https://electriobras.com',
    siteName: 'Electriobras SAS',
    images: [
      {
        url: '/logo/logoelectriobras-full.png', // Assuming a logo exists here or can be updated
        width: 1200,
        height: 630,
        alt: 'Electriobras SAS',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
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
