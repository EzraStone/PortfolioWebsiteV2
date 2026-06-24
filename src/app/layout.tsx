import FriendDetector from "@/components/layout/friend-detector";
import TransitionWrapper from "@/components/layout/transition-wrapper";
import { NavbarHome } from "@/components/ui/navbar";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist_Mono, Sora } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ezra Stone",
    description:
        "Software Engineer at NVIDIA, President of Knight Hacks, and 3rd Year Computer Science Student at UCF. Passionate about helping others break into tech, and building impactful performant software.",
    keywords: [
        "ezra Stone",
        "Software Engineer",
        "NVIDIA",
        "Knight Hacks",
        "AI Research",
        "Computer Vision",
        "Machine Learning",
        "UCF",
        "University of Central Florida",
        "GitHub Campus Expert",
        "Python",
        "React",
        "Next.js",
        "Computer Science",
    ],
    authors: [{ name: "Billy Bob" }],
    creator: "Billy Bob",
    publisher: "Billy Bob",

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://billybob.dev",
        title: "Ezra Stone",
        description:
            "Software Engineer at NVIDIA, President of Knight Hacks, and 3rd Year Computer Science Student at UCF. Passionate about helping others break into tech, and building impactful performant software.",
        siteName: "Billy Bob",
        images: [
            {
                url: "/favicon.ico",
                alt: "Billy Bob - Software Engineer",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${sora.variable} ${geistMono.variable} antialiased w-screen max-w-screen overflow-x-hidden`}
                style={{ backgroundColor: '#000000' }}
            >
                <Suspense fallback={null}>
                    <FriendDetector />
                </Suspense>
                <NavbarHome />
                <main>
                    <TransitionWrapper>{children}</TransitionWrapper>
                </main>
                <Analytics />
            </body>
        </html>
    );
}
