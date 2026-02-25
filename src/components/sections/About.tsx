'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';





export function About() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-corporate-blue/5 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-corporate-orange/5 rounded-full blur-3xl opacity-60" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Text Column - Staggered Container */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        {/* Subtitle */}
                        <motion.div variants={itemVariants} className="mb-4">
                            <div className="flex items-center gap-2">
                                <span className="text-corporate-orange font-bold tracking-[0.2em] text-sm uppercase">Quiénes Somos</span>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: 40 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="h-[2px] bg-corporate-orange"
                                />
                            </div>
                        </motion.div>

                        {/* Title */}
                        <motion.div variants={itemVariants} className="mb-8">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-corporate-blue leading-[1.1]">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-corporate-orange to-orange-500">
                                    Excelencia en Ingeniería
                                </span> <br />
                                y Adecuaciones Civiles
                            </h2>
                        </motion.div>

                        {/* Description Text */}
                        <motion.div variants={itemVariants} className="text-gray-600 space-y-6 mb-10 max-w-xl text-lg leading-relaxed">
                            <p>
                                <strong className="text-corporate-orange">Electriobras SAS</strong> es una empresa referente en servicios técnicos especializados, enfocada en brindar soluciones integrales de mantenimiento eléctrico, civil y metalmecánico en Cali y todo el Valle del Cauca.
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-bold text-corporate-blue border-l-4 border-corporate-orange pl-4 mb-2">Nuestra Misión</h4>
                                    <p className="text-base">Brindar servicios integrales de mantenimiento con altos estándares de calidad, seguridad y cumplimiento, aportando soluciones eficientes que impulsen el crecimiento sostenible de nuestros clientes.</p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-corporate-blue border-l-4 border-corporate-orange pl-4 mb-2">Nuestra Visión</h4>
                                    <p className="text-base">Ser una empresa referente a nivel nacional, reconocida por su profesionalismo, innovación y solidez, consolidando equipos de alto rendimiento y estabilidad a largo plazo.</p>
                                </div>
                            </div>

                            <div className="pt-4">
                                <h4 className="font-bold text-corporate-blue mb-4">Valores que nos definen:</h4>
                                <div className="grid grid-cols-2 gap-y-2 text-base">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-corporate-orange" />
                                        <span>Responsabilidad</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-corporate-orange" />
                                        <span>Calidad</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-corporate-orange" />
                                        <span>Integridad</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-corporate-orange" />
                                        <span>Seguridad</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-corporate-orange" />
                                        <span>Compromiso</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-corporate-orange" />
                                        <span>Mejora Continua</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-base italic pt-4">
                                “No somos solo ejecutores, somos aliados técnicos. Garantizamos continuidad operativa con altos estándares de Seguridad y Salud en el Trabajo.”
                            </p>
                        </motion.div>



                        {/* Experience Block removed from here */}

                    </motion.div>

                    {/* Image Column - Principal Image */}
                    <motion.div
                        variants={itemVariants}
                        className="relative h-full w-full min-h-[400px] lg:min-h-[600px]"
                    >
                        <Image
                            src="/quienes_somos/quienes_somos.png"
                            alt="Equipo Electriobras"
                            fill
                            className="object-contain transition-transform duration-700 hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        {/* Geometric Accent */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="absolute -bottom-12 -right-12 w-48 h-48 bg-corporate-orange rounded-full blur-[80px] opacity-15 -z-10"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
