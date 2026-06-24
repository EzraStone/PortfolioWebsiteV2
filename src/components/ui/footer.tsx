"use client";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconFileText,
} from "@tabler/icons-react";
import Link from "next/link";
import { NavbarLogo } from "./resizable-navbar";

export default function Footer() {
    // Smooth scroll to top handler
    const handleBackToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="w-full bg-black border-t border-[#2d0f0f] py-8 px-4 flex flex-col items-center gap-4">
            <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:justify-between gap-6">
                {/* Left: Logo */}
                <div className="w-full flex justify-center md:justify-start">
                    <NavbarLogo />
                </div>
                {/* Center: Made with love and Back to top */}
                <div className="w-full flex flex-col items-center order-3 md:order-none">
                    <button
                        onClick={handleBackToTop}
                        className="text-red-500 hover:text-red-400 underline text-sm transition-colors focus:outline-none"
                        aria-label="Back to top"
                    >
                        Back to top
                    </button>
                </div>
                <div className="w-full flex justify-center md:justify-end">
                    <div className="flex items-center gap-4">
                        <Link href="https://github.com/DVidal1205">
                            <div className="flex items-center p-2 rounded-md hover:bg-red-800 transition-colors">
                                <IconBrandGithub size={30} />
                            </div>
                        </Link>
                        <Link href="https://www.linkedin.com/in/ezrastone/">
                            <div className="flex items-center p-2 rounded-md hover:bg-red-800 transition-colors">
                                <IconBrandLinkedin size={30} />
                            </div>
                        </Link>
                        <Link href="#">
                            <div className="flex items-center p-2 rounded-md hover:bg-red-800 transition-colors">
                                <IconFileText size={30} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-xs text-foreground/60 mt-2">
                &copy; {new Date().getFullYear()} Ezra Stone. All rights
                reserved.
            </div>
        </footer>
    );
}
