import { useState } from 'react';

export const Contact = () => {
  const [copySuccess, setCopySuccess] = useState(false); 
  const email = "naruebet.singsathon2@gmail.com"; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email) 
      .then(() => {
        setCopySuccess(true); 
        setTimeout(() => setCopySuccess(false), 2000);
      })
      .catch(err => console.error('Failed to copy: ', err));
  };

  return (
    <section id="contact" className="flex flex-col items-center text-center">
      <h1 className='text-3xl md:text-5xl font-bold text-green-400 text-center mb-6'>Contact</h1>
      <button
        onClick={handleCopyEmail}
        className="mt-6 h-[50px] w-[200px] rounded-[20px] bg-green-500 text-white font-bold hover:bg-green-600 transition duration-200"
      >
        Copy my email address
      </button>
      {copySuccess && <p className="mt-2 text-green-500">Email is Copied!</p>}
    </section>
  );
};
