"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function About() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const valuesTitleRef = useRef<HTMLHeadingElement>(null);
    const footerTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation with text reveal effect
            if (titleRef.current) {
                gsap.fromTo(
                    titleRef.current,
                    {
                        y: 50,
                        opacity: 0,
                        scale: 0.95,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: titleRef.current,
                            start: "top 70%",
                            end: "top 30%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            // Content text animations with staggered reveal
            if (contentRef.current) {
                const textElements = contentRef.current.querySelectorAll("div");
                gsap.fromTo(
                    textElements,
                    {
                        y: 30,
                        opacity: 0,
                        skewY: 1,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        skewY: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: contentRef.current,
                            start: "top 65%",
                            end: "top 25%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            // Values title animation
            if (valuesTitleRef.current) {
                gsap.fromTo(
                    valuesTitleRef.current,
                    {
                        y: 60,
                        opacity: 0,
                        scale: 0.9,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: valuesTitleRef.current,
                            start: "top 70%",
                            end: "top 30%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            // Footer text animation
            if (footerTextRef.current) {
                gsap.fromTo(
                    footerTextRef.current,
                    {
                        y: 40,
                        opacity: 0,
                        scale: 0.95,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: footerTextRef.current,
                            start: "top 75%",
                            end: "top 25%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }

            // Subtle link hover effects
            const links = document.querySelectorAll("a");
            links.forEach((link) => {
                gsap.set(link, { transformOrigin: "center" });

                link.addEventListener("mouseenter", () => {
                    gsap.to(link, {
                        scale: 1.02,
                        duration: 0.2,
                        ease: "power2.out",
                    });
                });

                link.addEventListener("mouseleave", () => {
                    gsap.to(link, {
                        scale: 1,
                        duration: 0.2,
                        ease: "power2.out",
                    });
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-full bg-black relative pt-8">
            {/* All content removed - just empty black background */}
        </div>
    );
}
