'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Factory, Briefcase, Zap } from 'lucide-react';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        title: "Constructoras",
        subtitle: "Aliados Estratégicos",
        text: "Instalaciones eléctricas completas para proyectos residenciales y comerciales. Desde el diseño hasta la certificación RETIE.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop",
        icon: <Building2 className="w-6 h-6 text-white" />
    },
    {
        id: 2,
        title: "Industrias",
        subtitle: "Potencia Continua",
        text: "Mantenimiento y montaje de redes de alta complejidad para el sector industrial. Garantizamos continuidad operativa.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop",
        icon: <Factory className="w-6 h-6 text-white" />
    },
    {
        id: 3,
        title: "Corporativo",
        subtitle: "Espacios Eficientes",
        text: "Adecuaciones civiles y eléctricas para oficinas y centros empresariales modernos. Funcionalidad y estética.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop",
        icon: <Briefcase className="w-6 h-6 text-white" />
    },
    {
        id: 4,
        title: "Infraestructura",
        subtitle: "Desarrollo Urbano",
        text: "Alumbrado público y redes de distribución que conectan comunidades. Calidad de vida a través de la energía.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop",
        icon: <Zap className="w-6 h-6 text-white" />
    }
];

export function Sectors() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Autoplay configuration
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
    }, []);

    const handleThumbnailClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black text-white">

            {/* Background Image Layer with Crossfade */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode='popLayout'>
                    <motion.div
                        key={slides[currentIndex].id}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={slides[currentIndex].image}
                            alt={slides[currentIndex].title}
                            fill
                            className="object-cover opacity-60"
                            priority
                        />
                        {/* Vignette Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Content Content Layer */}
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
                <div className="max-w-xl">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="space-y-4"
                        >
                            <motion.span
                                className="text-corporate-orange font-bold tracking-[0.2em] text-sm uppercase block"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {slides[currentIndex].subtitle}
                            </motion.span>

                            <motion.h2
                                className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                {slides[currentIndex].title}
                            </motion.h2>

                            <motion.p
                                className="text-lg md:text-xl text-gray-300 leading-relaxed border-l-4 border-corporate-orange pl-6 my-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                {slides[currentIndex].text}
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Thumbnails Navigation Layer */}
            <div className="absolute bottom-12 right-6 md:right-12 z-20 flex gap-4 md:gap-6 overflow-x-auto pb-8 px-4 md:px-2 max-w-full scrollbar-none">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        onClick={() => handleThumbnailClick(index)}
                        className={`
                            relative w-24 h-28 md:w-32 md:h-36 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-out flex-shrink-0 group
                            ${index === currentIndex
                                ? 'scale-110 shadow-xl opacity-100 z-10 translate-y-[-10px]'
                                : 'opacity-50 hover:opacity-80 hover:scale-105 grayscale hover:grayscale-0'
                            }
                        `}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover"
                        />
                        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${index === currentIndex ? 'opacity-0' : 'opacity-60 group-hover:opacity-20'}`} />

                        {/* Thumbnail Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/90 to-transparent">
                            <p className="text-white text-[10px] md:text-xs font-bold text-center uppercase tracking-wider">
                                {slide.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full z-20">
                <motion.div
                    key={currentIndex}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="h-full bg-corporate-orange"
                />
            </div>

        </section>
    );
}
