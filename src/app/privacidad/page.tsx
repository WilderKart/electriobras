'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Link
                        href="/"
                        className="inline-flex items-center text-corporate-orange font-medium hover:gap-2 transition-all gap-1 mb-8"
                    >
                        <ArrowLeft size={20} />
                        Volver al inicio
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="prose prose-slate max-w-none"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <ShieldCheck className="text-corporate-orange w-12 h-12" />
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 m-0">
                                POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES </h1>
                        </div>
                        <p className="text-corporate-orange font-bold text-xl mb-6">
                            Electriobras S.A.S.
                        </p>
                        <p className="text-gray-500 text-sm mb-12">
                            En cumplimiento de la Ley 1581 de 2012, Decreto 1377 de 2013 y normas concordantes.
                        </p>

                        <div className="space-y-12 text-gray-700 leading-relaxed">
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-corporate-orange pl-4">
                                    1. RESPONSABLE DEL TRATAMIENTO
                                </h2>
                                <ul className="list-none space-y-2 mt-4">
                                    <li><strong>Electriobras S.A.S.</strong></li>
                                    <li><strong>NIT:</strong> 901255417-0</li>
                                    <li><strong>Dirección:</strong> AV 2N #74BN31, Cali, Valle del Cauca, Colombia</li>
                                    <li><strong>Correo:</strong> gerencia@electriobrassas.com</li>
                                    <li><strong>Teléfono:</strong> 6024022167</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-corporate-orange pl-4">
                                    2. DATOS QUE SE RECOLECTAN
                                </h2>
                                <p>A través del sitio web y formulario de contacto pueden recolectarse:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-corporate-orange" />
                                        <span>Nombre completo</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-corporate-orange" />
                                        <span>Cargo y Empresa</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-corporate-orange" />
                                        <span>NIT</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-corporate-orange" />
                                        <span>Correo corporativo</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-corporate-orange" />
                                        <span>Teléfono</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-corporate-orange" />
                                        <span>Información técnica</span>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-corporate-orange pl-4">
                                    3. TRATAMIENTO DE DATOS SENSIBLES EMPRESARIALES
                                </h2>
                                <p>
                                    Dado el enfoque B2B, Electriobras podrá recibir información técnica especializada, planos estructurales, documentación estratégica y presupuestos internos. Esta información será tratada bajo criterios de estricta confidencialidad empresarial.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-corporate-orange pl-4">
                                    4. FINALIDADES DEL TRATAMIENTO
                                </h2>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Contacto comercial y elaboración de cotizaciones.</li>
                                    <li>Evaluación técnica de proyectos.</li>
                                    <li>Formalización contractual y facturación.</li>
                                    <li>Atención de solicitudes o emergencias técnicas.</li>
                                    <li>Control de calidad y trazabilidad.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-corporate-orange pl-4">
                                    5. AUTORIZACIÓN
                                </h2>
                                <p>
                                    Al enviar información mediante el formulario, el titular autoriza de manera libre, previa, expresa e informada el tratamiento de sus datos conforme a esta política.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-corporate-orange pl-4">
                                    6. DERECHOS DEL TITULAR
                                </h2>
                                <p>
                                    El titular podrá conocer sus datos, rectificarlos, actualizarlos o solicitar su supresión. Las solicitudes deberán enviarse al correo <strong>gerencia@electriobrassas.com</strong>.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-corporate-orange pl-4">
                                    7. MEDIDAS DE SEGURIDAD
                                </h2>
                                <p>
                                    Electriobras implementa control de acceso restringido, protocolos de confidencialidad y medidas técnicas razonables de protección digital.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-corporate-orange pl-4">
                                    8. MODIFICACIONES
                                </h2>
                                <p>
                                    La versión vigente de esta política será publicada siempre en este sitio web.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
