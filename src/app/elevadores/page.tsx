import { ProductGrid } from "@/components/ProductGrid";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ElevadoresPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <div className="pt-24 pb-12 bg-secondary/30">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Elevadores</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Soluciones de elevación profesional para su taller. Desde 2 columnas hasta tijeras y alineación.
                    </p>
                </div>
            </div>
            <ProductGrid category="elevadores" itemBaseUrl="/elevadores" />
            <Footer />
        </main>
    );
}
