
// assets
import travel from '../assets/travel.gif';
import square from '../assets/square.gif';
import thai from '../assets/thai.jpg';
import ScheduleOne from '../assets/ScheduleOne.png';
import iconCMTK from '../assets/iconCMTK.png';
import HackerNews from '../assets/HackerNews.png';
import starwar from '../assets/starwar.png';



// social links
export const socialLinks = {
  github: 'https://github.com/TheNaaav',
  linkedin: 'https://www.linkedin.com/in/naruebet-singsathon-7b8337158/',
};

// project list
export const projects = {
  projects: [
    {
      name: "Star Wars Encyclopedia",
      link: "https://star-wars-encyclopedia-gamma.vercel.app/",
      image: starwar,
      description: "A fun project to explore the Star Wars universe.",
      techStack: ["React", "TypeScript", "Vercel", "SWAPI"]
    },
    {
      name: "Hacker News",
      link: "https://hacker-news-eta-one.vercel.app/",
      image: HackerNews,
      description: " A simple Hacker News client to browse top stories and comments.",
      techStack: ["TypeScript", "SCSS", "Vercel", "Hacker News API"]
    },
    {
      name: "Chiang Mai Thai Kitchen",
      link: "https://www.chiangmaithaikitchen.se/",
      image: iconCMTK,
      description: "Restaurant website for Chiang Mai Thai Kitchen",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel", "Google Maps API"]
    },
    {
      name: "ScheduleBoost – Mod Menu for Schedule I",
      link: "https://www.nexusmods.com/schedule1/mods/213",
      image: ScheduleOne,
      description:
        "A powerful in-game mod menu for Schedule I. Built with MelonLoader, it adds features like instant crafting, XP boosts, teleportation, and item spawning via a custom GUI.",
      techStack: ["C#", ".NET", "MelonLoader", "Harmony", "UnityEngine (Il2Cpp)"]
    },
    {
      name: "Mystery-Travel",
      link: "https://mystery-travel.vercel.app/",
      image: travel,
      description: "Fun travel destination generator",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel", "AI API"]
    },
    {
      name: "SquareGenerator",
      link: "https://squaregenerator.vercel.app/",
      image: square,
      description: "Testing square generator",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel"]
    },
    {
      name: "Sathon Thai Massage",
      link: "https://sathon-thaimassage.vercel.app/",
      image: thai,
      description: "Professional massage",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel", "Google Maps API"]
    }
  ],
};

// skills list
export const skills = [
  { name: "React" },
  { name: "Tailwind CSS" },
  { name: "TypeScript" },
  { name: "ASP.NET" },
  { name: "SQL Databases" },
  { name: "Web API" },
  { name: "C#" },
  { name: "Microservices" },
  { name: "Responsive Design" },
  { name: "REST APIs" },
  { name: "CMS" },
  { name: "JavaScript"},
  { name: "HTML" },
  { name: "CSS" },
  { name: "GitHub" },
  { name: "Agile" },
  { name: "Vercel" },
];
