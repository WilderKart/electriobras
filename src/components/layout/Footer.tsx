import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white tracking-tighter">
                            <span className="text-corporate-orange">ELECTRI</span>OBRAS
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Soluciones eléctricas integrales y adecuaciones civiles de alto nivel para el sector corporativo, industrial y constructor en Colombia.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-corporate-orange transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-corporate-orange transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:text-corporate-orange transition-colors"><Linkedin size={20} /></Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Nuestros Servicios</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="hover:text-corporate-orange transition-colors">Instalaciones Eléctricas</Link></li>
                            <li><Link href="#" className="hover:text-corporate-orange transition-colors">Adecuaciones Civiles</Link></li>
                            <li><Link href="#" className="hover:text-corporate-orange transition-colors">Subestaciones</Link></li>
                            <li><Link href="#" className="hover:text-corporate-orange transition-colors">Mantenimiento Técnico</Link></li>
                            <li><Link href="#" className="hover:text-corporate-orange transition-colors">Canalizaciones</Link></li>
                        </ul>
                    </div>

                    {/* Sectors */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Sectores</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="hover:text-corporate-orange transition-colors">Constructoras</Link></li>
                            <li><Link href="#" className="hover:text-corporate-orange transition-colors">Industrias y Plantas</Link></li>
                            <li><Link href="#" className="hover:text-corporate-orange transition-colors">Empresas Privadas</Link></li>
                            <li><Link href="#" className="hover:text-corporate-orange transition-colors">Centros Comerciales</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Contacto</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-corporate-orange shrink-0 mt-1" size={18} />
                                <span>Calle 123 #45-67, Oficina 809<br />Bogotá D.C., Colombia</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-corporate-orange shrink-0" size={18} />
                                <span>+57 (300) 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-corporate-orange shrink-0" size={18} />
                                <span>proyectos@electriobras.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} ELECTRIOBRAS S.A.S. Todos los derechos reservados.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
                        <Link href="#" className="hover:text-white transition-colors">Términos y Condiciones</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
