const ResumeButton = () => {
  const resumeFile = "/Min_CV_2025.pdf";

  return (
    <a 
      href={resumeFile}
      download
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ladda ner mitt CV i PDF-format"
      className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Ladda ner CV
    </a>
  );
};

export default ResumeButton;
