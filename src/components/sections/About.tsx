'use client';

import { motion, Variants } from 'framer-motion';
import { AboutGallery } from './AboutGallery';





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
                        <motion.div variants={itemVariants} className="text-gray-600 space-y-4 mb-10 max-w-lg text-lg leading-relaxed">
                            <p>
                                ELECTRIOBRAS S.A.S es sinónimo de precisión y compromiso. Llevamos más de una década transformando ideas en infraestructura operativa para los sectores más exigentes de Colombia.
                            </p>
                            <p>
                                Nuestra metodología integra supervisión técnica rigurosa y gestión eficiente, asegurando que cada proyecto cumpla con los más altos estándares normativos y de calidad.
                            </p>
                        </motion.div>



                        {/* Experience Block removed from here */}

                    </motion.div>

                    {/* Image Column - Gallery */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative h-full w-full min-h-[500px]"
                    >
                        <AboutGallery />

                        {/* Geometric Accent */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="absolute -bottom-8 -left-8 w-40 h-40 bg-corporate-orange rounded-full blur-[60px] opacity-20 -z-10"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
