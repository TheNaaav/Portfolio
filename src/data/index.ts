import travel from '../assets/travel.gif';
import square from '../assets/square.gif';
import thai from '../assets/thai.jpg';


export const text: { [key: string]: { name: string; title: string; passion: string; Resume: string } } = {
  en: {
    name: "Naruebet Singsathon",
    title: "Fullstack Web Developer",
    passion: "Fresh out of school, pumped to build awesome web stuff—and yes, still googling 'how to center a div.' Ready, excited, and fueled by late-night bug fixes!",
    Resume: "Resume",
  }, 
  sv: {
    name: "Naruebet Singsathon",
    title: "Fullstack Webbutvecklare",
    passion: "Färsk från skolan, taggad på att skapa coola webbprojekt – och japp, fortfarande lite lost när det gäller att centrera en div. Nyfiken, engagerad och laddad för sena kvällar med buggar!",
    Resume: "Resume",
  },
};

export const socialLinks = {
  github: 'https://github.com/TheNaaav',
  linkedin: 'https://www.linkedin.com/in/naruebet-singsathon-7b8337158/',
};

export const projects = {
  projects: [
    {
      name: "Mystery-Travel",
      link: "https://mystery-travel.vercel.app/",
      image: travel,
    },
    {
      name: "SquareGenerator",
      link: "https://squaregenerator.vercel.app/",
      image: square,
    },
    {
      name: "Sathon Thai Massage",
      link: "https://www.sathon-thaimassage.se/",
      image: thai,
    },
  ],
};

export const skills = [
  "C#",
  "Data Storage/SQL",
  "HTML & CSS",
  "JavaScript",
  "ASP.NET Core",
  "Web API",
  "Agile System Development",
  "CMS",
  "React",
  "Microservices",
  "TypeScript",
  "Tailwind CSS",
  
];