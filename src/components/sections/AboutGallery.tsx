'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const galleryImages = [
    {
        src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop',
        title: 'Supervisión Técnica',
        description: 'Control de calidad especializado',
        height: 'h-64',
        className: 'col-span-1'
    },
    {
        src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop',
        title: 'Gestión Integral',
        description: 'De la planificación a la entrega',
        height: 'h-48',
        className: 'col-span-1'
    },
    {
        src: 'https://images.unsplash.com/photo-1581094794329-cd1096a7a5e6?q=80&w=600&auto=format&fit=crop',
        title: 'Cobertura Nacional',
        description: 'Proyectos en toda Colombia',
        height: 'h-56',
        className: 'col-span-1'
    },
    {
        src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop',
        title: 'Cumplimiento RETIE',
        description: 'Normativa y seguridad garantizada',
        height: 'h-64',
        className: 'col-span-1'
    },
    {
        src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop',
        title: 'Seguridad Industrial',
        description: 'Prioridad en cada obra',
        height: 'h-56',
        className: 'col-span-1'
    },
    {
        src: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=600&auto=format&fit=crop',
        title: 'Capital Humano',
        description: 'Expertos certificados',
        height: 'h-48',
        className: 'col-span-1'
    }
];

export function AboutGallery() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effects for different columns
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);

    return (
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
            {/* Column 1 */}
            <motion.div style={{ y: y1 }} className="flex flex-col gap-4">
                {/* 0: Supervisión */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-2xl overflow-hidden shadow-lg group h-64 w-full"
                >
                    <Image
                        src={galleryImages[0].src}
                        alt={galleryImages[0].title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                        <h3 className="text-white text-lg font-bold group-hover:text-corporate-orange transition-colors duration-300">{galleryImages[0].title}</h3>
                        <p className="text-gray-200 text-xs">{galleryImages[0].description}</p>
                    </div>
                </motion.div>
                {/* 1: Gestión */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative rounded-2xl overflow-hidden shadow-lg group h-48 w-full"
                >
                    <Image
                        src={galleryImages[1].src}
                        alt={galleryImages[1].title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                        <h3 className="text-white text-lg font-bold group-hover:text-corporate-orange transition-colors duration-300">{galleryImages[1].title}</h3>
                        <p className="text-gray-200 text-xs">{galleryImages[1].description}</p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Column 2 */}
            <motion.div style={{ y: y2 }} className="flex flex-col gap-4 mt-8 md:mt-0">
                {/* 2: Cobertura */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative rounded-2xl overflow-hidden shadow-lg group h-80 w-full"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop"
                        alt={galleryImages[2].title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                        <h3 className="text-white text-lg font-bold group-hover:text-corporate-orange transition-colors duration-300">{galleryImages[2].title}</h3>
                        <p className="text-gray-200 text-xs">{galleryImages[2].description}</p>
                    </div>
                </motion.div>
                {/* 3: RETIE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative rounded-2xl overflow-hidden shadow-lg group h-64 w-full"
                >
                    <Image
                        src={galleryImages[3].src}
                        alt={galleryImages[3].title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                        <h3 className="text-white text-lg font-bold group-hover:text-corporate-orange transition-colors duration-300">{galleryImages[3].title}</h3>
                        <p className="text-gray-200 text-xs">{galleryImages[3].description}</p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Column 3 - Hidden on mobile, visible on md+ */}
            <motion.div style={{ y: y3 }} className="hidden md:flex flex-col gap-4 mt-12">
                {/* 4: Seguridad */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative rounded-2xl overflow-hidden shadow-lg group h-56 w-full"
                >
                    <Image
                        src={galleryImages[4].src}
                        alt={galleryImages[4].title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                        <h3 className="text-white text-lg font-bold group-hover:text-corporate-orange transition-colors duration-300">{galleryImages[4].title}</h3>
                        <p className="text-gray-200 text-xs">{galleryImages[4].description}</p>
                    </div>
                </motion.div>
                {/* 5: Capital Humano */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="relative rounded-2xl overflow-hidden shadow-lg group h-48 w-full"
                >
                    <Image
                        src={galleryImages[5].src}
                        alt={galleryImages[5].title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                        <h3 className="text-white text-lg font-bold group-hover:text-corporate-orange transition-colors duration-300">{galleryImages[5].title}</h3>
                        <p className="text-gray-200 text-xs">{galleryImages[5].description}</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
