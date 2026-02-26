'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
    {
        image: '/servicios/sistema_electrico.webp',
        title: 'Sistemas Eléctricos',
        description: 'Instalación y mantenimiento de sistemas eléctricos industriales y comerciales en Cali, bajo altos estándares de seguridad.',
    },
    {
        image: '/servicios/obra_civil.webp',
        title: 'Obras Civiles',
        description: 'Adecuaciones locativas, enchapes, obra gris y adecuación de bodegas para plantas industriales y locales comerciales en Cali.',
    },
    {
        image: '/servicios/mantenimiento.webp',
        title: 'Mantenimiento Técnico',
        description: 'Planes de mantenimiento industrial preventivo y correctivo para garantizar la continuidad operativa y seguridad de su empresa.',
    },
    {
        image: '/servicios/estructura_soldadura.webp',
        title: 'Estructuras y Soldadura',
        description: 'Fabricación y montaje de estructuras metálicas industriales con soldadores certificados y procesos de alta calidad.',
    },
    {
        image: '/servicios/cubiertas_cortinas.webp',
        title: 'Cubiertas y Cortinas',
        description: 'Instalación y reparación de cubiertas industriales y cortinas metálicas de seguridad para bodegas y sector comercial.',
    },
    {
        image: '/servicios/emergencia.webp',
        title: 'Emergencias y Respaldo',
        description: 'Respuesta inmediata ante emergencias industriales, con disponibilidad continua y diagnóstico técnico especializado.',
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
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-corporate-orange/20 cursor-pointer"
                        >
                            {/* Card Image Header */}
                            <div className="relative h-56 w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="absolute bottom-4 left-6">
                                    <div className="h-1 w-12 bg-corporate-orange rounded-full mb-2 group-hover:w-20 transition-all duration-300" />
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-corporate-orange transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-base">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
