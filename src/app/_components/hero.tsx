"use client";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!heroRef.current) return;

        const ctx = gsap.context(() => {
            // Initial hero entrance animation
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Text animations with staggered reveal
            const h1Element = textRef.current?.querySelector("h1");
            if (h1Element) {
                tl.fromTo(
                    h1Element,
                    {
                        y: 50,
                        opacity: 0,
                        skewY: 5,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        skewY: 0,
                        duration: 0.8,
                    }
                );
            }

            // Gradient text animation
            const gradientElement =
                textRef.current?.querySelector(".gradient-text");
            if (gradientElement) {
                gsap.fromTo(
                    gradientElement,
                    {
                        backgroundPosition: "200% 50%",
                    },
                    {
                        backgroundPosition: "-200% 50%",
                        duration: 3,
                        ease: "power2.inOut",
                        repeat: -1,
                        yoyo: true,
                        delay: 2,
                    }
                );
            }

            // Scroll-triggered animations
            gsap.fromTo(
                heroRef.current,
                {
                    scale: 1,
                },
                {
                    scale: 0.95,
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1,
                    },
                }
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <BackgroundGradientAnimation 
            size={"100%"} 
            className="z-[200]"
            gradientBackgroundStart="rgb(0, 0, 0)"
            gradientBackgroundEnd="rgb(0, 0, 0)"
            firstColor="255, 0, 0"
            secondColor="200, 0, 0"
            thirdColor="150, 0, 0"
            fourthColor="255, 50, 50"
            fifthColor="180, 0, 0"
            pointerColor="255, 100, 100"
        >
            <div
                ref={heroRef}
                className="absolute inset-0 flex items-center justify-center z-[210] px-4"
            >
                <div className="flex flex-col items-center justify-center text-center">
                    {/* Hero Text */}
                    <div
                        ref={textRef}
                        className="space-y-3 md:space-y-4 max-w-4xl"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-400">
                            Hi, I&apos;m{" "}
                            <span className="gradient-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent bg-[length:200%_100%]">
                                Ezra Stone!
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </BackgroundGradientAnimation>
    );
}
