'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Will need to create Input or just style standard ones
import { Textarea } from '@/components/ui/textarea'; // Same for Textarea
import { Send } from 'lucide-react';

export function Contact() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const onSubmit = async (data: any) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitStatus('success');
                reset(); // Limpia el formulario
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error al enviar:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="lg:col-span-2 bg-gray-50 p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 space-y-6"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                                        placeholder="(602) 000 0000"
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
                                    <option value="instalacion_electrica">Sistemas Eléctricos</option>
                                    <option value="adecuacion_civil">Obras Civiles</option>
                                    <option value="mantenimiento">Mantenimiento Preventivo / Correctivo</option>
                                    <option value="soldadura">Soldadura y Estructuras</option>
                                    <option value="emergencia">Atención de Emergencia</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Mensaje</label>
                                <textarea
                                    {...register('message', { required: 'El mensaje es obligatorio' })}
                                    className="w-full h-32 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-corporate-orange focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="Describa brevemente su requerimiento..."
                                />
                                {errors.message && <span className="text-red-500 text-xs">{(errors.message as any).message}</span>}
                            </div>

                            <div className="flex items-start gap-3 py-2">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    {...register('privacy', { required: 'Debe aceptar la política de privacidad' })}
                                    className="mt-1 w-4 h-4 rounded border-gray-300 text-corporate-orange focus:ring-corporate-orange cursor-pointer"
                                />
                                <label htmlFor="privacy" className="text-sm text-gray-600 cursor-pointer">
                                    Autorizo el tratamiento de mis datos personales conforme a la{' '}
                                    <Link href="/privacidad" className="text-corporate-orange underline hover:text-orange-600">
                                        Política de Privacidad
                                    </Link>.
                                </label>
                            </div>
                            {errors.privacy && <p className="text-red-500 text-xs mt-[-10px]">{(errors.privacy as any).message}</p>}

                            <div className="space-y-4">
                                {submitStatus === 'success' && (
                                    <div className="p-4 bg-green-50 text-green-700 text-sm rounded-lg border border-green-200">
                                        ¡Su mensaje ha sido enviado correctamente! Nos pondremos en contacto pronto.
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="p-4 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200">
                                        Hubo un error al enviar el mensaje. Por favor intente más tarde o contáctenos vía WhatsApp.
                                    </div>
                                )}
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isSubmitting}
                                    className="w-full md:w-auto min-w-[200px] h-12 text-base transition-all"
                                >
                                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                                    {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
                                </Button>
                                <p className="text-[10px] text-gray-500 leading-tight">
                                    Electriobras S.A.S. tratará sus datos conforme a la Ley 1581 de 2012.
                                    Consulte nuestra <Link href="/privacidad" className="underline">Política de Privacidad</Link>.
                                </p>
                            </div>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="space-y-8"
                    >
                        <div>
                            <h4 className="text-corporate-orange font-bold text-sm tracking-widest uppercase mb-4">Información Legal</h4>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-semibold">Razón Social</p>
                                    <p className="text-gray-900 font-medium">Electriobras SAS</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-semibold">NIT</p>
                                    <p className="text-gray-900 font-medium">901255417-0</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-corporate-orange font-bold text-sm tracking-widest uppercase mb-4">Contacto Institucional</h4>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-semibold">Dirección Física</p>
                                    <p className="text-gray-900 font-medium">AV 2N #74BN31, Cali - Colombia</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-semibold">Teléfono Fijo</p>
                                    <p className="text-gray-900 font-medium">(602) 4022167</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-semibold">Correo Corporativo</p>
                                    <p className="text-gray-900 font-medium">gerencia@electriobrassas.com</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-corporate-orange font-bold text-sm tracking-widest uppercase mb-4">Horario de Atención</h4>
                            <p className="text-gray-900 font-medium leading-relaxed">
                                Lunes a Viernes <br />
                                8:00 AM – 5:00 PM
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
