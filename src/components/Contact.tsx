import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { socialLinks } from '../data/index';


export const Contact = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const email = "naruebet.singsathon2@gmail.com";

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
    <section id="contact" className=" py-24 px-6 flex flex-col items-center">
      {/* Rubrik */}
      <h2 className="text-white text-5xl md:text-6xl font-bold mb-6">
        Hör av <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">dig</span>
      </h2>

      {/* Undertext */}
      <p className="text-gray-400 text-lg mb-12 max-w-2xl text-center">
        Hör gärna av dig om samarbeten, idéer eller bara för att säga hej!
      </p>

      {/* Knappar */}
      <div className="flex flex-wrap justify-center gap-4">
        
        {/* E-post knapp */}
        <button
          onClick={handleCopyEmail}
          className="flex items-center gap-3 bg-[#111820] border border-white/5 px-6 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 transform hover:scale-105"
        >
         <FontAwesomeIcon icon={faEnvelope as IconProp} className="text-[#4ade80] h-5 w-5" />

          <span className="font-medium">{copySuccess ? 'Kopierad!' : 'Kopiera e-post'}</span>
        </button>

        {/* GitHub knapp */}
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Besök min profil på GitHub"
          className="flex items-center gap-3 bg-[#111820] border border-white/5 px-6 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faGithub} className="text-[#58c7eb] h-5 w-5" />
          <span className="font-medium">GitHub</span>
        </a>

        {/* LinkedIn knapp */}
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Besök min profil på LinkedIn"
          className="flex items-center gap-3 bg-[#111820] border border-white/5 px-6 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-[#0077b5] h-5 w-5" />
          <span className="font-medium">LinkedIn</span>
        </a>
      </div>
    </section>
  );
};
