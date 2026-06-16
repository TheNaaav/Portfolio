import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBrain, faCode, faRocket, faServer } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { socialLinks } from '../data/index';
import ResumeButton from './ResumeButton';

const strengths = [
  { icon: faCode, label: 'Frontend', text: 'React, TypeScript och responsiv UX' },
  { icon: faServer, label: 'Backend', text: 'C#, .NET, REST API:er och SQL' },
  { icon: faBrain, label: 'AI-riktning', text: 'Automation, prototyper och smartare flöden' },
];

function Hero() {
  return (
    <section id="about" className="relative overflow-hidden px-6 pb-20 pt-10 md:pb-28 md:pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(74,222,128,0.16),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.12),transparent_26%),linear-gradient(135deg,#07100f_0%,#0d141b_48%,#050505_100%)]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-emerald-200">
            Junior fullstack developer - React, .NET och AI
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.04] text-white sm:text-5xl md:text-6xl">
            Jag bygger moderna webbappar och vill växa mot AI-driven utveckling.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Jag heter Naruebet Singsathon och är en junior fullstackutvecklare i Helsingborg.
            Min styrka är att jag lär mig snabbt, bygger färdigt och kombinerar React,
            TypeScript, C# och .NET med ett växande intresse för AI, automation och smarta
            digitala arbetsflöden.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Jag söker ett team där jag kan bidra med nyfikenhet, praktisk problemlösning
            och energi, samtidigt som jag utvecklas till en stark fullstack- och AI-utvecklare.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ResumeButton className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-400 px-6 text-sm font-bold text-slate-950 shadow-[0_0_28px_rgba(74,222,128,0.2)] transition hover:-translate-y-0.5 hover:bg-emerald-300" />
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/15 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-sky-300/60 hover:bg-white/5"
            >
              Se mina projekt
            </a>

            <div className="flex items-center gap-3 sm:pl-2">
              {[
                { icon: faGithub, href: socialLinks.github, label: 'Besök min GitHub' },
                { icon: faLinkedin, href: socialLinks.linkedin, label: 'Besök min LinkedIn' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:-translate-y-0.5 hover:border-sky-300/60 hover:bg-white/10"
                >
                  <FontAwesomeIcon icon={link.icon as IconProp} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 hidden gap-3 sm:grid sm:grid-cols-3">
            {strengths.map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <FontAwesomeIcon icon={item.icon as IconProp} className="mb-3 h-5 w-5 text-emerald-300" />
                <p className="text-sm font-bold text-white">{item.label}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-sm md:block lg:max-w-md">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur">
            <div className="relative overflow-hidden rounded-xl bg-slate-950">
              <img
                src="/images/Me.jpg"
                alt="Naruebet Singsathon"
                className="aspect-[4/5] w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="text-lg font-bold text-white">Naruebet Singsathon</p>
                <p className="text-sm text-emerald-200">Open to junior developer roles</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 left-4 right-4 rounded-lg border border-emerald-300/20 bg-slate-950/95 p-4 shadow-xl backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400 text-slate-950">
                <FontAwesomeIcon icon={faRocket as IconProp} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Redo att bidra från dag ett</p>
                <p className="text-xs text-slate-400">Praktik, kundprojekt och egna produktidéer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
