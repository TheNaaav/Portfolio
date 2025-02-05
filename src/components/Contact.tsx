import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/index';

export const Contact = () => {
  const [copySuccess, setCopySuccess] = useState(false); 
  const email = "naruebet.singsathon2@gmail.com"; 
  const { language } = useLanguage();
  const currentLanguage = translations[language] ? language : 'sv'; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email) 
      .then(() => {
        setCopySuccess(true); 
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch(err => console.error('Failed to copy: ', err));
  };

  return (
    <section id="contact" className="flex flex-col items-center text-center py-16  text-white rounded-lg shadow-xl">
      <h1 className='text-3xl md:text-5xl font-extrabold text-green-400 mb-8'>
        {translations[currentLanguage].contact}
      </h1>
      <p className="text-lg md:text-xl text-gray-200 mb-4 max-w-xl">
        {translations[currentLanguage].contactDescription}
      </p>
      <button
        onClick={handleCopyEmail}
        className="mt-6 px-8 py-3 rounded-full bg-green-500 text-white font-semibold text-lg transition-all hover:bg-green-600 hover:scale-105 shadow-md"
      >
        {translations[currentLanguage].contactmail}
      </button>
      {copySuccess && <p className="mt-4 text-green-300 text-sm">{translations[currentLanguage].contactcopy}</p>}
      <div className="mt-8 text-sm text-white">
        <p>{translations[currentLanguage].reachOut}</p>
      </div>
    </section>
  );
};
