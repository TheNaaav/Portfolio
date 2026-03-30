import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { socialLinks } from '../data/index';
import ResumeButton from './ResumeButton';


function Hero() {

  return (
    <section id="about" className="flex flex-col items-center justify-center text-center px-6 py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Innehåll */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-xl">
            <p className="mt-1 text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(74,222,128,0.3)]">
              Fullstack Webbutvecklare
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent">
                Kod som gör nytta
              </span>
              <br />
              <span className="bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent text-3xl md:text-5xl opacity-90">
                (och lite AI-magi)
              </span>
            </h1>
          <p className="mt-6 text-base md:text-lg text-white leading-relaxed">
              Hej! Jag heter Naruebet, en junior fullstack-utvecklare som hellre ser till att koden funkar perfekt än att bråka med exakta färgkoder (design är... en utmaning!).
              Jag trivs bäst med React, TypeScript och C#, och automatiserar gärna allt som går. Jag letar efter ett team där jag kan bidra med stabil kod, bra energi och kanske få ett och annat tips på hur man matchar färger
          </p>
          <div className="mt-8 flex items-center gap-4">
            {/* Sociala länkar - Fyrkantiga med runda hörn */}
            {[
              { icon: faGithub, href: socialLinks.github, label: "Besök min profil på GitHub" },
              { icon: faLinkedin, href: socialLinks.linkedin, label: "Besök min profil på LinkedIn" }
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#111111] border border-white/5 text-white transition-all duration-300 transform hover:scale-110 hover:border-white/20"
              >
                <FontAwesomeIcon icon={link.icon} className="h-6 w-6" />
              </a>
            ))}

            {/* CV-knappen - Turkos och rundad som på bilden */}
            <ResumeButton className="h-12 px-6 flex items-center justify-center rounded-2xl bg-[#4ade80] text-black font-bold text-sm transition-all duration-300 transform hover:scale-105 hover:bg-[#3be275] shadow-[0_0_20px_rgba(74,222,128,0.2)]" />
          </div>
        </div>

        {/* Profilbild */}
        <div className="group relative h-64 w-64 shrink-0 md:h-80 md:w-80 rounded-full p-2 border border-white/10 hover:border-green-400/50 hover:shadow-[0_0_30px_rgba(74,222,128,0.15)] transition-all duration-500">
          <img 
            src="/images/Me.jpg"
            alt="Naruebet Singsathon" 
            className="h-full w-full rounded-full object-cover shadow-2xl" 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;