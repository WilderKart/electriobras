'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Factory, Briefcase, Zap } from 'lucide-react';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        title: "Construcción",
        subtitle: "Sector Primario",
        text: "Aliados estratégicos de empresas en Cali. Realizamos adecuaciones, remodelaciones y obras civiles con entrega técnica certificada.",
        image: "/sectores/construccion.png",
        icon: <Building2 className="w-6 h-6 text-white" />
    },
    {
        id: 2,
        title: "Industrial",
        subtitle: "Potencia y Continuidad",
        text: "Mantenimiento especializado para plantas industriales. Garantizamos operatividad bajo normas de Seguridad y Salud en el Trabajo.",
        image: "/sectores/industrial.jpeg",
        icon: <Factory className="w-6 h-6 text-white" />
    },
    {
        id: 3,
        title: "Inmobiliario",
        subtitle: "Gestión de Activos",
        text: "Mantenimiento preventivo y adecuaciones locativas para edificios, centros empresariales.",
        image: "/sectores/inmobiliario.jpeg",
        icon: <Briefcase className="w-6 h-6 text-white" />
    },
    {
        id: 4,
        title: "Comercial",
        subtitle: "Espacios de Impacto",
        text: "Adecuaciones eléctricas y civiles para locales comerciales y centros de gran concurrencia.",
        image: "/sectores/comercial.jpeg",
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
        <section id="sectors" className="relative h-screen w-full overflow-hidden bg-black text-white">

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
                                className="text-3xl sm:text-4xl md:text-7xl font-bold leading-tight text-white mb-4 md:mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                {slides[currentIndex].title}
                            </motion.h2>

                            <motion.p
                                className="text-base md:text-xl text-gray-300 leading-relaxed border-l-4 border-corporate-orange pl-4 md:pl-6 my-4 md:my-6 pr-2"
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
