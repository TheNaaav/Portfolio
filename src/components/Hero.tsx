import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../context/LanguageContext';
import { translations, socialLinks } from '../data/index';
import ResumeButton from './ResumeButton';
import { useState } from 'react';

function Hero() {
  const { language } = useLanguage();
  const currentLanguage = translations[language] ? language : 'sv';
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center px-4 py-20 md:py-32">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row md:gap-16">
        {/* Profile Image */}
        <div className="group relative h-64 w-64 shrink-0 md:h-96 md:w-96">
          <div className="absolute inset-0 -rotate-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 opacity-50 transition-all duration-500 group-hover:rotate-0"></div>
          <img 
            src="/images/naruebet.png"
            alt="Naruebet Singsathon" 
            className="relative z-10 h-full w-full rounded-full object-cover shadow-2xl transition-transform duration-500 hover:scale-105" 
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              {translations[currentLanguage].name} 
            </span>
          </h1>

          {/* Social Links */}
          <div className="mt-8 flex gap-6">
            {[ 
              { icon: faGithub, href: socialLinks.github },
              { icon: faLinkedin, href: socialLinks.linkedin }
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-4 transition-all hover:bg-white/20 hover:-translate-y-1"
              >
                <FontAwesomeIcon 
                  icon={link.icon} 
                  className="h-6 w-6 text-white md:h-8 md:w-8" 
                />
              </a>
            ))}
          </div>

          {/* Description & Resume */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            {translations[currentLanguage].passion}
          </p>
          <ResumeButton language={currentLanguage} /> 

          {/* Get to Know Me Button */}
          <div className="mt-8">
            <button 
              onClick={toggleDropdown} 
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200"
            >
              {translations[currentLanguage].getToKnowMe}
            </button>

            {/* Drop-down content */}
            {isOpen && (
              <div className="mt-6 bg-gray-800/60 p-6 rounded-lg shadow-lg space-y-6 transition-all duration-300 opacity-90 transform scale-105">
                <div>
                  <h3 className="font-semibold text-xl text-white">{translations[currentLanguage].hobbiesTitle}</h3>
                  <p className="text-gray-300 whitespace-pre-line">{translations[currentLanguage].hobbies}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-white">
                    {translations[currentLanguage].howIStartedTitle}
                  </h3>
                  {Array.isArray(translations[currentLanguage].howIStarted) ? (
                    translations[currentLanguage].howIStarted.map((paragraph: string, index: number) => (
                      <p key={index} className="text-gray-300 mb-4">{paragraph}</p>
                    ))
                  ) : (
                    <p className="text-gray-300 mb-4">{translations[currentLanguage].howIStarted}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
