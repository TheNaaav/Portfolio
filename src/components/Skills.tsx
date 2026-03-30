import { skills } from '../data';
import { skillsData } from './SkillsIcons';

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Rubrik med gradient */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Teknologier jag <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">använder</span>
          </h2>
        </div>

        {/* Bubbel-layout (Flex-wrap istället för Grid) */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skills.map((skill) => {
            const skillIcon = skillsData.find((s) => s.name === skill.name)?.icon;

            return (
              <div 
                key={skill.name}
                className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-green-400/40 hover:bg-green-400/5 hover:scale-105 hover:shadow-[0_0_20px_rgba(74,222,128,0.1)] group cursor-default"
              >
                {/* Ikonen bredvid texten */}
                <span className="text-xl md:text-2xl transition-transform duration-300 group-hover:scale-110">
                  {skillIcon || "❓"}
                </span>
                {/* Texten */}
                <span className="text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
