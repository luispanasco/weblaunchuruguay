"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MapPin, User } from "lucide-react";
import Link from "next/link";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 z-50 border border-slate-200 dark:border-slate-800"
                    >
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex-1 overflow-y-auto max-h-[80vh] p-1">
                            {/* Nami Centro */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                                    <MapPin className="w-5 h-5 text-primary mr-2" />
                                    Nami Centro
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-4">
                                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3">
                                            <p className="text-sm text-slate-600 dark:text-slate-300">
                                                Cerro Largo 1518, 11600 Montevideo<br />
                                                Departamento de Montevideo
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            {[
                                                { name: "Facundo Genova", phone: "092748865" },
                                                { name: "Luis Panasco", phone: "098155763" },
                                            ].map((contact, index) => (
                                                <Link
                                                    key={index}
                                                    href={`https://wa.me/598${contact.phone.substring(1)}`}
                                                    target="_blank"
                                                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group border border-slate-100 dark:border-slate-800"
                                                >
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                                            <User className="w-4 h-4" />
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-slate-900 dark:text-white text-sm">{contact.name}</p>
                                                            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center">
                                                                <Phone className="w-3 h-3 mr-1" />
                                                                {contact.phone}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-48 md:h-full min-h-[150px] rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            id="gmap_canvas_centro"
                                            src="https://maps.google.com/maps?q=Cerro+Largo+1518,+Montevideo&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                            frameBorder="0"
                                            scrolling="no"
                                            marginHeight={0}
                                            marginWidth={0}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-px bg-slate-200 dark:bg-slate-800 my-6" />

                            {/* Nami Bulevar */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                                    <MapPin className="w-5 h-5 text-primary mr-2" />
                                    Nami Bulevar
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-4">
                                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3">
                                            <p className="text-sm text-slate-600 dark:text-slate-300">
                                                Bv. Gral. Artigas 3397, 11800 Montevideo<br />
                                                Departamento de Montevideo
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            {[
                                                { name: "Luis Rodriguez", phone: "098829026" },
                                            ].map((contact, index) => (
                                                <Link
                                                    key={index}
                                                    href={`https://wa.me/598${contact.phone.substring(1)}`}
                                                    target="_blank"
                                                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group border border-slate-100 dark:border-slate-800"
                                                >
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                                            <User className="w-4 h-4" />
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-slate-900 dark:text-white text-sm">{contact.name}</p>
                                                            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center">
                                                                <Phone className="w-3 h-3 mr-1" />
                                                                {contact.phone}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-48 md:h-full min-h-[150px] rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            id="gmap_canvas_bulevar"
                                            src="https://maps.google.com/maps?q=Bv.+Gral.+Artigas+3397,+Montevideo&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                            frameBorder="0"
                                            scrolling="no"
                                            marginHeight={0}
                                            marginWidth={0}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
