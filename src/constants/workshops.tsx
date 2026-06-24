export interface WorkshopItem {
    name: string;
    description: string;
    date: string;
    image: string;
    conceptsCovered: string[];
    youtubeLink: string;
    infoDialog?: React.ReactNode;
}

export const workshops: WorkshopItem[] = [
    {
        name: "Full Stack Development",
        description: "Learn the fundamentals of building complete web applications from frontend to backend.",
        date: "Spring 2025",
        image: "",
        conceptsCovered: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Full Stack",
            "Web Development",
        ],
        youtubeLink: "#",
    },
    {
        name: "Web Development Fundamentals",
        description: "Master the basics of HTML, CSS, and JavaScript to create responsive and interactive websites.",
        date: "Spring 2025",
        image: "",
        conceptsCovered: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design",
            "Web Fundamentals",
        ],
        youtubeLink: "#",
    },
    {
        name: "Self-Hosting Services",
        description: "Learn how to host your own services and applications on your own infrastructure.",
        date: "Spring 2025",
        image: "",
        conceptsCovered: [
            "Docker",
            "Linux",
            "Server Management",
            "DevOps",
            "Infrastructure",
        ],
        youtubeLink: "#",
    },
    {
        name: "Frontend Engineering",
        description: "Advanced frontend development techniques and modern frameworks for building scalable applications.",
        date: "Spring 2025",
        image: "",
        conceptsCovered: [
            "React",
            "TypeScript",
            "Modern Frameworks",
            "Frontend Architecture",
            "Performance Optimization",
        ],
        youtubeLink: "#",
    },
    {
        name: "Modern UI/UX Development",
        description: "Building modern user interfaces with cutting-edge frontend technologies and best practices.",
        date: "Spring 2025",
        image: "",
        conceptsCovered: [
            "Modern UI/UX",
            "Component Design",
            "State Management",
            "Frontend Testing",
            "Accessibility",
        ],
        youtubeLink: "#",
    },
    {
        name: "Database Design and Management",
        description: "Learn database design principles, SQL, and modern database technologies for web applications.",
        date: "Spring 2025",
        image: "",
        conceptsCovered: [
            "SQL",
            "Database Design",
            "Data Modeling",
            "Database Management",
            "Performance Tuning",
        ],
        youtubeLink: "#",
    },
    {
        name: "Graphical User Interface Development",
        description: "Create intuitive and beautiful user interfaces using modern design principles and tools.",
        date: "Spring 2025",
        image: "",
        conceptsCovered: [
            "UI/UX Design",
            "Design Systems",
            "User Research",
            "Prototyping",
            "Visual Design",
        ],
        youtubeLink: "#",
    },
    {
        name: "Advanced Frontend Concepts",
        description: "Summer session covering advanced frontend concepts and modern development workflows.",
        date: "Summer 2024",
        image: "",
        conceptsCovered: [
            "Advanced React",
            "Modern JavaScript",
            "Build Tools",
            "Frontend Workflows",
            "Performance",
        ],
        youtubeLink: "#",
    },
];
