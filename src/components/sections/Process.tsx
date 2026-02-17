'use client';

import { motion } from 'framer-motion';
import { ClipboardList, PenTool, HardHat, ShieldCheck, CheckCircle } from 'lucide-react';

const steps = [
    { icon: ClipboardList, title: 'Diagnóstico Técnico', desc: 'Evaluación detallada de requerimientos y viabilidad.' },
    { icon: PenTool, title: 'Planeación', desc: 'Diseño, cronograma y asignación de recursos.' },
    { icon: HardHat, title: 'Ejecución', desc: 'Implementación con personal certificado y equipos propios.' },
    { icon: ShieldCheck, title: 'Supervisión', desc: 'Control de calidad y cumplimiento normativo permanente.' },
    { icon: CheckCircle, title: 'Entrega Certificada', desc: 'Pruebas finales, documentación y puesta en marcha.' },
];

export function Process() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Nuestro Proceso de Trabajo</h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center mb-6 shadow-md group-hover:border-corporate-orange group-hover:scale-110 transition-all duration-300 relative z-10">
                                    <step.icon className="text-gray-400 group-hover:text-corporate-orange transition-colors" size={28} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-500 max-w-[150px]">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
