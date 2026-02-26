'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
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
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            TÉRMINOS Y CONDICIONES DE USO </h1>
                        <p className="text-corporate-orange font-bold text-xl mb-12">
                            Electriobras S.A.S.
                        </p>

                        <div className="space-y-12 text-gray-700 leading-relaxed">
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-corporate-orange pl-4">
                                    1. IDENTIFICACIÓN DEL TITULAR DEL SITIO WEB
                                </h2>
                                <p>El presente sitio web es operado por:</p>
                                <ul className="list-none space-y-2 mt-4">
                                    <li><strong>Electriobras S.A.S.</strong></li>
                                    <li><strong>NIT:</strong> 901255417-0</li>
                                    <li><strong>Domicilio:</strong> AV 2N #74BN31, Cali, Valle del Cauca, Colombia</li>
                                    <li><strong>Teléfono:</strong> 6024022167</li>
                                    <li><strong>WhatsApp:</strong> +57 314 878 5562</li>
                                    <li><strong>Correo corporativo:</strong> gerencia@electriobrassas.com</li>
                                    <li><strong>Horario de atención:</strong> Lunes a Viernes, 8:00 AM – 5:00 PM</li>
                                </ul>
                                <p className="mt-4 italic">En adelante, “Electriobras”.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-corporate-orange pl-4">
                                    2. NATURALEZA DEL SITIO WEB
                                </h2>
                                <p>El sitio web tiene carácter informativo y corporativo. Su finalidad es:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Presentar los servicios técnicos especializados en mantenimiento eléctrico, civil y metalmecánico.</li>
                                    <li>Facilitar el contacto empresarial.</li>
                                    <li>Dar a conocer el perfil institucional y experiencia de la compañía.</li>
                                </ul>
                                <p className="mt-4">
                                    La información publicada no constituye oferta mercantil vinculante ni genera obligación contractual automática. Toda contratación deberá formalizarse mediante acuerdo escrito independiente.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-corporate-orange pl-4">
                                    3. ACEPTACIÓN Y USO ADECUADO
                                </h2>
                                <p>El acceso y uso del sitio implica aceptación plena de estos términos. El usuario se compromete a:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Utilizar el sitio de manera lícita.</li>
                                    <li>No realizar actividades que afecten la seguridad digital.</li>
                                    <li>No intentar acceder a servidores, bases de datos o sistemas internos.</li>
                                    <li>No reproducir contenidos sin autorización escrita.</li>
                                </ul>
                                <p className="mt-4">
                                    Electriobras podrá restringir accesos cuando detecte uso indebido.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-corporate-orange pl-4">
                                    4. ALCANCE DE LOS SERVICIOS PUBLICADOS
                                </h2>
                                <p>Los servicios descritos son de carácter general y pueden estar sujetos a:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Verificación técnica previa.</li>
                                    <li>Evaluación estructural.</li>
                                    <li>Disponibilidad operativa.</li>
                                    <li>Análisis de riesgos.</li>
                                </ul>
                                <p className="mt-4 font-medium">
                                    Las cotizaciones enviadas por formulario o correo no constituyen aceptación contractual hasta formalización escrita.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-corporate-orange pl-4">
                                    5. CONFIDENCIALIDAD EMPRESARIAL
                                </h2>
                                <p>
                                    Electriobras podrá recibir información técnica, operativa o estratégica por parte de empresas interesadas. Dicha información:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Será utilizada exclusivamente para evaluación comercial o técnica.</li>
                                    <li>Será tratada con reserva y confidencialidad.</li>
                                    <li>No será divulgada sin autorización expresa, salvo obligación legal.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-corporate-orange pl-4">
                                    6. LIMITACIÓN DE RESPONSABILIDAD
                                </h2>
                                <p>Electriobras no garantiza:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Disponibilidad ininterrumpida del sitio.</li>
                                    <li>Ausencia total de errores técnicos.</li>
                                    <li>Exactitud absoluta de contenidos publicados.</li>
                                </ul>
                                <p className="mt-4">No será responsable por fallas técnicas externas, ataques cibernéticos de terceros o uso indebido por parte del usuario.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-corporate-orange pl-4">
                                    7. PROPIEDAD INTELECTUAL
                                </h2>
                                <p>
                                    Todo el contenido del sitio (textos, imágenes, diseño, estructura, material gráfico) es propiedad de <strong>Electriobras</strong> o cuenta con autorización legítima. Su reproducción sin autorización escrita está prohibida.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-corporate-orange pl-4">
                                    8. JURISDICCIÓN
                                </h2>
                                <p>
                                    Estos términos se rigen por la legislación de la República de Colombia. Cualquier controversia será sometida a los jueces competentes de Cali, Valle del Cauca.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
