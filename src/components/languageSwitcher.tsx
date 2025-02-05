interface LanguageSwitcherProps {
  setLanguage: (lang: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ setLanguage }) => {
  return (
    <div className="flex gap-2">
      {["sv", "en"].map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className="px-3 py-1 rounded-lg text-sm font-medium bg-gray-200 hover:bg-gray-300"
        >
          {lang === "sv" ? "🇸🇪 SV" : "🇬🇧 EN"}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
