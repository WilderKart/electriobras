'use client';

import { motion } from 'framer-motion';
import { Zap, LayoutDashboard, Settings, ShieldCheck, PenTool, Cable } from 'lucide-react';

const services = [
    {
        icon: <Zap className="w-8 h-8 text-white" />,
        title: 'Instalaciones Eléctricas',
        description: 'Diseño y montaje de redes de media y baja tensión.',
    },
    {
        icon: <Cable className="w-8 h-8 text-white" />,
        title: 'Redes Empresariales',
        description: 'Cableado estructurado y certificación de puntos de red.',
    },
    {
        icon: <Settings className="w-8 h-8 text-white" />,
        title: 'Subestaciones',
        description: 'Mantenimiento preventivo y correctivo de transformadores.',
    },
    {
        icon: <LayoutDashboard className="w-8 h-8 text-white" />,
        title: 'Adecuaciones Civiles',
        description: 'Remodelaciones y obras civiles para oficinas y plantas.',
    },
    {
        icon: <PenTool className="w-8 h-8 text-white" />,
        title: 'Canalizaciones',
        description: 'Infraestructura subterránea y aérea normada.',
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-white" />,
        title: 'Mantenimiento',
        description: 'Planes de mantenimiento técnico especializado 24/7.',
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-corporate-orange font-semibold tracking-wider text-sm uppercase block mb-2">
                            Nuestros Servicios
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Soluciones Integrales <br /> para su Empresa
                        </h2>
                    </div>
                    <div className="max-w-md text-gray-600 pb-2">
                        Cubrimos todas las necesidades técnicas de su proyecto con personal certificado y equipos de última tecnología.
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                            className="p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-corporate-orange/30 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gray-900 flex items-center justify-center mb-6 group-hover:bg-corporate-orange transition-colors duration-300 shadow-lg">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-corporate-orange transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
