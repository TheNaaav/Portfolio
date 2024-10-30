import React from 'react';
import EN from '../assets/flag-en.png';
import SV from '../assets/flag-sv.png';

interface LanguageSwitcherProps {
  setLanguage: (lang: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ setLanguage }) => {
  return (
    <div className="absolute top-5 right-5 flex space-x-2">
      <img
        src={EN}
        alt="English"
        className="w-8 h-8 cursor-pointer hover:opacity-80"
        onClick={() => setLanguage('en')}
      />
      <img
        src={SV}
        alt="Svenska"
        className="w-8 h-8 cursor-pointer hover:opacity-80"
        onClick={() => setLanguage('sv')}
      />
    </div>
  );
};

export default LanguageSwitcher;


