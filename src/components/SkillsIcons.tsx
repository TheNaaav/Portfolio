import { FaReact, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiSharp, SiDotnet, SiStrapi } from 'react-icons/si';
import { GiNetworkBars } from 'react-icons/gi';
import { MdDesignServices } from 'react-icons/md';

export const skillsData = [
    { icon: <FaReact className="text-2xl text-blue-400" />, name: "React" },
    { icon: <SiTailwindcss className="text-2xl text-cyan-400" />, name: "Tailwind CSS" },
    { icon: <SiTypescript className="text-2xl text-blue-400" />, name: "TypeScript" },
    { icon: <SiSharp className="text-2xl text-blue-400" />, name: "C#" },
    { icon: <SiDotnet className="text-2xl text-blue-400" />, name: "ASP.NET" },
    { icon: <FaDatabase className="text-2xl text-blue-400" />, name: "SQL Databases" },
    { icon: <GiNetworkBars className="text-2xl text-blue-400" />, name: "Web API" },
    { icon: <GiNetworkBars className="text-2xl text-blue-400" />, name: "REST APIs" },
    { icon: <MdDesignServices className="text-2xl text-blue-400" />, name: "Responsive Design" },
    { icon: <SiStrapi className="text-2xl text-blue-400" />, name: "CMS" },
    { icon: <GiNetworkBars className="text-2xl text-blue-400" />, name: "Microservices" },
] as const;
