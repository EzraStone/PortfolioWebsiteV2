import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume",
    description: "Resume",
};

export default function ResumePage() {
    return (
        <div style={{ minHeight: "100vh", width: "100vw", background: "#000", color: "#fff", margin: 0, padding: 0 }}>
            <iframe
                src="/Resume%20-%20Fall2025.pdf"
                style={{ width: "100vw", height: "100vh", border: "none", margin: 0, padding: 0, display: "block" }}
                title="Resume"
            />
        </div>
    );
}
