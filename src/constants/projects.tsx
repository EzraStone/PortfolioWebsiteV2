import { InfoDialog } from "@/components/ui/info-dialog";
import { ProjectData } from "@/components/ui/project-card";
import { readProjectMarkdown } from "@/lib/markdown";

export const projects: ProjectData[] = [
    {
        id: "uctp",
        title: "Uncorrelated Orbital Track Processing",
        period: "Air Force Research Lab / Space Force",
        description:
            "Developing a benchmarking framework for Uncorrelated Track Processing (UCTP) algorithms to estimate satellite orbits from sparse optical observations. Implemented a Modified Gauss Method and Herrick–Gibbs method pipeline in Python to derive orbital state vectors from three-angle measurements, using Orekit for coordinate frame conversions and orbit propagation. Designed data generation tools to standardize and simulate observation datasets, incorporated batch least-squares refinement to improve accuracy, and created automated performance reports using custom orbital accuracy metrics to enable objective comparison of different UCTP algorithms.",
        longDescription: readProjectMarkdown("uctp"),
        images: [
            {
                src: "cSoon.jpg",
                title: "Uncorrelated Orbital Track Processing",
            },
        ],
        colors: {
            cardBackground: "#1a0f0f",
            cardText: "#FFFFFF",
            panelBackground: "#1a0f0f",
            panelText: "#FFFFFF",
            accent: "#ff0000",
        },
        links: [
            {
                label: "LinkedIn",
                url: "https://www.linkedin.com/in/ezra-stone-724422306",
                icon: "external",
            },
            {
                label: "UCTP Repository",
                url: "https://github.com/CiboAtlas/UNCORRELATED-TRACK-PROCESSING",
                icon: "github",
            },
        ],
        skills: [
            "Python",
            "Orekit",
            "Orbital Mechanics",
            "Satellite Tracking",
            "Data Analysis",
            "Algorithm Development",
            "Scientific Computing",
            "Coordinate Systems",
            "Least Squares",
            "Space Technology",
            "Research & Development",
            "OpenEvolve",
            "HTML",
            "CSS",
            "JavaScript",
            "React",
        ],
    },
    {
        id: "chaos-visualizer",
        title: "Chaos Equations Visualizer",
        period: "Personal Project",
        description:
            "The Chaos Equations Visualizer is an interactive web application designed to explore and visualize chaotic systems through real-time simulations. It provides dynamic plots of chaos equations, allowing users to adjust parameters such as initial conditions, time steps, and resolution to observe how these changes affect system behavior. With a user-friendly interface, the application makes experimenting with complex mathematical behaviors accessible for both beginners and advanced users. The project is built using HTML, CSS, and JavaScript for the frontend, with Node.js for local development, and leverages JavaScript visualization libraries such as Plotly or D3.js to render dynamic simulations. It serves as an educational tool for understanding the fascinating and unpredictable nature of chaotic systems.",
        longDescription: readProjectMarkdown("chaos-visualizer"),
        images: [
            {
                src: "halvorsenSys.png",
                title: "Halvorsen System",
            },
            {
                src: "chaosViz.mp4",
                title: "Chaos Equations Visualizer",
            },
            {
                src: "thomasSys.png",
                title: "Thomas System",
            },
        ],
        colors: {
            cardBackground: "#1a0f0f",
            cardText: "#FFFFFF",
            panelBackground: "#1a0f0f",
            panelText: "#FFFFFF",
            accent: "#ff0000",
        },
        links: [
            {
                label: "GitHub Repository",
                url: "https://github.com/EzraStone/Chaos-Equations-Visualizer",
                icon: "github",
            },
            {
                label: "Live Demo",
                url: "https://chaos-equations-visualizer.vercel.app/",
                icon: "external",
            },
        ],
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Vercel",
            "Data Visualization",
            "Mathematical Modeling",
            "Interactive Web Apps",
        ],
    },
    {
        id: "recipe generator",
        title: "Recipe Generator",
        period: "University Hackathon",
        description:
            "The Recipe Generator is a web application designed to suggest smart ingredient substitutions for items you already have in your kitchen. Using AI, it provides personalized recommendations that account for dietary restrictions, allergens, and flavor compatibility, helping users create delicious and safe meals. By analyzing the ingredients you input, the AI identifies suitable alternatives and suggests combinations that maintain the intended taste and texture of the dish. The platform offers an intuitive, user-friendly interface, making it easy to experiment with recipes, reduce food waste, and explore new culinary possibilities.",
        longDescription: readProjectMarkdown("recipe generator"),
        images: [
            {
                src: "recGen.png",
                title: "Sign in/up page",
            },
            {
                src: "smartSwap.png",
                title: "AI Smart Swap feature",
            },
            {
                src: "settingRec.png",
                title: "Health Settings",
            },
        ],
        colors: {
            cardBackground: "#1a0f0f",
            cardText: "#FFFFFF",
            panelBackground: "#1a0f0f",
            panelText: "#FFFFFF",
            accent: "#ff0000",
        },
        links: [
            {
                label: "Recipe Generator Repository",
                url: "https://github.com/EzraStone/Recipe-Generator",
                icon: "github",
            },
            {
                label: "Recipe Generator Website",
                url: "https://ingredientimposter.xyz/",
                icon: "external",
            },
        ],
        skills: [
            "AI",
            "Next.js",
            "MongoDB",
            "React",
            "Express",
            "JavaScript",
            "HTML",
            "CSS",
        ],
    },
    {
        id: "hanoi-visualizer",
        title: "Tower of Hanoi State Space Visualizer",
        period: "Personal Project",
        description:
            "An interactive web application for visualizing the state space and solution paths of the Tower of Hanoi puzzle. Users can explore all possible moves, see optimal solutions, and understand the recursive nature of the problem through dynamic, animated graphs and step-by-step walkthroughs.",
        longDescription: readProjectMarkdown("hanoi-visualizer"),
        images: [
            {
                src: "cSoon.jpg",
                title: "Tower of Hanoi State Space Visualizer",
            },
        ],
        colors: {
            cardBackground: "#1a0f0f",
            cardText: "#FFFFFF",
            panelBackground: "#1a0f0f",
            panelText: "#FFFFFF",
            accent: "#ff0000",
        },
        links: [
            {
                label: "GitHub Repository",
                url: "https://github.com/EzraStone/State-Space",
                icon: "github",
            },
            {
                label: "Live Demo",
                url: "https://state-space-eight.vercel.app/",
                icon: "external",
            },
        ],
        skills: [
            "JavaScript",
            "HTML",
            "CSS",
            "Vercel",
            "Data Visualization",
            "Algorithm Animation",
            "Web Development",
            "Interactive UI",
        ],
    },
    {
        id: "forge",
        title: "Forge",
        period: "Personal Project",
        description:
            "A comprehensive project management and collaboration platform designed for software development teams, featuring task tracking, version control integration, and team communication tools.",
        longDescription: readProjectMarkdown("forge"),
        images: [
            {
                src: "cSoon.jpg",
                title: "Forge",
            },
            {
                src: "cSoon.jpg",
                title: "Forge Blade",
            },
            {
                src: "cSoon.jpg",
                title: "Forge 2025",
            },
            {
                src: "cSoon.jpg",
                title: "Forge Guild",
            },
            {
                src: "cSoon.jpg",
                title: "Forge Club",
            },
        ],
        colors: {
            cardBackground: "#1a0f0f",
            cardText: "#FFFFFF",
            panelBackground: "#1a0f0f",
            panelText: "#FFFFFF",
            accent: "#ff0000",
        },
        links: [
            {
                label: "Forge Repository",
                url: "https://github.com/example/forge",
                icon: "github",
            },
        ],
        skills: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Socket.io",
            "JWT Authentication",
            "Real-time Updates",
            "Project Management",
        ],
    },
    {
        id: "lootcode",
        title: "Lootcode",
        period: "University Projects Showcase",
        description:
            "A gamified Data Structures and Algorithms learning platform that makes learning DSA concepts fun and engaging through interactive challenges and rewards.",
        longDescription: readProjectMarkdown("lootcode"),
        images: [
            {
                src: "cSoon.jpg",
                title: "Lootcode",
            },
            {
                src: "cSoon.jpg",
                title: "Lootcode Dashboard",
                infoDialog: (
                    <InfoDialog
                        title="Lootcode Dashboard"
                        text="The main dashboard where users can track their progress, view available challenges, and manage their learning journey."
                        image=""
                    />
                ),
            },
            {
                src: "cSoon.jpg",
                title: "Lootcode Game",
            },
            {
                src: "cSoon.jpg",
                title: "Lootcode Map",
                infoDialog: (
                    <InfoDialog
                        title="Lootcode Map"
                        text="An interactive map showing the user's progress through different DSA concepts and challenges."
                        image=""
                    />
                ),
            },
            {
                src: "cSoon.jpg",
                title: "Lootcode Items",
            },
            {
                src: "cSoon.jpg",
                title: "Lootcode Combat",
            },
            {
                src: "cSoon.jpg",
                title: "Lootcode Leaderboard",
                infoDialog: (
                    <InfoDialog
                        title="Lootcode Leaderboard"
                        text="A competitive leaderboard showing top performers and encouraging friendly competition among learners."
                        image=""
                    />
                ),
            },
            {
                src: "cSoon.jpg",
                title: "Lootcode Article",
            },
        ],
        colors: {
            cardBackground: "#1a0f0f",
            cardText: "#FFFFFF",
            panelBackground: "#1a0f0f",
            panelText: "#FFFFFF",
            accent: "#ff0000",
        },
        links: [
            {
                label: "Lootcode Repository",
                url: "https://github.com/example/lootcode",
                icon: "github",
            },
            {
                label: "Lootcode Website",
                url: "https://lootcode.tech",
                icon: "external",
            },
        ],
        skills: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Gamification",
            "Educational Technology",
            "DSA",
            "Interactive Learning",
        ],
    },
    {
        id: "as-quant",
        title: "AS-Quant",
        period: "Personal Project",
        description:
            "A quantitative analysis tool for algorithmic trading strategies, featuring backtesting capabilities, risk management tools, and performance analytics.",
        longDescription: readProjectMarkdown("as-quant"),
        images: [
            {
                src: "cSoon.jpg",
                title: "AS-Quant",
            },
        ],
        colors: {
            cardBackground: "#1a0f0f",
            cardText: "#FFFFFF",
            panelBackground: "#1a0f0f",
            panelText: "#FFFFFF",
            accent: "#ff0000",
        },
        links: [
            {
                label: "AS-Quant Repository",
                url: "https://github.com/example/as-quant",
                icon: "github",
            },
        ],
        skills: [
            "Python",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Quantitative Finance",
            "Algorithmic Trading",
            "Data Analysis",
            "Risk Management",
        ],
    },
    {
        id: "wildspace-web",
        title: "Wildspace Web",
        period: "University Hackathon",
        description:
            "A web-based D&D character creation and management tool that helps players create, customize, and manage their characters for tabletop role-playing games.",
        longDescription: readProjectMarkdown("wildspace-web"),
        images: [
            {
                src: "cSoon.jpg",
                title: "Wildspace Web",
            },
            {
                src: "cSoon.jpg",
                title: "Wildspace Web Character",
            },
            {
                src: "cSoon.jpg",
                title: "Wildspace Web Creation",
            },
            {
                src: "cSoon.jpg",
                title: "Wildspace Web Pricing",
            },
        ],
        colors: {
            cardBackground: "#1a0f0f",
            cardText: "#FFFFFF",
            panelBackground: "#1a0f0f",
            panelText: "#FFFFFF",
            accent: "#ff0000",
        },
        links: [
            {
                label: "Wildspace Web Repository",
                url: "https://github.com/example/wildspace-web",
                icon: "github",
            },
            {
                label: "Wildspace Web DevPost",
                url: "https://devpost.com/software/wildspace-web",
                icon: "external",
            },
        ],
        skills: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "D&D API",
            "Character Management",
            "Gaming Tools",
            "Web Development",
        ],
    },
    {
        id: "wildspace-desktop",
        title: "Wildspace Desktop",
        period: "Personal Project",
        description:
            "A desktop application version of Wildspace, providing offline character management capabilities and enhanced features for D&D players.",
        longDescription: readProjectMarkdown("project-wildspace"),
        images: [
            {
                src: "cSoon.jpg",
                title: "Wildspace Desktop App",
            },
            {
                src: "cSoon.jpg",
                title: "Wildspace Desktop Landing",
            },
            {
                src: "cSoon.jpg",
                title: "Wildspace Desktop Team",
            },
            {
                src: "cSoon.jpg",
                title: "Wildspace Desktop Pitch",
            },
        ],
        colors: {
            cardBackground: "#1a0f0f",
            cardText: "#FFFFFF",
            panelBackground: "#1a0f0f",
            panelText: "#FFFFFF",
            accent: "#ff0000",
        },
        links: [
            {
                label: "Wildspace Desktop Repository",
                url: "https://github.com/example/wildspace-desktop",
                icon: "github",
            },
        ],
        skills: [
            "Electron",
            "React",
            "Node.js",
            "Desktop Development",
            "Cross-platform",
            "D&D Tools",
            "Character Management",
        ],
    },
    {
        id: "event-bot",
        title: "Event Bot",
        period: "Personal Project",
        description:
            "A Discord bot designed to help manage and organize events, featuring automated reminders, participant tracking, and event scheduling capabilities.",
        longDescription: readProjectMarkdown("ucf-activities-bot"),
        images: [
            {
                src: "cSoon.jpg",
                title: "Event Bot",
            },
        ],
        colors: {
            cardBackground: "#1a0f0f",
            cardText: "#FFFFFF",
            panelBackground: "#1a0f0f",
            panelText: "#FFFFFF",
            accent: "#ff0000",
        },
        links: [
            {
                label: "Event Bot Repository",
                url: "https://github.com/example/event-bot",
                icon: "github",
            },
        ],
        skills: [
            "Discord.js",
            "Node.js",
            "Bot Development",
            "Event Management",
            "Automation",
            "Discord API",
        ],
    },
    {
        id: "dnd-ttk",
        title: "D&D TTK",
        period: "Personal Project",
        description:
            "A D&D combat calculator and time-to-kill analysis tool that helps players optimize their character builds and combat strategies.",
        longDescription: readProjectMarkdown("dndttk"),
        images: [
            {
                src: "cSoon.jpg",
                title: "D&D TTK",
            },
        ],
        colors: {
            cardBackground: "#1a0f0f",
            cardText: "#FFFFFF",
            panelBackground: "#1a0f0f",
            panelText: "#FFFFFF",
            accent: "#ff0000",
        },
        links: [
            {
                label: "D&D TTK Repository",
                url: "https://github.com/example/dnd-ttk",
                icon: "github",
            },
        ],
        skills: [
            "Python",
            "D&D Mechanics",
            "Combat Analysis",
            "Character Optimization",
            "Gaming Tools",
            "Data Analysis",
        ],
    },
    {
        id: "wordle",
        title: "Wordle Desktop",
        period: "Personal Project",
        description:
            "A desktop version of the popular Wordle game, featuring offline play, custom word lists, and enhanced gameplay features.",
        longDescription: readProjectMarkdown("wordle-desktop"),
        images: [
            {
                src: "cSoon.jpg",
                title: "Wordle",
            },
        ],
        colors: {
            cardBackground: "#1a0f0f",
            cardText: "#FFFFFF",
            panelBackground: "#1a0f0f",
            panelText: "#FFFFFF",
            accent: "#ff0000",
        },
        links: [
            {
                label: "Wordle Desktop Repository",
                url: "https://github.com/example/wordle-desktop",
                icon: "github",
            },
        ],
        skills: [
            "Electron",
            "React",
            "Game Development",
            "Desktop Apps",
            "Word Games",
            "Cross-platform",
        ],
    },
];
