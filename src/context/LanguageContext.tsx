import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Typ för språkkontexten
interface LanguageContextType {
  language: string;
  changeLanguage: (lang: string) => void;
}

// Skapa kontexten
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider-komponenten
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>("en");

  // Hämta språket från localStorage vid sidladdning
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Ändra språk och spara i localStorage
  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook för att använda kontexten
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage måste användas inom en LanguageProvider");
  }
  return context;
};
