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
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text mb-4">
            Förverkligar idéer
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Hej! Jag heter Naruebet — men du kan kalla mig VibeCoding. Jag är en fullstackutvecklare som kodar med flow, kreativitet och nyfikenhet. <br />
            Jag jobbar främst med React, TypeScript, ASP.NET, C# och SQL, men jag brinner för att kombinera kod och AI — smarta verktyg för smarta lösningar. <br />
            Jag trivs när jag får bygga användarvänliga gränssnitt eller experimentera med automation och maskininlärning. <br />
            För mig handlar kodning om energi, tydlighet och att skapa något som känns bra att använda.
          </p>

          {/* Sociala länkar */}
          <div className="mt-6 flex gap-4">
            {[
              { icon: faGithub, href: socialLinks.github, label: "Besök min GitHub-profil" },
              { icon: faLinkedin, href: socialLinks.linkedin, label: "Besök min LinkedIn-profil" }
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="rounded-full bg-white/10 p-4 hover:bg-white/20 transition-all"
              >
                <FontAwesomeIcon 
                  icon={link.icon} 
                  className="h-6 w-6 text-white" 
                />
              </a>
            ))}
          </div>
          <div className="mt-8 px-4 md:px-0 flex flex-col items-start py-3">
            <ResumeButton />
          </div>
        </div>

        {/* Profilbild */}
        <div className="group relative h-64 w-64 shrink-0 md:h-80 md:w-80">
          <div className="absolute inset-0 -rotate-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 opacity-50 transition-all duration-500 group-hover:rotate-0"></div>
          <img 
            src="/images/naruebet.png"
            alt="Naruebet Singsathon" 
            className="relative z-10 h-full w-full rounded-full object-cover shadow-2xl transition-transform duration-500 hover:scale-105" 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;