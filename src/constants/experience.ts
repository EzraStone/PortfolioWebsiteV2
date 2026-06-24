import { TimelineExperience } from "@/components/ui/experience-card";

export const experiences: TimelineExperience[] = [
    {
        id: "exp1",
        title: "President",
        company: "University Tech Club",
        period: "February 2024 - Present",
        location: "University City, State",
        description:
            "Leading a university software development organization focused on empowering aspiring developers and fostering a community of technologists. Managing operations, organizing events, and mentoring students.",
        responsibilities: [
            "Manage a non-profit organization with **500+** members and **$40,000** dollars in yearly revenue focused on creating confident, capable, and passionate developers.",
            "Organized major hackathon events for over **1500+** registrants and **547** attendees, with a total of **94** projects submitted.",
            "Lead a team of **45** students to achieve deliverables such as **60** technical workshops a year and **100+** member mentorship.",
            "Revamped the mentorship program, expanding the number of participants by **58%** compared to previous school year.",
            "Personally secured nearly **$25,000** for the organization by networking with numerous **Fortune 500** companies over 2 years.",
        ],
        achievements: [],
        images: [
            {
                src: "",
                title: "Tech Club Leadership",
            },
        ],
        companyLogo: "",
        colors: {
            cardColor: "#1a1939",
            accent: "#b981f5",
            textColor: "#e2e8f0",
        },
        links: [
            {
                label: "Tech Club Website",
                url: "https://example.com",
                icon: "external",
            },
        ],
        skills: [
            "Leadership",
            "Event Planning",
            "Team Management",
            "Fundraising",
            "Community Building",
            "Public Speaking",
            "Project Management",
            "Mentorship",
        ],
    },
    {
        id: "exp2",
        title: "Software Engineer Intern",
        company: "Tech Corporation",
        period: "May 2025 - Present",
        location: "Tech City, CA",
        description:
            "Contributing to the autonomous hardware recovery team for the company's mission control software, working on log analysis pipelines and real-time monitoring systems.",
        responsibilities: [
            "Contribute to the autonomous hardware recovery team for mission control software, the software layer for AI factories.",
            "Developed a log analysis pipeline that automatically identified and filtered noisy logs, reducing time-to-debug by **60%**.",
            "Leveraged fine-tuned language models to generate **semantic embeddings** for clustering and identifying noisy log patterns.",
            "Engineered a daily **CRON** service to generate noisy log reports and grep pattern files, streamlining daily debugging tasks.",
            "Integrated with real-time **Loki** logs from **Grafana**, and automatically published log anomalies to **Confluence** and **Slack** for immediate developer visibility.",
        ],
        achievements: [],
        images: [
            {
                src: "",
                title: "Tech Corporation",
            },
        ],
        companyLogo: "",
        colors: {
            cardColor: "#000000",
            accent: "#78bc04",
            textColor: "#ffffff",
        },
        links: [
            {
                label: "Company Website",
                url: "http://example.com/",
                icon: "external",
            },
        ],
        skills: [
            "Python",
            "Log Analysis",
            "Machine Learning",
            "Language Models",
            "CRON",
            "Loki",
            "Grafana",
            "Confluence",
            "Slack",
            "AI Infrastructure",
        ],
    },
    {
        id: "exp3",
        title: "Campus Expert",
        company: "GitHub",
        period: "May 2025 - Present",
        location: "University City, State",
        description:
            "As a GitHub Campus Expert for the university, interfacing with the GitHub education team to help bring software development resources to the local community.",
        responsibilities: [
            "Serve as an advocate for technologists and developers at the university.",
            "Plan events on-campus to help make software development accessible to the early-technologist community.",
            "Interface with GitHub Education as a Campus Expert to help bring resources and information to the local campus community.",
        ],
        achievements: [],
        images: [
            {
                src: "",
                title: "GitHub Campus Expert",
            },
        ],
        companyLogo: "",
        colors: {
            cardColor: "#f0f6fc",
            accent: "#d71e3c",
            textColor: "#0d1117",
        },
        links: [
            {
                label: "GitHub Campus Experts",
                url: "https://githubcampus.expert/experts",
                icon: "external",
            },
        ],
        skills: [
            "Community Building",
            "Event Planning",
            "GitHub",
            "Education",
            "Public Speaking",
            "Networking",
            "Student Advocacy",
        ],
    },
    {
        id: "exp4",
        title: "Software Engineer Intern",
        company: "Startup Systems",
        period: "December 2024 - April 2025",
        location: "University City, State",
        description:
            "Researched AI and robotics technologies for crisis and natural disaster search and rescue. Worked on computer vision and inventory management systems.",
        responsibilities: [
            "Researched AI and robotics technologies for crisis and natural disaster search and rescue.",
            "Developed an internal inventory management system, reducing unnecessary wasteful restock purchases by **40%**.",
            "Trained custom **YOLOv8** object detection models with a resulting **97%** accuracy in recognizing target objects.",
            "Aided in securing pre-seed funding by contributing to multiple high-impact technical projects across the company.",
        ],
        achievements: [],
        images: [
            {
                src: "",
                title: "Startup Systems",
            },
        ],
        companyLogo: "",
        colors: {
            cardColor: "#ffffff",
            accent: "#be3626",
            textColor: "#000000",
        },
        links: [
            {
                label: "Company Website",
                url: "https://example.com",
                icon: "external",
            },
        ],
        skills: [
            "Python",
            "Computer Vision",
            "YOLOv8",
            "Machine Learning",
            "Robotics",
            "AI Research",
            "Inventory Management",
            "Embedded Systems",
        ],
    },
    {
        id: "exp5",
        title: "Founding Engineer",
        company: "StudentDevs LLC.",
        period: "April 2024 - January 2025",
        location: "University City, State",
        description:
            "As a co-founder of StudentDevs, creating high-quality website solutions for businesses packaged with analytics and SEO optimization. Serving as a platform for aspiring student developers to gain real-world experience.",
        responsibilities: [
            "Empowered businesses with powerful insights and uplifted students with contracted work opportunities.",
            "Developed a business facing dashboard with real time analytics, billing, and a ticketing system for routine maintenance.",
            "Hosted and deployed open source analytics, authentication, and database on a Linux VPS.",
            "Managed a team of contracted freelance developers sourced from local colleges and universities.",
            "Partnered with businesses of various sizes throughout the region to provide web development services.",
        ],
        achievements: [],
        images: [
            {
                src: "",
                title: "StudentDevs LLC.",
            },
        ],
        companyLogo: "",
        colors: {
            cardColor: "#1e293b",
            accent: "#3b82f6",
            textColor: "#f8fafc",
        },
        links: [
            {
                label: "StudentDevs Website",
                url: "https://studentdevs.com",
                icon: "external",
            },
        ],
        skills: [
            "Full-Stack Development",
            "React",
            "Node.js",
            "PostgreSQL",
            "Linux VPS",
            "Business Development",
            "Team Management",
            "Analytics",
            "SEO",
        ],
    },
    {
        id: "exp6",
        title: "Research Assistant",
        company: "University Research Lab",
        period: "September 2024 - December 2024",
        location: "University City, State",
        description:
            "Conducted research on machine learning algorithms for natural language processing, focusing on transformer models and their applications in educational technology.",
        responsibilities: [
            "Implemented and fine-tuned transformer models for educational content analysis and recommendation systems.",
            "Developed data preprocessing pipelines for large-scale text datasets, improving model training efficiency by **35%**.",
            "Collaborated with education researchers to design experiments evaluating the effectiveness of AI-powered learning tools.",
            "Published findings in university research symposium and contributed to grant proposal writing.",
            "Mentored undergraduate students in machine learning fundamentals and research methodologies.",
        ],
        achievements: [
            "Reduced model training time by **35%** through optimized data preprocessing",
            "Presented research at 3 university symposiums",
            "Received Outstanding Research Assistant award",
        ],
        images: [
            {
                src: "",
                title: "Research Lab",
            },
        ],
        companyLogo: "",
        colors: {
            cardColor: "#0f172a",
            accent: "#06b6d4",
            textColor: "#f1f5f9",
        },
        links: [
            {
                label: "Research Publications",
                url: "https://university.edu/research",
                icon: "external",
            },
        ],
        skills: [
            "Machine Learning",
            "Natural Language Processing",
            "Transformer Models",
            "Python",
            "PyTorch",
            "Data Preprocessing",
            "Research Methodology",
            "Academic Writing",
            "Mentorship",
        ],
    },
    {
        id: "exp7",
        title: "Software Development Intern",
        company: "Local Tech Startup",
        period: "June 2024 - August 2024",
        location: "Startup City, State",
        description:
            "Worked on a team developing a mobile application for local business discovery and promotion, focusing on user experience and backend API development.",
        responsibilities: [
            "Developed RESTful APIs using Node.js and Express for the mobile application backend.",
            "Implemented user authentication and authorization systems with JWT tokens and OAuth integration.",
            "Designed and optimized database schemas using MongoDB, improving query performance by **45%**.",
            "Collaborated with mobile developers to ensure seamless integration between frontend and backend services.",
            "Participated in agile development processes including daily standups, sprint planning, and code reviews.",
        ],
        achievements: [
            "Improved API response time by **45%** through database optimization",
            "Successfully deployed application to production environment",
            "Received positive feedback from senior developers on code quality",
        ],
        images: [
            {
                src: "",
                title: "Local Tech Startup",
            },
        ],
        companyLogo: "",
        colors: {
            cardColor: "#fef3c7",
            accent: "#f59e0b",
            textColor: "#92400e",
        },
        links: [
            {
                label: "Company App",
                url: "https://startup.com/app",
                icon: "external",
            },
        ],
        skills: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "RESTful APIs",
            "JWT Authentication",
            "OAuth",
            "Agile Development",
            "Mobile Development",
            "Database Design",
        ],
    },
    {
        id: "exp8",
        title: "Teaching Assistant",
        company: "Computer Science Department",
        period: "January 2024 - May 2024",
        location: "University City, State",
        description:
            "Assisted professors in teaching introductory computer science courses, helping students understand fundamental programming concepts and problem-solving techniques.",
        responsibilities: [
            "Led weekly discussion sections for 3 different computer science courses with 25+ students each.",
            "Graded programming assignments and provided detailed feedback to help students improve their coding skills.",
            "Held office hours to provide one-on-one assistance with programming concepts and debugging issues.",
            "Developed supplementary learning materials including practice problems and coding examples.",
            "Collaborated with other teaching assistants to maintain consistency in grading and instruction across sections.",
        ],
        achievements: [
            "Received 4.8/5.0 student evaluation rating",
            "Helped improve average class performance by **12%**",
            "Recognized as Outstanding Teaching Assistant by department",
        ],
        images: [
            {
                src: "",
                title: "Computer Science Department",
            },
        ],
        companyLogo: "",
        colors: {
            cardColor: "#ecfdf5",
            accent: "#10b981",
            textColor: "#065f46",
        },
        links: [
            {
                label: "Course Materials",
                url: "https://university.edu/cs101",
                icon: "external",
            },
        ],
        skills: [
            "Teaching",
            "Programming Fundamentals",
            "Python",
            "Java",
            "Problem Solving",
            "Student Mentorship",
            "Curriculum Development",
            "Public Speaking",
            "Assessment",
        ],
    },
];
