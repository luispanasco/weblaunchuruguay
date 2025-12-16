"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Scan,
    Cpu,
    Zap,
    Radio,
    Wrench,
    Settings,
    ArrowUpFromLine
} from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";

// Helper to get formatted images for a category
const getCategoryImages = (categorySlug: string) => {
    if (!categorySlug) return [];

    // Filter products by category
    const categoryProducts = products.filter(p =>
        p.category === categorySlug ||
        (categorySlug === 'diagnostico' && !p.category) // Handle untagged products as diagnostico if needed
    );

    // Extract first image from each product
    return categoryProducts
        .map(p => p.images[0])
        .filter(Boolean); // Ensure no undefined images
};

const categories = [
    {
        title: "Equipos de Diagnóstico",
        description: "Scanners profesionales multimarca para diagnóstico integral.",
        icon: Scan,
        href: "/diagnostico",
        color: "bg-primary/10 text-primary",
        slug: "diagnostico"
    },
    {
        title: "Programadores",
        description: "Herramientas avanzadas para programación de llaves y ECUs.",
        icon: Cpu,
        href: "/catalogo/programadores",
        color: "bg-purple-500/10 text-purple-600",
        slug: "programadores"
    },
    {
        title: "Electromovilidad",
        description: "Soluciones para vehículos eléctricos e híbridos.",
        icon: Zap,
        href: "#",
        color: "bg-green-500/10 text-green-600",
        slug: "" // No products yet
    },
    {
        title: "Alineadoras",
        description: "Alineación 3D de alta precisión y tecnología avanzada.",
        icon: ArrowUpFromLine,
        href: "/alineadora",
        color: "bg-blue-500/10 text-blue-600",
        slug: "alineadoras"
    },
    {
        title: "Servicio TPMS",
        description: "Diagnóstico y programación de sensores de presión de neumáticos.",
        icon: Radio,
        href: "/catalogo/tpms",
        color: "bg-orange-500/10 text-orange-600",
        slug: "tpms"
    },
    {
        title: "Servicio Llantero",
        description: "Desmontadoras y balanceadoras de última generación.",
        icon: Wrench,
        href: "#",
        color: "bg-slate-500/10 text-slate-600",
        slug: "" // No products yet
    },
    {
        title: "Equipos DIY",
        description: "Herramientas personales para entusiastas y dueños de vehículos.",
        icon: Settings,
        href: "/catalogo/diy",
        color: "bg-red-500/10 text-red-600",
        slug: "diy"
    },
    {
        title: "Accesorios",
        description: "Cámaras, videoscopios, testers y módulos de expansión.",
        icon: Scan,
        href: "/catalogo/accesorios",
        color: "bg-teal-500/10 text-teal-600",
        slug: "accesorios"
    },
    {
        title: "Elevadores",
        description: "Elevadores de 2 y 4 columnas, tijera y alineación.",
        icon: ArrowUpFromLine,
        href: "/elevadores",
        color: "bg-indigo-500/10 text-indigo-600",
        slug: "elevadores"
    },
];

function CategoryCard({ category, index }: { category: typeof categories[0], index: number }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Get dynamic images
    const images = getCategoryImages(category.slug);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (images.length > 0) {
            interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % images.length);
            }, 4000); // Change image every 4 seconds
        }
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setCurrentImageIndex(0);
            }}
            className="h-full"
        >
            <Link
                href={category.href}
                className="group relative flex flex-col justify-end min-h-[200px] h-full p-6 bg-card hover:bg-neutral-900 transition-all duration-500 rounded-2xl border border-border/50 hover:border-primary/50 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10"
            >
                {/* Background Carousel */}
                <div className="absolute inset-0 z-0 pointer-events-none bg-neutral-200 transition-colors duration-500 group-hover:bg-transparent">
                    <AnimatePresence mode="wait">
                        {images.length > 0 && (
                            <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: isHovered ? 0.15 : 1,
                                    scale: isHovered ? 1.1 : 1
                                }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex items-center justify-center p-8"
                            >
                                <img
                                    src={images[currentImageIndex]}
                                    alt=""
                                    className="w-full h-full object-contain filter hover:brightness-150 transition-all duration-500"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${category.color} group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 ${images.length > 0 && !isHovered ? "opacity-0 absolute top-6 left-6" : "opacity-100 relative"}`}>
                        <category.icon className="w-6 h-6" />
                    </div>

                    {/* Title Wrapper with gradient for readability if needed, though white bg should be fine */}
                    <div className={`transition-all duration-300 ${images.length > 0 && !isHovered ? "mb-0" : "mb-2"}`}>
                        <h3 className={`text-lg font-bold transition-colors duration-300 ${images.length > 0 && !isHovered ? "text-white bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg inline-block shadow-sm" : "group-hover:text-white"}`}>
                            {category.title}
                        </h3>
                    </div>

                    <motion.p
                        className="text-muted-foreground text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                        animate={{
                            opacity: (images.length > 0 && !isHovered) ? 0 : 1,
                            height: (images.length > 0 && !isHovered) ? 0 : "auto",
                            marginTop: (images.length > 0 && !isHovered) ? 0 : 8
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {category.description}
                    </motion.p>
                </div>
            </Link>
        </motion.div>
    );
}

export function CategoryGrid() {
    return (
        <section id="productos" className="py-20 bg-[#9e1c1c]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Equipos</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Seleccione una categoría para explorar nuestro catálogo completo de soluciones automotrices.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <CategoryCard key={category.title} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

