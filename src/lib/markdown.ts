import fs from "fs";
import path from "path";

export function readProjectMarkdown(projectId: string): string {
    const filePath = path.join(
        process.cwd(),
        "src",
        "constants",
        "projects",
        `${projectId}.md`
    );

    if (!fs.existsSync(filePath)) {
        console.warn(
            `Project markdown file not found for project ${projectId}: ${filePath}`
        );
        return "";
    }

    try {
        return fs.readFileSync(filePath, "utf-8");
    } catch (error) {
        console.warn(
            `Could not read markdown file for project ${projectId}:`,
            error
        );
        return "";
    }
}

export function getAllProjectIds(): string[] {
    try {
        const projectsDir = path.join(
            process.cwd(),
            "src",
            "constants",
            "projects"
        );
        const files = fs.readdirSync(projectsDir);
        return files
            .filter((file) => file.endsWith(".md"))
            .map((file) => file.replace(".md", ""));
    } catch (error) {
        console.warn("Could not read projects directory:", error);
        return [];
    }
}
