"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

import { products } from "@/data/products";

// Config: IDs of featured products to show in the carousel
// Order matters: Scanners -> Alineadora -> TPMS
const FEATURED_PRODUCT_ID_ORDER = ["pad-ix-link", "pro3-link", "pro-se", "x-613", "crt-511-v2"];

// Helper to determine styling based on category/product
const getProductStyle = (product: typeof products[0]) => {
    if (product.category === "diagnostico") {
        return {
            label: "Scanner Profesional Destacado",
            colorClass: "bg-red-600/90 text-white border-red-500 shadow-lg shadow-red-900/20",
            badgeColor: "bg-red-600 text-white border-red-400"
        };
    }
    if (product.category === "alineadoras") {
        return {
            label: "Alineadora Destacada",
            colorClass: "bg-blue-600/90 text-white border-blue-500 shadow-lg shadow-blue-900/20",
            badgeColor: "bg-blue-600 text-white border-blue-400"
        };
    }
    if (product.category === "tpms" || product.id === "crt-511-v2") {
        return {
            label: "Herramienta Destacada",
            colorClass: "bg-orange-600/90 text-white border-orange-500 shadow-lg shadow-orange-900/20",
            badgeColor: "bg-orange-600 text-white border-orange-400"
        };
    }
    return {
        label: "Producto Destacado",
        colorClass: "bg-primary/90 text-white border-primary shadow-lg shadow-primary/20",
        badgeColor: "bg-primary text-white border-white/20"
    };
};

const carouselItems = FEATURED_PRODUCT_ID_ORDER
    .map(id => products.find(p => p.id === id))
    .filter((p): p is typeof products[0] => !!p)
    .map(p => ({
        id: p.id,
        name: p.name,
        image: p.images[0],
        category: p.category,
        ...getProductStyle(p)
    }));

import { ContactModal } from "./ContactModal";

export function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isContactOpen, setIsContactOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
        }, 5000); // Rotate every 5 seconds
        return () => clearInterval(timer);
    }, []);

    const currentItem = carouselItems[currentIndex];

    // Safety check if no items found
    if (!currentItem) return null;

    return (
        <section className="relative overflow-hidden pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 min-h-[60vh] flex items-center">
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

            {/* Background Carousel */}
            <div className="absolute inset-0 -z-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentItem.id}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 0.6, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className={`absolute inset-0 ${currentItem.id === "crt-511-v2"
                            ? "right-[-5%] md:right-0" // Just slightly pulled in compared to others
                            : "right-[-10%] md:right-[-20%] lg:right-[-10%]" // Standard offset
                            }`}
                    >
                        <img
                            src={currentItem.image}
                            alt={currentItem.name}
                            className="w-full h-full object-contain object-right"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#8a0f0a] via-[#8a0f0a]/40 to-transparent" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Background Gradient Layer for Text Readability */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/40 to-transparent" />

            <div className="container mx-auto px-4">
                <div className="flex flex-col items-start text-left max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentItem.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="inline-flex flex-col items-start mb-6"
                            >
                                <span className={`inline-block py-1 px-3 rounded-full backdrop-blur-sm border text-sm font-medium mb-2 ${currentItem.badgeColor}`}>
                                    {currentItem.label}
                                </span>
                                <span className={`text-xl font-bold px-3 py-1 rounded-lg border bg-black/50 ${currentItem.colorClass}`}>
                                    {currentItem.name}
                                </span>
                            </motion.div>
                        </AnimatePresence>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
                            Tecnología de Diagnóstico <br />
                            <span className="text-white">Automotriz Avanzada</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl font-medium drop-shadow-md">
                            Descubre la gama completa de scanners, elevadores y herramientas profesionales Launch.
                            Soporte local, garantía y capacitación técnica.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href={
                                        currentItem.category === "diagnostico" ? `/diagnostico/${currentItem.id}` :
                                            currentItem.category === "alineadoras" ? `/alineadora/${currentItem.id}` :
                                                `/catalogo/${currentItem.category}/${currentItem.id}`
                                    }
                                    className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-xl hover:shadow-primary/25 border-2 border-primary"
                                >
                                    Ver {currentItem.name}
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <button
                                    onClick={() => setIsContactOpen(true)}
                                    className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 rounded-xl bg-white/10 text-white font-bold text-lg hover:bg-white/20 transition-all border-2 border-white/30 backdrop-blur-md hover:border-white"
                                >
                                    Contactar Asesor
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Gradient for smooth transition */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#9e1c1c] to-transparent pointer-events-none" />
        </section>
    );
}
