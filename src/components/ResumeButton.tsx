const ResumeButton = ({ className }: { className?: string }) => {
  const resumeFile = "/Naruebet_Singsathon_CV.pdf";

  return (
    <a 
      href={resumeFile}
      download
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ladda ner mitt CV i PDF-format"
      className={className}
    >
      Ladda ner CV
    </a>
  );
};

export default ResumeButton;
