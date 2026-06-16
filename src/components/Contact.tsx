import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { socialLinks } from '../data/index';
import ResumeButton from './ResumeButton';

export const Contact = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const email = 'naruebet.singsathon2@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-6 shadow-2xl md:p-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-300">
              Kontakt
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
              Letar ni efter en junior utvecklare som vill växa snabbt?
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-300 md:text-base">
              Jag är öppen för juniorroller, praktiknära uppdrag och team där jag kan bidra
              med React, TypeScript, C#, .NET och ett starkt intresse för AI-drivna arbetssätt.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
              <FontAwesomeIcon icon={faLocationDot as IconProp} className="text-sky-300" />
              Helsingborg, Sverige
            </div>
          </div>

          <div className="grid gap-3">
            <button
              onClick={handleCopyEmail}
              className="flex h-12 items-center justify-center gap-3 rounded-lg bg-emerald-400 px-5 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
            >
              <FontAwesomeIcon icon={faEnvelope as IconProp} />
              {copySuccess ? 'E-post kopierad' : 'Kopiera e-post'}
            </button>

            <ResumeButton className="flex h-12 items-center justify-center rounded-lg border border-white/15 px-5 text-sm font-bold text-white transition hover:border-sky-300/60 hover:bg-white/5" />

            <div className="grid grid-cols-2 gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Besök min profil på GitHub"
                className="flex h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-slate-950/50 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
              >
                <FontAwesomeIcon icon={faGithub as IconProp} />
                GitHub
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Besök min profil på LinkedIn"
                className="flex h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-slate-950/50 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
              >
                <FontAwesomeIcon icon={faLinkedin as IconProp} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
