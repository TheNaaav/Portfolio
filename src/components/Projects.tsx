import { projects } from '../data/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faCheckCircle,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const Projects = () => {
  return (
    <section id="projects" className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
              Utvalda projekt
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
              Bevis på hur jag bygger, lär mig och löser problem
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400 md:text-base">
            Projekten visar både verkliga kundsidor, API-drivna appar och min riktning
            mot AI, automation och C#/.NET. Varje case är valt för att visa hur jag
            tänker som utvecklare.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.projects.map((project) => (
            <article
              key={project.name}
              className={`group flex min-h-full flex-col overflow-hidden rounded-xl border bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] ${
                project.featured
                  ? 'border-emerald-300/30 shadow-[0_0_40px_rgba(74,222,128,0.08)]'
                  : 'border-white/10'
              }`}
            >
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {project.featured && (
                    <span className="rounded-md bg-emerald-400 px-2.5 py-1 text-xs font-black text-slate-950">
                      Starkt case
                    </span>
                  )}
                  <span className="rounded-md border border-white/15 bg-slate-950/70 px-2.5 py-1 text-xs font-semibold text-slate-200 backdrop-blur">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-black text-white group-hover:text-emerald-200">
                  {project.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 rounded-lg border border-white/10 bg-slate-950/50 p-4">
                  <div className="flex gap-3">
                    <FontAwesomeIcon
                      icon={faCheckCircle as IconProp}
                      className="mt-0.5 h-4 w-4 text-emerald-300"
                    />
                    <p className="text-sm leading-6 text-slate-300">{project.impact}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-emerald-400 px-4 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
                  >
                    Live
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare as IconProp} className="h-3.5 w-3.5" />
                  </a>

                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-white/15 px-4 text-sm font-bold text-white transition hover:border-sky-300/60 hover:bg-white/5"
                    >
                      Code
                      <FontAwesomeIcon icon={faCodeBranch as IconProp} className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
