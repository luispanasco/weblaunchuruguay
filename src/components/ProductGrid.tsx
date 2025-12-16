"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";

interface ProductGridProps {
    category: string;
    itemBaseUrl?: string; // Optional custom base URL for items
}

export function ProductGrid({ category, itemBaseUrl }: ProductGridProps) {
    const categoryProducts = products.filter(p => p.category === category || (!p.category && category === 'diagnostico'));

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {categoryProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group relative flex flex-col h-full"
                        >
                            {/* Card Background with Glass Effect & Stronger Contrast */}
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-md border border-white/20 rounded-3xl transition-all duration-500 group-hover:border-primary/50 group-hover:bg-black/60 group-hover:shadow-2xl group-hover:shadow-black/50" />


                            {/* Content Container */}
                            <div className="relative p-6 flex flex-col h-full z-10">

                                {/* Badge */}
                                {product.highlight && (
                                    <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider shadow-lg shadow-primary/20">
                                        <Sparkles className="w-3 h-3" />
                                        Más Potente
                                    </div>
                                )}

                                {/* Image Area */}
                                <div className="h-64 mb-8 relative flex items-center justify-center overflow-hidden rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors duration-500">
                                    <motion.img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="max-w-[85%] max-h-[85%] object-contain drop-shadow-xl transition-transform duration-700 ease-out group-hover:scale-110"
                                    />
                                </div>

                                {/* Content */}
                                <div className="mb-6">
                                    <h3 className="text-3xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                                        {product.name}
                                    </h3>
                                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-transparent rounded-full mb-6 group-hover:w-full transition-all duration-500" />
                                </div>

                                {/* Features List */}
                                <ul className="space-y-3 mb-8 flex-grow">
                                    {product.features.slice(0, 4).map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                                            <div className="p-0.5 rounded-full bg-primary/10 mr-3 mt-0.5 group-hover:bg-primary/20 transition-colors">
                                                <Check className="w-3 h-3 text-primary" />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                    {product.features.length > 4 && (
                                        <li className="text-xs text-muted-foreground pl-7 pt-1 italic">
                                            + {product.features.length - 4} características más
                                        </li>
                                    )}
                                </ul>

                                {/* Action Button */}
                                <Link
                                    href={itemBaseUrl ? `${itemBaseUrl}/${product.id}` : `/${category === 'diagnostico' && !product.category ? 'diagnostico' : product.category}/${product.id}`}
                                    className="mt-auto group/btn relative flex items-center justify-center w-full overflow-hidden rounded-xl bg-background border border-white/10 px-6 py-4 font-bold transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
                                >
                                    <span className="mr-2 group-hover:text-primary transition-colors">Explorar</span>
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover:text-primary" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
