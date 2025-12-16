
"use client";

import { products } from "@/data/products";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, ArrowLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ProductHero } from "@/components/product-page/ProductHero";
import { BentoGrid } from "@/components/product-page/BentoGrid";

// generateMetadata is removed as this is now a client component.
// If metadata is still needed, it should be handled in a layout or a separate server component.

export default function ProductPage() {
    const params = useParams();
    // Safety check for next build
    if (!params?.id) return null;

    const product = products.find((p) => p.id === params.id);

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center text-white bg-black">Producto no encontrado</div>;
    }

    // Check if we have the "Premium" marketing data
    if (product.marketing) {
        return (
            <div className="bg-black min-h-screen text-white">
                <Header />
                <main>
                    <ProductHero
                        title={product.name}
                        slogan={product.marketing.slogan}
                        image={product.marketing.heroImage || product.images[0]}
                    />

                    {/* Intro Description */}
                    <section className="py-24 px-6 md:px-12 bg-neutral-900 border-t border-white/10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-5xl font-semibold leading-tight text-neutral-200"
                            >
                                {product.marketing.description}
                            </motion.h3>
                        </div>
                    </section>

                    {/* Bento Grid */}
                    {product.marketing.bentoGrid && (
                        <BentoGrid items={product.marketing.bentoGrid} />
                    )}

                    {/* Standard Features List */}
                    <section className="py-24 bg-black">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <h2 className="text-3xl font-bold mb-12 text-center">Especificaciones Técnicas</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {product.features.map((feature, i) => (
                                    <div key={i} className="flex items-start p-4 border border-white/10 rounded-xl bg-neutral-900/50">
                                        <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                                        <span className="text-lg text-neutral-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="py-24 bg-neutral-900 border-t border-white/10 text-center">
                        <div className="container mx-auto px-4">
                            <h2 className="text-4xl font-bold mb-8">¿Listo para el siguiente nivel?</h2>
                            <Link
                                href="/#contacto"
                                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-bold text-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
                            >
                                Consultar Precio
                                <ChevronRight className="ml-2 w-6 h-6" />
                            </Link>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-transparent flex flex-col">
            <Header />

            <section className="flex-grow py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <Link
                        href="/diagnostico"
                        className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Volver a Equipos de Diagnóstico
                    </Link>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Image Column */}
                        <div className="flex flex-col gap-4">
                            <div className="bg-white/50 rounded-3xl p-8 flex items-center justify-center h-[400px] md:h-[500px]">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="max-w-full max-h-full object-contain drop-shadow-xl"
                                />
                            </div>
                            {/* Gallery Thumbnails */}
                            {product.images.length > 1 && (
                                <div className="grid grid-cols-4 gap-2">
                                    {product.images.map((img, idx) => (
                                        <div key={idx} className="bg-white/30 rounded-xl p-2 h-24 flex items-center justify-center border border-white/20">
                                            <img
                                                src={img}
                                                alt={`${product.name} view ${idx + 1} `}
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Info Column */}
                        <div>
                            {product.highlight && (
                                <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
                                    MÁS POTENTE
                                </span>
                            )}
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">{product.name}</h1>

                            <div className="h-1 w-24 bg-primary rounded-full mb-8" />

                            <h2 className="text-xl font-semibold mb-4">Características Principales</h2>
                            <ul className="space-y-4 mb-10">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-start text-lg">
                                        <Check className="w-6 h-6 text-primary mr-3 mt-0.5 shrink-0" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors text-lg">
                                Solicitar Cotización
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

