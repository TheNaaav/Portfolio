import { useState } from 'react';

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
    <section
      id="contact"
      className="flex flex-col items-center justify-center text-center px-6 py-16 "
    >
        <h1 className="mb-16 text-center text-5xl font-bold">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Kontakt
          </span>
        </h1>

      <p className="text-base md:text-lg text-gray-300 max-w-2xl mb-6">
        Hör gärna av dig om samarbeten, idéer eller bara för att säga hej!
      </p>

      <button
        onClick={handleCopyEmail}
        className="px-6 py-3 rounded-full bg-green-500 text-white text-lg font-medium hover:bg-green-600 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
        aria-label="Kopiera e-postadress"
      >
        Kopiera min e-postadress
      </button>

      {copySuccess && (
        <p className="mt-3 text-green-300 text-sm animate-pulse">
          Kopierad!
        </p>
      )}

      <p className="mt-10 text-sm text-gray-400 max-w-md">
        Hoppas vi hörs!
      </p>
    </section>
  );
};
