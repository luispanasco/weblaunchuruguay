"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Menu,
    X,
    Search,
    Phone,
    ChevronDown,
    Scan,
    ArrowUpFromLine,
    Component,
    Cpu,
    Radio,
    Settings,
    Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ContactModal } from "./ContactModal";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [desktopMenuOpen, setDesktopMenuOpen] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState<string | null>(null);

    const productCategories = [
        { name: "Diagnóstico", href: "/diagnostico", icon: Scan, desc: "Scanners profesionales" },
        { name: "Elevadores", href: "/elevadores", icon: ArrowUpFromLine, desc: "2 y 4 columnas, Tijera" },
        { name: "Alineadoras", href: "/alineadora", icon: Zap, desc: "Tecnología 3D" }, // Zap as placeholder or ArrowUpFromLine
        { name: "Programación", href: "/catalogo/programadores", icon: Cpu, desc: "Llaves y ECUs" },
        { name: "TPMS", href: "/catalogo/tpms", icon: Radio, desc: "Sensores y Herramientas" },
        { name: "Accesorios", href: "/catalogo/accesorios", icon: Component, desc: "Cámaras, Testers" },
        { name: "DIY", href: "/catalogo/diy", icon: Settings, desc: "Uso personal" },
    ];

    const navItems = [
        { name: "Inicio", href: "/" },
        {
            name: "Productos",
            href: "#",
            megaMenu: true
        },
        {
            name: "Contacto",
            href: "#",
            megaMenu: true
        }
    ];

    return (
        <>
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            <header
                className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#5c0905]/95 backdrop-blur-md supports-[backdrop-filter]:bg-[#5c0905]/90 transition-all duration-300"
                onMouseLeave={() => setDesktopMenuOpen(null)}
            >
                <div className="container mx-auto px-4 h-20 flex items-center justify-between relative z-50">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-white tracking-tighter">LAUNCH</span>
                        <span className="text-sm font-medium text-white/80 hidden sm:inline-block">| Uruguay</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8 text-sm font-medium h-full">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="h-full flex items-center"
                                onMouseEnter={() => item.megaMenu && setDesktopMenuOpen(item.name)}
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center transition-colors hover:text-white uppercase tracking-wide text-xs font-bold h-full border-b-2 border-transparent",
                                        desktopMenuOpen === item.name ? "text-white border-white" : "text-white/80"
                                    )}
                                >
                                    {item.name}
                                    {item.megaMenu && (
                                        <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${desktopMenuOpen === item.name ? "rotate-180" : ""}`} />
                                    )}
                                </Link>
                            </div>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                            <Search className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="inline-flex items-center justify-center rounded-full text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/40 h-10 px-6 backdrop-blur-sm"
                        >
                            <Phone className="w-4 h-4 mr-2" />
                            Consultar
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mega Menu Overlay */}
                <AnimatePresence>
                    {desktopMenuOpen === "Productos" && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute top-full left-0 w-full bg-[#5c0a06]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden shadow-2xl z-40"
                            onMouseEnter={() => setDesktopMenuOpen("Productos")}
                            onMouseLeave={() => setDesktopMenuOpen(null)}
                        >
                            <div className="container mx-auto px-4 py-8">
                                <div className="grid grid-cols-4 gap-6">
                                    {productCategories.map((category) => (
                                        <Link
                                            key={category.name}
                                            href={category.href}
                                            className="group flex flex-col p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                                            onClick={() => setDesktopMenuOpen(null)}
                                        >
                                            <div className="flex items-center mb-2">
                                                <div className="p-2 rounded-lg bg-white/10 text-white group-hover:bg-primary group-hover:text-white transition-colors duration-300 mr-3">
                                                    <category.icon className="w-5 h-5" />
                                                </div>
                                                <span className="font-bold text-white text-lg group-hover:text-primary transition-colors">
                                                    {category.name}
                                                </span>
                                            </div>
                                            <p className="text-sm text-white/50 group-hover:text-white/80 transition-colors pl-[3.25rem]">
                                                {category.desc}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                                    <Link
                                        href="/#productos"
                                        className="text-sm font-semibold text-white/70 hover:text-white flex items-center"
                                        onClick={() => setDesktopMenuOpen(null)}
                                    >
                                        Ver Catálogo Completo <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Contact Menu Overlay */}
                    {desktopMenuOpen === "Contacto" && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute top-full left-0 w-full bg-[#5c0a06]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden shadow-2xl z-40"
                            onMouseEnter={() => setDesktopMenuOpen("Contacto")}
                            onMouseLeave={() => setDesktopMenuOpen(null)}
                        >
                            <div className="container mx-auto px-4 py-8 flex gap-8">
                                {/* Location 1: Nami Centro */}
                                <div className="flex-1 p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                        Nami Centro
                                    </h3>
                                    <p className="text-white/70 mb-4 text-sm">Cerro Largo 1518, Montevideo</p>
                                    <div className="space-y-3">
                                        {[
                                            { name: "Facundo Genova", phone: "092748865" },
                                            { name: "Luis Panasco", phone: "098155763" },
                                        ].map((contact, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                                <span className="text-white font-medium">{contact.name}</span>
                                                <span className="text-white/60 text-sm flex items-center"><Phone className="w-3 h-3 mr-2" /> {contact.phone}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Location 2: Nami Bulevar */}
                                <div className="flex-1 p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                        Nami Bulevar
                                    </h3>
                                    <p className="text-white/70 mb-4 text-sm">Bv. Gral. Artigas 3397, Montevideo</p>
                                    <div className="space-y-3">
                                        {[
                                            { name: "Luis Rodriguez", phone: "098829026" },
                                        ].map((contact, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                                <span className="text-white font-medium">{contact.name}</span>
                                                <span className="text-white/60 text-sm flex items-center"><Phone className="w-3 h-3 mr-2" /> {contact.phone}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Call to Action */}
                                <div className="w-64 flex flex-col justify-center items-center text-center p-6 border-l border-white/10">
                                    <p className="text-white/80 mb-6 font-medium">¿Necesitas ayuda inmediata?</p>
                                    <button
                                        onClick={() => {
                                            setDesktopMenuOpen(null);
                                            setIsContactOpen(true);
                                        }}
                                        className="w-full py-3 rounded-xl bg-primary text-white font-bold hover:bg-white/10 hover:text-white border-2 border-primary hover:border-white transition-all shadow-lg shadow-primary/20"
                                    >
                                        Abrir Contacto
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl overflow-y-auto max-h-[calc(100vh-80px)]"
                        >
                            <div className="container mx-auto px-4 py-4 space-y-2">
                                <Link
                                    href="/"
                                    className="block py-3 text-lg font-medium text-white border-b border-white/5"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Inicio
                                </Link>

                                {/* Mobile Accordion for Products */}
                                <div>
                                    <button
                                        onClick={() => setMobileMenuOpen(mobileMenuOpen === "Productos" ? null : "Productos")}
                                        className="flex items-center justify-between w-full py-3 text-lg font-medium text-white border-b border-white/5"
                                    >
                                        Productos
                                        <ChevronDown className={`w-5 h-5 transition-transform ${mobileMenuOpen === "Productos" ? "rotate-180" : ""}`} />
                                    </button>
                                    <AnimatePresence>
                                        {mobileMenuOpen === "Productos" && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden bg-white/5"
                                            >
                                                <div className="py-2">
                                                    {productCategories.map((child) => (
                                                        <Link
                                                            key={child.name}
                                                            href={child.href}
                                                            className="flex items-center px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            <child.icon className="w-4 h-4 mr-3 opacity-70" />
                                                            {child.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="pt-6">
                                    <button
                                        onClick={() => {
                                            setIsOpen(false);
                                            setIsContactOpen(true);
                                        }}
                                        className="flex items-center justify-center w-full rounded-xl bg-primary text-white h-12 font-bold shadow-lg shadow-primary/20"
                                    >
                                        <Phone className="w-4 h-4 mr-2" />
                                        Contactar Representante
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}
