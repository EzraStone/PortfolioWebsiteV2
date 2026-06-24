"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useInView } from "framer-motion";
import {
    Building,
    Calendar,
    ChevronDown,
    ExternalLink,
    Github,
    MapPin,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export interface TimelineExperience {
    id: string;
    title: string;
    company: string;
    period: string;
    location: string;
    description: string;
    responsibilities: string[];
    achievements: string[];
    images: {
        src: string;
        title: string;
    }[];
    companyLogo?: string;
    colors: {
        cardColor: string;
        accent: string;
        textColor: string;
    };
    links: {
        label: string;
        url: string;
        icon: "github" | "external";
    }[];
    skills: string[];
}

interface ExperienceCardProps {
    experience: TimelineExperience;
    index: number;
    isLast: boolean;
}

export default function ExperienceCard({
    experience,
}: ExperienceCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useInView(ref, { once: true, margin: "-50px" });

    const renderIcon = (iconType: "github" | "external") => {
        return iconType === "github" ? (
            <Github className="h-4 w-4" />
        ) : (
            <ExternalLink className="h-4 w-4" />
        );
    };

    // Combine responsibilities and achievements
    const combinedItems = [
        ...experience.responsibilities,
        ...experience.achievements,
    ];

    return (
        <div
            ref={ref}
            className="relative mb-8 md:mb-12 border border-gray-600 rounded-lg p-6 bg-gray-900"
        >
            {/* Simple Card Layout */}
            <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">
                    {experience.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-3">
                    <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        <span>{experience.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                    </div>
                </div>
                <p className="text-gray-300 mb-4">
                    {experience.description}
                </p>
            </div>

            {/* Skills */}
            <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Skills:</h4>
                <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                        <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs"
                        >
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Expandable Content */}
            <Button
                variant="outline"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full"
            >
                {isExpanded ? "Show Less" : "Show More Details"}
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </Button>

            {/* Expanded Content */}
            {isExpanded && (
                <div className="mt-4 pt-4 border-t border-gray-600">
                    <h4 className="text-sm font-semibold text-white mb-2">Responsibilities & Achievements:</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        {combinedItems.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    
                    {/* Links */}
                    {experience.links && experience.links.length > 0 && (
                        <div className="mt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Links:</h4>
                            <div className="flex flex-wrap gap-2">
                                {experience.links.map((link, i) => (
                                    <Link
                                        key={i}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Badge variant="outline" className="text-xs cursor-pointer">
                                            {renderIcon(link.icon)}
                                            {link.label}
                                        </Badge>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
