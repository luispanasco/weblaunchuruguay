import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";

export const metadata = {
    title: "Equipos de Diagnóstico | Launch Uruguay",
    description: "Catálogo completo de scanners y equipos de diagnóstico automotriz Launch.",
};

export default function DiagnosticPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* Page Header */}
            <section className="bg-secondary/30 pt-32 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Equipos de Diagnóstico</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Tecnología de punta para el diagnóstico integral de vehículos livianos y pesados.
                    </p>
                </div>
            </section>

            <ProductGrid category="diagnostico" itemBaseUrl="/diagnostico" />
            <Footer />
        </main>
    );
}
