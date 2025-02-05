import { skills, translations} from '../data';
import { skillsData } from './SkillsIcons';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { language } = useLanguage();

  const currentLanguage = translations[language] ? language : 'sv'; 

  return (
    <section id="skills" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="mb-16 text-center text-5xl font-bold text-white">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            {translations[currentLanguage].skill} 
          </span>
        </h1>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill) => {
            // Hitta motsvarande ikon i skillsData baserat på namn
            const skillIcon = skillsData.find((s) => s.name === skill.name)?.icon;

            return (
              <div 
                key={skill.name}
                className="flex flex-col items-center gap-4 rounded-2xl bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
              >
                <div className="text-4xl">
                  {skillIcon || "❓"} {/* Om ingen ikon hittas, visa en placeholder */}
                </div>
                <h3 className="text-center text-lg font-medium text-white">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
