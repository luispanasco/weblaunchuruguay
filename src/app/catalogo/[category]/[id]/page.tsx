import { products } from "@/data/products";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return products.map((product) => ({
        category: product.category,
        id: product.id,
    }));
}

export default function GenericProductDetailPage({ params }: { params: { category: string, id: string } }) {
    const product = products.find((p) => p.id === params.id && p.category === params.category);

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <Link
                        href={`/catalogo/${params.category}`}
                        className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Volver a {params.category}
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Image Section */}
                        <div className="space-y-4">
                            <div className="bg-white/50 rounded-2xl p-8 border border-border flex items-center justify-center aspect-square">
                                {product.images?.[0] ? (
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                ) : (
                                    <div className="text-muted-foreground/30 font-bold text-4xl">LAUNCH</div>
                                )}
                            </div>
                            {/* Gallery if multiple images exist */}
                            {product.images && product.images.length > 1 && (
                                <div className="grid grid-cols-4 gap-4">
                                    {product.images.map((img, index) => (
                                        <div key={index} className="bg-white/50 rounded-lg p-2 border border-border aspect-square flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
                                            <img src={img} alt={`${product.name} ${index + 1}`} className="max-w-full max-h-full object-contain" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Content Section */}
                        <div>
                            <div className="mb-8">
                                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 capitalize">
                                    {params.category}
                                </span>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
                                {product.features && product.features.length > 0 && (
                                    <p className="text-xl text-muted-foreground">
                                        {product.features[0]}
                                    </p>
                                )}
                            </div>

                            <div className="bg-card border border-border rounded-2xl p-8 mb-8">
                                <h3 className="text-xl font-bold mb-6">Características Principales</h3>
                                <ul className="space-y-4">
                                    {product.features?.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5 shrink-0">
                                                <Check className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="https://wa.me/59899123456"
                                    target="_blank"
                                    className="flex-1 bg-primary text-primary-foreground h-14 rounded-xl font-bold text-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
                                >
                                    Consultar Precio
                                </Link>
                                <Link
                                    href="/catalogo.pdf"
                                    className="flex-1 bg-secondary text-secondary-foreground h-14 rounded-xl font-bold text-lg flex items-center justify-center hover:bg-secondary/80 transition-colors border border-border"
                                >
                                    Descargar Ficha Técnica
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
