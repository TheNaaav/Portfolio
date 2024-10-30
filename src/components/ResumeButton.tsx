import { text } from "../data";

const ResumeButton: React.FC<{ language: string }> = ({ language }) => {
    const resumeLink = language === 'en' ? '/Resume_EN.pdf' : '/Resume_SV.pdf';
  
    return (
      <div className="mt-4">
        <a 
          href={resumeLink}  
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-200"
        >
          {language === 'en' ? text.en.Resume : text.sv.Resume} 
        </a>
      </div>
    );
  };

export default ResumeButton;
  