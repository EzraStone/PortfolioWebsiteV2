# Portfolio Website Template

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This template provides a professional foundation for showcasing your skills, projects, and experience.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repo-url>
cd 
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization Guide

### 1. Personal Information

#### Update Hero Section
Edit `src/app/_components/hero.tsx`:
- Replace `[Your Name]` with your actual name
- Update the profile image source
- Modify the description text

#### Update About Section
Edit `src/app/_components/about.tsx`:
- Replace `[Your Name]` with your name
- Update university name and location
- Modify personal description
- Update image sources and descriptions

### 2. Experience

Edit `src/constants/experience.ts`:
- Replace company names with your actual employers
- Update job titles and descriptions
- Modify locations and time periods
- Add your actual responsibilities and achievements
- Update skills lists
- Replace placeholder links with real URLs

### 3. Projects

Edit `src/constants/projects.tsx`:
- Update project names and descriptions
- Replace GitHub URLs with your actual repositories
- Modify project images
- Update skills and technologies used
- Customize project periods and hackathon names





### 6. Workshops

Edit `src/constants/workshops.tsx`:
- Update workshop names and descriptions
- Modify concepts covered
- Add your actual workshop content
- Update dates and periods

### 7. Images

Replace placeholder image sources:
- Add your profile picture
- Include project screenshots
- Add team photos and event images
- Update all `src=""` attributes with actual image paths

### 8. Colors & Styling

Customize the color scheme:
- Update accent colors in components
- Modify gradient backgrounds
- Adjust text colors for better contrast
- Customize button and card styles

## File Structure

```
src/
├── app/                    # Next.js app directory
│   ├── _components/       # Page-specific components
│   │   ├── about.tsx     # About section
│   │   └── hero.tsx      # Hero section
│   ├── experience/        # Experience page
│   
│   ├── projects/          # Projects page

│   └── workshops/         # Workshops page
├── components/             # Reusable UI components
│   └── ui/               # UI components
├── constants/             # Content constants
│   ├── experience.ts     # Experience data
│   
│   ├── projects.tsx      # Projects data

│   └── workshops.tsx     # Workshops data
└── lib/                  # Utility functions
```
*Note**: This template has been designed to be easily customizable while maintaining professional quality. All personal information has been replaced with placeholder content that you can easily update with your own information.
