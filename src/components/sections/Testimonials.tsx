'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const clients = [
    { name: 'Almacenes Corona', logo: '/logos-clientes/corona.jpg' },
    { name: 'Celsia', logo: '/logos-clientes/celsia.webp' },
    { name: 'Cerámica Italia', logo: '/logos-clientes/ceramica_italia.jpg' },
    { name: 'Kimberly Clark', logo: '/logos-clientes/kimberly-clark.jpg' },
    { name: 'Constructora Cairo', logo: '/logos-clientes/contructora_cairo.png' },
    { name: 'Almacenes Corona', logo: '/logos-clientes/corona.jpg' }, // Repeat for seamless loop
    { name: 'Celsia', logo: '/logos-clientes/celsia.webp' },
    { name: 'Cerámica Italia', logo: '/logos-clientes/ceramica_italia.jpg' },
    { name: 'Kimberly Clark', logo: '/logos-clientes/kimberly-clark.jpg' },
    { name: 'Constructora Cairo', logo: '/logos-clientes/contructora_cairo.png' },
];

const testimonials = [
    {
        text: "La ejecución técnica de Electriobras en nuestra planta principal superó las expectativas. Su cumplimiento normativo y rigurosidad en Seguridad y Salud en el Trabajo son impecables.",
        author: "Ing. Ricardo Méndez",
        role: "Director de Infraestructura",
        company: "Grupo Argos",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
        text: "Un aliado estratégico para nuestras expansiones. La capacidad de gestión integral y la calidad de sus profesionales nos brindan total confianza en cada proyecto.",
        author: "Arq. Valery Montoya",
        role: "Gerente de Proyectos",
        company: "Celsia",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
        text: "Eficiencia y profesionalismo. Han demostrado un manejo experto en instalaciones complejas, cumpliendo siempre con los cronogramas estipulados.",
        author: "Carlos E. Restrepo",
        role: "Jefe de Mantenimiento",
        company: "Tecnoquímicas",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    }
];

export function Testimonials() {
    return (
        <section className="py-28 relative overflow-hidden text-white w-full">
            {/* Dark Corporate Background */}
            <div className="absolute inset-0 bg-[#0B1C2D]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2D] to-[#071420]" />
                <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(255,107,0,0.08),transparent_50%)]" />
                {/* Industrial Texture (Subtle Noise/Dust) - Simulated with CSS */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-3 mb-4"
                    >
                        <div className="h-[1px] w-8 bg-corporate-orange" />
                        <span className="text-corporate-orange text-sm font-semibold tracking-[0.2em] uppercase">Confianza Corporativa</span>
                        <div className="h-[1px] w-8 bg-corporate-orange" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                    >
                        Empresas que confían en <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">nuestra experiencia</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#9BA7B4] text-lg font-light"
                    >
                        Proyectos ejecutados con estándares técnicos rigurosos y cumplimiento normativo certificado.
                    </motion.p>
                </div>

                {/* Client Logos (Marquee) */}
                <div className="relative w-full overflow-hidden mb-24 mask-gradient">
                    {/* Gradient Masks for smooth fade edges */}
                    <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#0B1C2D] to-transparent pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#0B1C2D] to-transparent pointer-events-none" />

                    <motion.div
                        className="flex gap-16 md:gap-24 min-w-max items-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    >
                        {[...clients, ...clients].map((client, idx) => ( // Duplicate list again for extra length
                            <div key={idx} className="relative h-24 w-48 md:w-56 transition-all duration-300 hover:scale-110">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            whileHover={{ y: -6 }}
                            className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-gradient-to-br from-white to-gray-100 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-corporate-orange/10"
                        >
                            <div className="p-8 flex-grow">
                                <div className="mb-6">
                                    <Quote className="w-10 h-10 text-corporate-orange opacity-80" />
                                </div>

                                <p className="text-gray-700 text-lg leading-relaxed font-medium italic mb-2">
                                    "{item.text}"
                                </p>
                            </div>

                            <div className="bg-[#071420] p-6 flex items-center gap-4 border-t border-gray-800 mt-auto">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-corporate-orange/50">
                                    <Image src={item.image} alt={item.author} fill className="object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">
                                        {item.author}
                                    </h4>
                                    <p className="text-gray-400 text-xs uppercase tracking-wide">
                                        {item.role}
                                    </p>
                                    <p className="text-corporate-orange text-xs font-semibold mt-0.5">
                                        {item.company}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
