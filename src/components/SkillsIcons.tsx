import { FaMobileAlt, FaReact, FaDatabase } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiDotnet,
  SiSharp,
  SiMicrodotblog,
  SiPostman,
  SiContentful,
  SiGithub,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiVercel,
  
} from 'react-icons/si';
import { Skill } from '../data/types';

export const skillsData: Skill[] = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "ASP.NET", icon: <SiDotnet className="text-purple-400" /> },
  { name: "SQL Databases", icon: <FaDatabase className="text-yellow-400" /> },
  { name: "Web API", icon: <SiPostman className="text-orange-400" /> },
  { name: "C#", icon: <SiSharp className="text-indigo-400" /> },
  { name: "Microservices", icon: <SiMicrodotblog className="text-pink-400" /> },
  { name: "Responsive Design", icon: <FaMobileAlt className="text-emerald-400" /> },
  { name: "REST APIs", icon: <SiPostman className="text-orange-400" /> },
  { name: "CMS", icon: <SiContentful className="text-sky-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "HTML", icon: <SiHtml5 className="text-red-400" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-400" /> },
  { name: "Agile", icon: <SiMicrodotblog className="text-pink-400" /> },
  { name: "Vercel", icon: <SiVercel className="text-gray-400" /> },
];
