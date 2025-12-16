"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ProductHeroProps {
    title: string;
    slogan?: string;
    image: string;
}

export function ProductHero({ title, slogan, image }: ProductHeroProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-black text-white">
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 container mx-auto px-4 text-center mt-[-10vh]"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-lg md:text-xl font-medium text-primary mb-4 tracking-widest uppercase"
                >
                    {title}
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                >
                    {slogan || title}
                </motion.h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="absolute inset-0 z-0 flex items-center justify-center top-[20%]"
            >
                <img
                    src={image}
                    alt={title}
                    className="w-[80%] md:w-[60%] lg:w-[45%] object-contain drop-shadow-2xl"
                />
            </motion.div>

            {/* Gradient fade at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
        </section>
    );
}
