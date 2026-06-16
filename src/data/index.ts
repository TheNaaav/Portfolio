// assets
import travel from '../assets/travel.gif';
import square from '../assets/square.gif';
import thai from '../assets/thai.jpg';
import ScheduleOne from '../assets/ScheduleOne.png';
import iconCMTK from '../assets/iconCMTK.png';
import HackerNews from '../assets/HackerNews.png';
import starwar from '../assets/starwar.png';
import rakthai from '../assets/rakthai.png';

// social links
export const socialLinks = {
  github: 'https://github.com/TheNaaav',
  linkedin: 'https://www.linkedin.com/in/naruebet-singsathon-7b8337158/',
};

// project list
export const projects = {
  projects: [
    {
      name: "Rak Thai Massage & Spa",
      link: "https://rakthaimassage.se/",
      image: rakthai,
      category: "Client website",
      featured: true,
      description:
        "A polished business website built for a real massage and spa brand with clear services, contact paths, map integration and SEO-ready structure.",
      impact:
        "Built to help customers find services quickly and contact the business with fewer clicks.",
      techStack: ["React", "TypeScript", "Vercel", "Google Maps API", "SEO"],
    },
    {
      name: "Chiang Mai Thai Kitchen",
      link: "https://www.chiangmaithaikitchen.se/",
      image: iconCMTK,
      category: "Restaurant website",
      featured: true,
      description:
        "Responsive restaurant website focused on menu discovery, local visibility and a smooth mobile experience for guests.",
      impact:
        "Shows practical frontend delivery for a real business with maps, content structure and deployment.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel", "Google Maps API"],
    },
    {
      name: "ScheduleBoost",
      link: "https://www.nexusmods.com/schedule1/mods/213",
      codeLink: "https://github.com/TheNaaav/ScheduleBoost",
      image: ScheduleOne,
      category: "C# game tooling",
      featured: true,
      description:
        "An in-game mod menu for Schedule I built with C# and MelonLoader, adding productivity features through a custom GUI.",
      impact:
        "Demonstrates C#, runtime thinking, UI logic and comfort working close to application internals.",
      techStack: ["C#", ".NET", "MelonLoader", "Harmony", "UnityEngine"],
    },
    {
      name: "Hacker News Reader",
      link: "https://hacker-news-eta-one.vercel.app/",
      codeLink: "https://github.com/TheNaaav/HackerNews",
      image: HackerNews,
      category: "API application",
      description:
        "A focused Hacker News client for browsing stories and comments through the official API with a clean TypeScript structure.",
      impact:
        "Shows API integration, state handling, routing-level thinking and readable UI composition.",
      techStack: ["TypeScript", "SCSS", "Vercel", "Hacker News API"],
    },
    {
      name: "Star Wars Encyclopedia",
      link: "https://star-wars-encyclopedia-gamma.vercel.app/",
      codeLink: "https://github.com/TheNaaav/Star-Wars-Encyclopedia",
      image: starwar,
      category: "Data explorer",
      description:
        "A searchable encyclopedia experience that presents external API data in a visual, easy-to-scan interface.",
      impact:
        "Highlights component thinking, typed data rendering and frontend polish.",
      techStack: ["React", "TypeScript", "Vercel", "SWAPI"],
    },
    {
      name: "Mystery Travel",
      link: "https://mystery-travel.vercel.app/",
      image: travel,
      category: "AI concept",
      description:
        "A travel destination generator exploring how AI-assisted ideas can become playful, usable web experiences.",
      impact:
        "Shows curiosity for AI features, prompt-driven UX and fast product prototyping.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel", "AI API"],
    },
    {
      name: "Square Generator",
      link: "https://squaregenerator.vercel.app/",
      codeLink: "https://github.com/TheNaaav/SquareGenerator",
      image: square,
      category: "Creative tool",
      description:
        "A small interactive generator used to practice UI controls, layout behavior and fast deployment.",
      impact:
        "Shows iterative learning and comfort turning small ideas into working interfaces.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    },
    {
      name: "Sathon Thai Massage",
      link: "https://sathon-thaimassage.vercel.app/",
      image: thai,
      category: "Business website",
      description:
        "A responsive service website with clear presentation, contact flow and local business structure.",
      impact:
        "Reinforces real-world web delivery for small businesses.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel", "Google Maps API"],
    },
  ],
};

// skills list
export const skills = [
  { name: "React" },
  { name: "TypeScript" },
  { name: "C#" },
  { name: "ASP.NET" },
  { name: "REST APIs" },
  { name: "AI" },
  { name: "SQL Databases" },
  { name: "Tailwind CSS" },
  { name: "Microservices" },
  { name: "Responsive Design" },
  { name: "CMS" },
  { name: "JavaScript" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "GitHub" },
  { name: "Agile" },
  { name: "Vercel" },
];
