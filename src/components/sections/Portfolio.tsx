'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import Image from 'next/image';

const projects = [
    { id: 1, title: 'Almacenes Corona', category: 'Mantenimiento Técnico', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
    { id: 2, title: 'Celsia', category: 'Instalaciones Eléctricas', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop' },
    { id: 3, title: 'Kimberly-Clark', category: 'Obras Civiles', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop' },
    { id: 4, title: 'Cerámica Italia', category: 'Sistemas Eléctricos', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop' },
    { id: 5, title: 'Constructora El Cairo', category: 'Adecuaciones Locativas', image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?q=80&w=800&auto=format&fit=crop' },
    { id: 6, title: 'Mantenimiento Preventivo', category: 'Continuidad Operativa', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop' },
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-corporate-orange font-semibold tracking-wider text-sm uppercase">PROYECTOS RECIENTES</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Nuestra Huella en Colombia</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                                <span className="text-corporate-orange text-sm font-medium mb-1">
                                    {project.category}
                                </span>
                                <h3 className="text-white text-xl font-bold">
                                    {project.title}
                                </h3>
                                {/* <div className="absolute top-4 right-4 bg-white text-gray-900 rounded-full p-2 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300">
                                    <Plus size={20} />
                                </div> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
