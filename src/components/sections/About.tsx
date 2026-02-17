'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const features = [
    'Cumplimiento normativo RETIE',
    'Supervisión técnica especializada',
    'Gestión integral de proyectos',
    'Cobertura nacional',
];

export function About() {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div className="text-corporate-orange font-semibold tracking-wider text-sm mb-4 uppercase">
                            Quiénes Somos
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Excelencia en Ingeniería <br />
                            <span className="text-gray-500">y Construcción Civil</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            ELECTRIOBRAS S.A.S es una empresa especializada en proyectos eléctricos y adecuaciones civiles,
                            orientada al sector empresarial y constructor en Colombia. Ejecutamos obras con supervisión técnica,
                            cumplimiento normativo y altos estándares de calidad.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="text-corporate-orange h-6 w-6 shrink-0" />
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

                            <Image
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop"
                                alt="Ingeniero supervisando obra eléctrica"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Floating Stat Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="absolute bottom-8 left-8 z-20 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-xs border-l-4 border-corporate-orange"
                            >
                                <p className="text-gray-900 font-bold text-lg mb-1">Experiencia Comprobada</p>
                                <p className="text-gray-600 text-sm">Más de 10 años liderando proyectos de infraestructura en Colombia.</p>
                            </motion.div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-corporate-orange/10 rounded-full blur-3xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
