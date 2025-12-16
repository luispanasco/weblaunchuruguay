import { ProductGrid } from "@/components/ProductGrid";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";

// Map of slug to display title
const categoryTitles: Record<string, string> = {
    "accesorios": "Accesorios y Complementos",
    "programadores": "Programación y Llaves",
    "tpms": "Servicio TPMS",
    "diy": "Equipos DIY / Personal",
    // Add others if needed
};

// Map of slug to description
const categoryDescriptions: Record<string, string> = {
    "accesorios": "Complemente su equipo de diagnóstico con cámaras, videoscopios, testers de batería y más.",
    "programadores": "Soluciones avanzadas para inmovilizadores, programación de llaves y clonación de ECUs.",
    "tpms": "Herramientas integrales para el diagnóstico y mantenimiento de sistemas de monitoreo de presión de neumáticos.",
    "diy": "Scanners y herramientas accesibles para dueños de vehículos y entusiastas.",
};

export function generateStaticParams() {
    return Object.keys(categoryTitles).map((category) => ({
        category,
    }));
}

export default function GenericCatalogPage({ params }: { params: { category: string } }) {
    const title = categoryTitles[params.category];
    const description = categoryDescriptions[params.category];

    if (!title) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background">
            <Header />
            <div className="pt-24 pb-12 bg-secondary/30">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">{title}</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
            </div>
            <ProductGrid category={params.category} itemBaseUrl={`/catalogo/${params.category}`} />
            <Footer />
        </main>
    );
}
