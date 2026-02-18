'use client';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Video Background Placeholder */}
            <div className="absolute inset-0 z-0 bg-gray-900">
                <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
                {/* Replace with actual video component later */}
                <Image
                    src="/hero/hero.png"
                    alt="Ingeniería Eléctrica y Civil"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
            </div>

            <div className="container relative z-20 px-6 mx-auto text-center md:text-left">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="max-w-4xl"
                >
                    <motion.div variants={itemVariants} className="mb-4">
                        <span className="inline-block py-1 px-3 rounded-full bg-corporate-orange/20 text-corporate-orange text-sm font-semibold tracking-wide border border-corporate-orange/30 backdrop-blur-sm">
                            LÍDERES EN INGENIERÍA ELÉCTRICA
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
                    >
                        Ingeniería Aplicada en <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-orange to-orange-400">
                            Instalaciones Eléctricas y Obras Civiles Especializadas
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
                    >
                        Ejecución de proyectos eléctricos y adecuaciones civiles para constructoras, industrias y empresas en toda Colombia con altos estándares de calidad y seguridad.
                    </motion.p>

                    import Link from 'next/link';
                    // ... previous imports

                    // ... function Hero
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link href="#contact">
                            <Button size="lg" className="text-base px-8 h-14">
                                Solicitar Cotización Técnica
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="#portfolio">
                            <Button variant="outline" size="lg" className="text-base px-8 h-14 border-white text-white hover:bg-white hover:text-gray-900">
                                Ver Proyectos Recientes
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{ delay: 2, duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
            </motion.div>
        </section>
    );
}
