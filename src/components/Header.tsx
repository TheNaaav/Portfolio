
export const Header = () => {
  return (
    <header className="top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Namn och titel */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Naruebet Singsathon
            </h1>
            <p className="mt-1 text-sm font-medium text-purple-500/90">
              Webbutvecklare
            </p>
          </div>

          {/* Navigering */}
          <nav className="hidden md:flex space-x-8 items-center ">
            <a href="#about" className="text-white hover:text-purple-600 text-sm font-medium transition-colors duration-200">
              Om mig
            </a>
            <a href="#skills" className="text-white hover:text-purple-600 text-sm font-medium transition-colors duration-200">
              Färdigheter
            </a>
            <a href="#projects" className="text-white hover:text-purple-600 text-sm font-medium transition-colors duration-200">
              Projekts
            </a>
            <a href="#contact" className="text-white hover:text-purple-600 text-sm font-medium transition-colors duration-200">
              Kontakt
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
