import travel from '../assets/travel.gif';
import square from '../assets/square.gif';
import thai from '../assets/thai.jpg';


export const text: { [key: string]: { name: string; title: string; passion: string; Resume: string } } = {
  en: {
    name: "Naruebet Singsathon",
    title: "Fullstack Web Developer",
    passion: "With a passion for developing",
    Resume: "Resume",
  },
  sv: {
    name: "Naruebet Singsathon",
    title: "Fullstack Webbutvecklare",
    passion: "Med en passion för utveckling",
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
      link: "https://sathon-thai-massage.vercel.app/",
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
  "Tailwind",
];