import { Metadata } from "next";

const pageTitle = "Ezra Stone";
const pageDescription =
    "A collection of my software engineering projects, showcasing my skills in AI, web development, and more.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: "https://billybob.dev/projects",
        type: "website",
        images: [
            {
                url: "",
                alt: pageTitle,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
        images: [""],
    },
};

import ProjectCard, { type ProjectData } from "@/components/ui/project-card";
import ProjectPanel from "@/components/ui/project-panel";
import { projects } from "@/constants/projects";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-black pt-20 md:pt-24 pb-4 md:pb-20">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                    {projects.slice(0, 4).map((project: ProjectData, index: number) => (
                        <div
                            key={project.id}
                            className="w-full animate-fade-up animate-duration-[800ms] animate-delay-[100ms]"
                            style={{
                                animationDelay: `${150 * index + 400}ms`,
                                transformOrigin: "center",
                            }}
                        >
                            <ProjectCard
                                project={project}
                                projectId={project.id}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* SEO: Comprehensive project information for search engines */}
            <section className="sr-only">
                <h2>Portfolio Projects - Complete Details</h2>
                {projects.map((project: ProjectData) => (
                    <article key={project.id}>
                        <h3>{project.title}</h3>
                        <p>
                            <strong>Period:</strong> {project.period}
                        </p>
                        <p>
                            <strong>Description:</strong> {project.description}
                        </p>
                        <div>
                            <h4>Detailed Information</h4>
                            <p>{project.longDescription}</p>
                        </div>
                        <div>
                            <h4>Technologies & Skills</h4>
                            <ul>
                                {project.skills.map((skill: string) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            {project.links && <h4>Project Links</h4>}
                            <ul>
                                {project.links?.map(
                                    (
                                        link: {
                                            label: string;
                                            url: string;
                                            icon: string;
                                        },
                                        index: number
                                    ) => (
                                        <li key={index}>
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </article>
                ))}
            </section>

            {/* Client-side interactive panel */}
            <ProjectPanel projects={projects} />
        </div>
    );
}
