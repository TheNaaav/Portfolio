import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faDiagramProject, faRobot, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const aiItems = [
  {
    icon: faWandMagicSparkles,
    title: 'AI-assisterad utveckling',
    text: 'Använder AI som stöd för idéer, felsökning, refaktorering och snabbare prototyper.',
  },
  {
    icon: faDiagramProject,
    title: 'API + AI-integrationer',
    text: 'Vill bygga funktioner där externa API:er, data och AI-flöden blir praktiska verktyg.',
  },
  {
    icon: faRobot,
    title: 'Automation mindset',
    text: 'Letar gärna efter repetitiva arbetsmoment som kan förenklas med kod och smarta flöden.',
  },
];

export const AIDirection = () => {
  return (
    <section id="ai" className="border-y border-white/10 bg-white/[0.025] px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-300 text-slate-950">
            <FontAwesomeIcon icon={faBrain as IconProp} className="h-5 w-5" />
          </div>
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-sky-300">
            AI-riktning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
            Jag vill växa där webbutveckling möter AI och automation
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
            Min bas är fullstack, men min framtida riktning är att bygga smartare
            produkter: webbar som hjälper användare snabbare, arbetsflöden som sparar
            tid och lösningar där AI används på ett konkret och ansvarsfullt sätt.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
          {aiItems.map((item) => (
            <article key={item.title} className="rounded-xl border border-white/10 bg-slate-950/60 p-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">
                  <FontAwesomeIcon icon={item.icon as IconProp} />
                </div>
                <div>
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
