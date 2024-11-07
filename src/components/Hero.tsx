import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { text , socialLinks } from '../data/index';
import LanguageSwitcher from './languageSwitcher';
import ResumeButton from './ResumeButton';
import Me from '../assets/Me.png';

function Hero() {
  const [language, setLanguage] = useState('en'); 

  return (
    <section id="hero" className="flex flex-col justify-center items-center relative ">
    <LanguageSwitcher setLanguage={setLanguage} />
    <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-4xl min-h-screen gap-10">
      <div className="flex justify-center mb-6 md:mb-0 mt-20">
        <img 
          src={Me}
          alt="Naruebet Singsathon" 
          className="rounded-full w-32 h-32 md:w-80 md:h-80 object-cover shadow-lg transition-transform duration-300 transform hover:scale-110" 
        />
      </div>
      <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white">
          {text[language].name}
        </h1>
        <h1 className="text-gray-300 mb-6 text-lg sm:text-xl md:text-2xl lg:text-3xl">{text[language].title}</h1>
        <div className="flex space-x-6 mb-6 justify-center">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-gray-300 hover:text-white transition duration-200" size="2x" />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-gray-300 hover:text-white transition duration-200" size="2x" />
          </a>
        </div>
        <p className="text-gray-300 text-sm md:text-base">{text[language].passion}</p>
        <ResumeButton language={language} />
      </div>
    </div>
  </section>
  );
}

export default Hero;
