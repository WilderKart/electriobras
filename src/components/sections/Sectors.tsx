'use client';

import { motion } from 'framer-motion';
import { Building2, Factory, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sectors = [
    {
        id: 1,
        title: 'Constructoras',
        icon: <Building2 className="w-12 h-12 mb-4 text-corporate-orange" />,
        description: 'Instalaciones eléctricas completas para proyectos residenciales y comerciales.',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 2,
        title: 'Industrias y Plantas',
        icon: <Factory className="w-12 h-12 mb-4 text-corporate-orange" />,
        description: 'Mantenimiento y montaje de redes de alta complejidad para el sector industrial.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 3,
        title: 'Empresas Corporativas',
        icon: <Briefcase className="w-12 h-12 mb-4 text-corporate-orange" />,
        description: 'Adecuaciones civiles y eléctricas para oficinas y centros empresariales.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    },
];

export function Sectors() {
    return (
        <section id="sectors" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Sectores que <span className="text-corporate-orange">Atendemos</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        Soluciones especializadas adaptadas a las necesidades específicas de cada industria.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sectors.map((sector, index) => (
                        <motion.div
                            key={sector.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer border border-gray-100"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/20 transition-colors z-10" />
                                <img
                                    src={sector.image}
                                    alt={sector.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-4 left-4 z-20 text-white font-bold text-xl">
                                    {sector.title}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="mb-4">{sector.icon}</div>
                                <p className="text-gray-600 mb-6">{sector.description}</p>
                                <Button variant="link" className="px-0 text-corporate-orange hover:text-orange-700 font-semibold group-hover:translate-x-2 transition-transform">
                                    Ver Soluciones &rarr;
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
