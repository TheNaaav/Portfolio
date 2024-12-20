import { text } from "../data";

interface ResumeButtonProps {
  language: string;
}

const ResumeButton = ({ language }: ResumeButtonProps) => {
  const resumeLink = '/ResumeSV.pdf';

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