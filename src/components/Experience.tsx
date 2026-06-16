import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const experiences = [
  {
    title: 'Praktik - Optimizely & .NET',
    place: 'Avensia, Helsingborg',
    period: '2024',
    points: [
      'Utvecklade SEO-relaterad funktionalitet med Google PageSpeed API.',
      'Arbetade med backend-logik i C#/.NET och SQL-lagring.',
      'Fick praktisk erfarenhet av Optimizely CMS och teknisk webbprestanda.',
    ],
  },
  {
    title: 'Praktik - PHP/Laravel',
    place: 'Rocketlabs, Tyringe',
    period: '2023',
    points: [
      'Arbetade med SEO-indexering, datainsamling och webbprestanda.',
      'Byggde frontend med HTML, CSS och JavaScript utan CMS.',
      'Tränade på att förstå befintliga system och leverera i teammiljö.',
    ],
  },
  {
    title: 'Kontorsvaktmästare',
    place: 'Helsingborgs kommun',
    period: '2025 - pågående',
    points: [
      'Installerar datorutrustning och arbetsplatser.',
      'Löser praktiska problem snabbt och tar ansvar för daglig drift.',
      'Bygger vana av service, struktur och kommunikation i organisation.',
    ],
  },
];

const education = [
  'IT-Högskolan - TypeScript fördjupning, 2025-2026',
  'EC Utbildning - Webbutvecklare .NET, 2022-2024',
  'NTI Skolan - Programmering 1, 2022',
];

export const Experience = () => {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-sky-300">
            Erfarenhet
          </p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
            Praktisk erfarenhet från utveckling, support och verkliga team
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
            Jag kommer in som junior, men jag har redan testat kod i riktiga miljöer,
            arbetat med kundnära leverans och lärt mig att ta ansvar för både teknik
            och människor runt den.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4">
            {experiences.map((experience) => (
              <article key={experience.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-emerald-300">
                      <FontAwesomeIcon icon={faBriefcase as IconProp} />
                      <p className="text-sm font-bold uppercase tracking-widest">{experience.period}</p>
                    </div>
                    <h3 className="mt-3 text-xl font-black text-white">{experience.title}</h3>
                    <p className="mt-1 flex items-center gap-2 text-sm text-slate-400">
                      <FontAwesomeIcon icon={faLocationDot as IconProp} className="text-sky-300" />
                      {experience.place}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-300">
                  {experience.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className="rounded-xl border border-white/10 bg-slate-950/60 p-6">
            <div className="flex items-center gap-3 text-emerald-300">
              <FontAwesomeIcon icon={faGraduationCap as IconProp} />
              <p className="text-sm font-bold uppercase tracking-widest">Utbildning</p>
            </div>
            <div className="mt-6 grid gap-4">
              {education.map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-sm font-semibold leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-4">
              <p className="text-sm font-bold text-white">Söker nästa steg</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Juniorroller inom frontend, fullstack, .NET eller AI-assisterad
                webbutveckling i Skåne, hybrid eller remote.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
