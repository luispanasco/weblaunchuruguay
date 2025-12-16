"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoItem {
    title: string;
    description: string;
    colSpan?: 1 | 2 | 3;
    image?: string;
}

interface BentoGridProps {
    items: BentoItem[];
}

export function BentoGrid({ items }: BentoGridProps) {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 p-8 flex flex-col justify-between min-h-[300px]",
                                item.colSpan === 2 ? "md:col-span-2" : "md:col-span-1",
                                item.colSpan === 3 ? "md:col-span-3" : ""
                            )}
                        >
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-400 text-lg leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* Decorative Background Element */}
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/20 blur-[80px] rounded-full group-hover:bg-primary/30 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
