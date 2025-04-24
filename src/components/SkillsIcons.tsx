// src/data/skillsIcons.tsx
import { 
    FaReact, 
    FaDatabase 
  } from 'react-icons/fa';
  import {
    SiTailwindcss,
    SiTypescript,
    SiDotnet,
    SiSharp,
    SiMicrodotblog,
    SiPostman,
    SiContentful
  } from 'react-icons/si';
  
  export const skillsData = [
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "ASP.NET", icon: <SiDotnet className="text-purple-400" /> },
    { name: "SQL Databases", icon: <FaDatabase className="text-yellow-400" /> },
    { name: "Web API", icon: <SiPostman className="text-orange-400" /> },
    { name: "C#", icon: <SiSharp className="text-indigo-400" /> },
    { name: "Microservices", icon: <SiMicrodotblog className="text-pink-400" /> },
    { name: "REST APIs", icon: <SiPostman className="text-orange-400" /> },
    { name: "CMS", icon: <SiContentful className="text-sky-400" /> }
  ];
  