'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/573001234567?text=Buen día, deseo solicitar información sobre un proyecto eléctrico o adecuación civil."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20bd5a] transition-colors"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <MessageCircle size={32} />
            <span className="sr-only">Contactar por WhatsApp</span>

            {/* Pulse Effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75 -z-10" />
        </motion.a>
    );
}
