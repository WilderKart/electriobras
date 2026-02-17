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
  title: 'ELECTRIOBRAS S.A.S | Servicios Eléctricos y Adecuaciones Civiles',
  description: 'Empresa especializada en proyectos eléctricos y adecuaciones civiles, orientada al sector empresarial y constructor en Colombia.',
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
