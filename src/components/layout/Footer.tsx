'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="relative block h-12 w-48 brightness-0 invert opacity-90 transition-transform hover:scale-105"
                            onClick={(e) => {
                                if (window.location.pathname === '/') {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }}
                        >
                            <Image
                                src="/logo/logo_electriobras.png"
                                alt="Electriobras SAS Logo"
                                fill
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Soluciones integrales de mantenimiento eléctrico, civil y metalmecánico con altos estándares de Seguridad y Salud en el Trabajo.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="hover:text-corporate-orange transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-corporate-orange transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:text-corporate-orange transition-colors"><Linkedin size={20} /></Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Nuestros Servicios</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/#services" className="hover:text-corporate-orange transition-colors">Sistemas Eléctricos</Link></li>
                            <li><Link href="/#services" className="hover:text-corporate-orange transition-colors">Obras Civiles</Link></li>
                            <li><Link href="/#services" className="hover:text-corporate-orange transition-colors">Mantenimiento Técnico</Link></li>
                            <li><Link href="/#services" className="hover:text-corporate-orange transition-colors">Estructuras y Soldadura</Link></li>
                            <li><Link href="/#services" className="hover:text-corporate-orange transition-colors">Cubiertas y Cortinas</Link></li>
                        </ul>
                    </div>

                    {/* Sectors */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Sectores</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/#sectors" className="hover:text-corporate-orange transition-colors">Construcción</Link></li>
                            <li><Link href="/#sectors" className="hover:text-corporate-orange transition-colors">Industrial</Link></li>
                            <li><Link href="/#sectors" className="hover:text-corporate-orange transition-colors">Inmobiliario</Link></li>
                            <li><Link href="/#sectors" className="hover:text-corporate-orange transition-colors">Comercial</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Contacto Institucional</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-corporate-orange shrink-0 mt-1" size={18} />
                                <span>AV 2N #74BN31<br />Cali, Valle del Cauca</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-corporate-orange shrink-0" size={18} />
                                <span>(602) 4022167 (Fijo)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-corporate-orange shrink-0" size={18} />
                                <span>gerencia@electriobrassas.com</span>
                            </li>
                            <li className="pt-2">
                                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">NIT</p>
                                <p className="text-white font-medium">901255417-0</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <div className="flex flex-col gap-1 text-center md:text-left">
                        <p>&copy; {new Date().getFullYear()} ELECTRIOBRAS S.A.S. Cali - Colombia.</p>
                        <p>
                            Diseño y desarrollo web por:{' '}
                            <a
                                href="https://technoultra.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-corporate-orange hover:text-orange-500 transition-colors font-medium"
                            >
                                Technoultra
                            </a>
                        </p>
                    </div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
                        <Link href="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
