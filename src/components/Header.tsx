import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/index";

export const Header = () => {
  const { language, changeLanguage } = useLanguage(); // Hämta globalt språk

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-purple-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Name & Title */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Naruebet Singsathon
            </h1>
            <p className="mt-1 text-sm font-medium text-purple-500/90">
              {translations[language].title}
            </p>
          </div>

          {/* Language Switcher - Always Visible */}
          <div className="flex gap-2 md:hidden">
            <button onClick={() => changeLanguage("en")} className={`px-3 py-1 rounded ${language === "en" ? "bg-purple-600 text-white" : "bg-gray-200"}`}>
              EN
            </button>
            <button onClick={() => changeLanguage("sv")} className={`px-3 py-1 rounded ${language === "sv" ? "bg-purple-600 text-white" : "bg-gray-200"}`}>
              SV
            </button>
          </div>

          {/* Navigation (Hidden on Mobile) */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="text-gray-700 hover:text-purple-600 text-sm font-medium transition-colors duration-200">
              {translations[language].about}
            </a>
            <a href="#skills" className="text-gray-700 hover:text-purple-600 text-sm font-medium transition-colors duration-200">
              {translations[language].skills}
            </a>
            <a href="#projects" className="text-gray-700 hover:text-purple-600 text-sm font-medium transition-colors duration-200">
              {translations[language].projects}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 text-sm font-medium transition-colors duration-200">
              {translations[language].contact}
            </a>

            {/* Language Switcher for Larger Screens */}
            <div className="hidden md:flex gap-2">
              <button onClick={() => changeLanguage("en")} className={`px-3 py-1 rounded ${language === "en" ? "bg-purple-600 text-white" : "bg-gray-200"}`}>
                EN
              </button>
              <button onClick={() => changeLanguage("sv")} className={`px-3 py-1 rounded ${language === "sv" ? "bg-purple-600 text-white" : "bg-gray-200"}`}>
                SV
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
