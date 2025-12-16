import { products } from "@/data/products";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return {
            title: "Producto no encontrado | Launch Uruguay",
        };
    }

    return {
        title: `${product.name} | Launch Uruguay`,
        description: `Detalles completos de ${product.name}, alineadora 3D profesional.`,
    };
}

export default async function ProductPage({ params }: PageProps) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-transparent flex flex-col">
            <Header />

            <section className="flex-grow py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <Link
                        href="/alineadora"
                        className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Volver a Alineadoras
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
                                                alt={`${product.name} view ${idx + 1}`}
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
