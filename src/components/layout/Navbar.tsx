'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button'; // Assuming button component exists or will exist

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Quiénes Somos', href: '/#about' },
        { name: 'Sectores', href: '/#sectors' },
        { name: 'Servicios', href: '/#services' },
        { name: 'Proyectos', href: '/#portfolio' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 w-full z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
                    : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link
                    href="/"
                    className="relative flex items-center h-12 w-48 transition-transform hover:scale-105"
                    onClick={(e) => {
                        if (window.location.pathname === '/') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}
                >
                    <Image
                        src="/logo/logo_electriobras.png"
                        alt="Electriobras SAS Logo"
                        fill
                        className={cn(
                            "object-contain transition-all duration-300",
                            !isScrolled && "brightness-0 invert opacity-90" // Makes logo white on dark backgrounds
                        )}
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-corporate-orange",
                                isScrolled ? "text-gray-700" : "text-gray-200"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/#contact">
                        <Button variant="default" size="sm" className="bg-corporate-orange hover:bg-orange-600 text-white">
                            Cotizar Ahora
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled ? "text-gray-900" : "text-white"} />
                    ) : (
                        <Menu className={isScrolled ? "text-gray-900" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden p-4 flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-800 font-medium hover:text-corporate-orange"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button className="w-full bg-corporate-orange text-white">
                                Solicitar Cotización
                            </Button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
