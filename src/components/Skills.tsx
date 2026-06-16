import { skills } from '../data';
import { skillsData } from './SkillsIcons';

const focusAreas = [
  {
    title: 'Frontend',
    text: 'React, TypeScript och responsiva gränssnitt med fokus på tydlig struktur.',
  },
  {
    title: 'Backend',
    text: 'C#, ASP.NET Core, REST API:er och SQL från utbildning, praktik och egna projekt.',
  },
  {
    title: 'AI & automation',
    text: 'Nyfiken på hur AI kan förbättra arbetsflöden, prototyper och smartare webbfunktioner.',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="border-y border-white/10 bg-white/[0.025] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-sky-300">
              Kompetens
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
              Tekniker jag använder för att bygga riktiga lösningar
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
              Min styrka är att jag lär mig snabbt, bygger klart och gärna kopplar ihop
              frontend, backend och nya AI-verktyg till något användbart.
            </p>

            <div className="mt-8 grid gap-3">
              {focusAreas.map((area) => (
                <div key={area.title} className="rounded-lg border border-white/10 bg-slate-950/50 p-4">
                  <p className="font-bold text-white">{area.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{area.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => {
              const skillIcon = skillsData.find((s) => s.name === skill.name)?.icon;

              return (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-slate-950/55 px-4 py-3 transition hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-white/[0.06]"
                >
                  <span className="text-xl">{skillIcon || '?'}</span>
                  <span className="text-sm font-semibold text-slate-200">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
