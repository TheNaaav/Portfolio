import travel from '../assets/travel.gif';
import square from '../assets/square.gif';


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
      link: "https://github.com/TheNaaav/Mystery-Travel",
      image: travel,
    },
    {
      name: "SquareGenerator",
      link: "https://github.com/TheNaaav/SquareGenerator",
      image: square,
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