'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Will need to create Input or just style standard ones
import { Textarea } from '@/components/ui/textarea'; // Same for Textarea
import { Send } from 'lucide-react';

export function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        // Handle submission logic (e.g., API call)
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-corporate-orange font-semibold tracking-wider text-sm uppercase">CONTÁCTENOS</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Hablemos de su Proyecto</h2>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Nombre Completo</label>
                            <input
                                {...register('name', { required: 'El nombre es obligatorio' })}
                                className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-corporate-orange focus:border-transparent outline-none transition-all"
                                placeholder="Juan Pérez"
                            />
                            {errors.name && <span className="text-red-500 text-xs">{(errors.name as any).message}</span>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Empresa</label>
                            <input
                                {...register('company', { required: 'La empresa es obligatoria' })}
                                className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-corporate-orange focus:border-transparent outline-none transition-all"
                                placeholder="Nombre de la empresa"
                            />
                            {errors.company && <span className="text-red-500 text-xs">{(errors.company as any).message}</span>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Correo Electrónico</label>
                            <input
                                {...register('email', {
                                    required: 'El correo es obligatorio',
                                    pattern: { value: /^\S+@\S+$/i, message: 'Correo inválido' }
                                })}
                                className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-corporate-orange focus:border-transparent outline-none transition-all"
                                placeholder="juan@empresa.com"
                            />
                            {errors.email && <span className="text-red-500 text-xs">{(errors.email as any).message}</span>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Teléfono</label>
                            <input
                                {...register('phone', { required: 'El teléfono es obligatorio' })}
                                className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-corporate-orange focus:border-transparent outline-none transition-all"
                                placeholder="+57 300 000 0000"
                            />
                            {errors.phone && <span className="text-red-500 text-xs">{(errors.phone as any).message}</span>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Tipo de Proyecto</label>
                        <select
                            {...register('projectType')}
                            className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-corporate-orange focus:border-transparent outline-none transition-all bg-white"
                        >
                            <option value="instalacion_electrica">Instalación Eléctrica</option>
                            <option value="adecuacion_civil">Adecuación Civil</option>
                            <option value="mantenimiento">Mantenimiento</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Mensaje</label>
                        <textarea
                            {...register('message', { required: 'El mensaje es obligatorio' })}
                            className="w-full h-32 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-corporate-orange focus:border-transparent outline-none transition-all resize-none"
                            placeholder="Describa brevemente su proyecto..."
                        />
                        {errors.message && <span className="text-red-500 text-xs">{(errors.message as any).message}</span>}
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto min-w-[200px] h-12 text-base">
                        Enviar Solicitud
                        <Send className="ml-2 w-4 h-4" />
                    </Button>
                </motion.form>
            </div>
        </section>
    );
}
