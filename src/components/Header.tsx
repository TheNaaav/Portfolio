import ResumeButton from './ResumeButton';

export const Header = () => {
  return (
    /* Vi tar bort 'fixed' för nu så att det inte krockar med din övriga layout */
    <header className="w-full z-50 py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Namn/Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              Naruebet
            </h1>
          </div>

          {/* Navigering med GROW-effekt (hover:scale-110) */}
          <nav className="hidden md:flex space-x-10 items-center">
            <a href="#about" className="text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 transform hover:scale-110">
              Om mig
            </a>
            <a href="#skills" className="text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 transform hover:scale-110">
              Färdigheter
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 transform hover:scale-110">
              Projekt
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 transform hover:scale-110">
              Kontakt
            </a>
          </nav>
            {/* Den gröna CV-knappen med GROW-effekt */}
            <div className="hidden md:block">
              <ResumeButton 
                className="inline-flex items-center justify-center bg-[#4ade80] hover:bg-[#3be275] text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-110" 
              />
            </div>
        </div>
      </div>
    </header>
  );
};
