'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
    return (
        <section className="py-24 bg-gradient-to-r from-corporate-orange to-orange-500 relative overflow-hidden">
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10 text-center text-white">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                >
                    ¿Listo para iniciar su próximo proyecto?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
                >
                    Contáctenos hoy mismo para una consultoría técnica especializada y lleve su infraestructura al siguiente nivel.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Button size="lg" className="bg-white text-corporate-orange hover:bg-gray-100 text-lg px-10 py-6 h-auto shadow-2xl">
                        Solicitar Cotización Técnica
                        <ArrowRight className="ml-2 w-6 h-6" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
