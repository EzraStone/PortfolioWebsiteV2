"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface TransitionWrapperProps {
    children: ReactNode;
}

export default function TransitionWrapper({
    children,
}: TransitionWrapperProps) {
    const pathname = usePathname();
    const isLandingPage = pathname === "/";

    // Reset fade classes when route changes
    useEffect(() => {
        // Only run on client side
        if (typeof window === "undefined") return;
        
        const contentContainer = document.querySelector(".content-container");
        if (contentContainer) {
            contentContainer.classList.remove("fade-out");
            contentContainer.classList.add("fade-in");

            const timeoutId = setTimeout(() => {
                contentContainer.classList.remove("fade-in");
            }, 800); // Default duration
            
            return () => clearTimeout(timeoutId);
        }
    }, [pathname]);

    // Render content on all pages
    return (
        <div className="content-container relative bg-black">
            {children}
        </div>
    );
}
