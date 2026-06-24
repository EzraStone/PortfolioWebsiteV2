"use client";
import Carousel from "@/components/ui/carousel";
import { InfoDialog } from "@/components/ui/info-dialog";
import { LinkPreview } from "@/components/ui/link-preview";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const aboutImages = [
    {
        title: "Portfolio Headshot",
        src: "",
        infoDialog: (
            <InfoDialog
                title="Portfolio Headshot"
                text="This is a professional headshot for your portfolio. Make sure it represents you well and is high quality."
                image=""
            />
        ),
    },
    {
        title: "University Tech Club Team",
        src: "",
        infoDialog: (
            <InfoDialog
                title="University Tech Club Team"
                text="This picture was taken at a major university hackathon event, where the team decided to have some fun with a themed photo. It was a great time and represents the collaborative spirit of the organization."
                image=""
            />
        ),
    },
    {
        title: "First Week in Tech Hub",
        src: "",
        infoDialog: (
            <InfoDialog
                title="First Week in Tech Hub"
                text="This picture was taken at a famous landmark in a major tech city, where I was able to lay eyes on the city where I'd be spending my summer while interning at a major tech company. I took the first week to explore the city and it was a great time. My excitement for the summer only grew greater as I took in the sights and the city."
                image=""
            />
        ),
    },
    {
        title: "First University Hackathon",
        src: "",
        infoDialog: (
            <InfoDialog
                title="First University Hackathon"
                text="This picture was taken at my very first university hackathon, which I attended during my first semester. It was a lot of fun and inspired me to learn more about tech, as well as step up and run the organization myself some day. I partnered up with a teammate to build an AI project, which was a lot of fun to build and use."
                image=""
            />
        ),
    },
    {
        title: "Engineering Outreach Event",
        src: "",
        infoDialog: (
            <InfoDialog
                title="Engineering Outreach Event"
                text="This picture was taken at an engineering outreach event at the university, where we were able to table for K-8 students to help them understand what a career in engineering is like. We were able to talk to over 100 students, and I was able to answer questions about my own experiences in the field. It was a great experience, and I was able to help a lot of students understand what a career in engineering is like."
                image=""
            />
        ),
    },
];

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
