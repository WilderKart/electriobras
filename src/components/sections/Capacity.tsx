'use client';

import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function Counter({
    value,
    label,
    suffix = "+",
    prefix = ""
}: {
    value: number | string;
    label: string;
    suffix?: string;
    prefix?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const displayValue = useTransform(spring, (current) => Math.round(current));
    const isNumber = typeof value === 'number';

    useEffect(() => {
        if (isInView && isNumber) {
            spring.set(value as number);
        } else {
            spring.set(0);
        }
    }, [isInView, value, spring, isNumber]);

    return (
        <div ref={ref} className="text-center">
            <motion.div
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
            >
                <span>{prefix}</span>
                {isNumber ? (
                    <motion.span>{displayValue}</motion.span>
                ) : (
                    <span>{value}</span>
                )}
                <span>{suffix}</span>
            </motion.div>
            <div className="text-gray-400 font-medium uppercase tracking-wider text-xs md:text-sm leading-tight max-w-[240px] mx-auto">
                {label}
            </div>
        </div>
    );
}

export function Capacity() {
    return (
        <section className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-corporate-orange rounded-full blur-3xl mix-blend-screen" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900 rounded-full blur-3xl mix-blend-screen" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
                    <Counter value={150} label="Proyectos Ejecutados" />
                    <Counter
                        value={7}
                        prefix="+"
                        suffix=""
                        label="Años de Experiencia Soluciones integrales"
                    />
                    <Counter value={45} label="Profesionales Activos" />
                    <Counter
                        value={6}
                        prefix="+"
                        suffix=""
                        label="Etapas de Control Técnico"
                    />
                </div>
            </div>
        </section>
    );
}
