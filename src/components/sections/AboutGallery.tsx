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
        height: 'h-64',
        className: 'col-span-1'
    },
    {
        src: 'https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=600&auto=format&fit=crop',
        title: 'Cobertura Nacional',
        description: 'Proyectos en toda Colombia',
        height: 'h-64',
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
        height: 'h-64',
        className: 'col-span-1'
    },
    {
        src: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=600&auto=format&fit=crop',
        title: 'Capital Humano',
        description: 'Expertos certificados',
        height: 'h-64',
        className: 'col-span-1'
    }
];

const GalleryCard = ({ image, index, priority = false }: { image: typeof galleryImages[0], index: number, priority?: boolean }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`relative rounded-2xl overflow-hidden shadow-lg group w-full ${image.height}`}
    >
        <Image
            src={image.src}
            alt={image.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white text-lg font-bold group-hover:text-corporate-orange transition-colors duration-300">{image.title}</h3>
            <p className="text-gray-200 text-xs">{image.description}</p>
        </div>
    </motion.div>
);

export function AboutGallery() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effects removed for perfect alignment
    const y1 = 0;
    const y2 = 0;
    const y3 = 0;

    return (
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
            {/* Column 1 */}
            <motion.div className="flex flex-col gap-4">
                <GalleryCard image={galleryImages[0]} index={0} priority />
                <GalleryCard image={galleryImages[1]} index={1} />

                {/* Mobile Only: Item 4 (Seguridad) moves here */}
                <div className="block md:hidden">
                    <GalleryCard image={galleryImages[4]} index={4} />
                </div>
            </motion.div>

            {/* Column 2 */}
            <motion.div className="flex flex-col gap-4">
                <GalleryCard image={galleryImages[2]} index={2} />
                <GalleryCard image={galleryImages[3]} index={3} />

                {/* Mobile Only: Item 5 (Capital Humano) moves here */}
                <div className="block md:hidden">
                    <GalleryCard image={galleryImages[5]} index={5} />
                </div>
            </motion.div>

            {/* Column 3 - Desktop Only */}
            <motion.div className="hidden md:flex flex-col gap-4">
                <GalleryCard image={galleryImages[4]} index={4} />
                <GalleryCard image={galleryImages[5]} index={5} />
            </motion.div>
        </div>
    );
}
