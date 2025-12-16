import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";

export const metadata = {
    title: "Alineadoras 3D | Launch Uruguay",
    description: "Alineadoras 3D de última generación para talleres profesionales.",
};

export default function AlineadoraPage() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />

            {/* Page Header */}
            <section className="bg-secondary/30 pt-32 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Alineadoras 3D</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Precisión milimétrica y tecnología avanzada para el servicio de alineación.
                    </p>
                </div>
            </section>

            <ProductGrid category="alineadoras" itemBaseUrl="/alineadora" />
            <Footer />
        </main>
    );
}
