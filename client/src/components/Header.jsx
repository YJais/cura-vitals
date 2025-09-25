import { useTranslation } from "react-i18next";

const Header = ({ languages = [], selectedLanguage, onLanguageChange }) => {
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    const lang = e.target.value;
    onLanguageChange?.(lang); // notify parent if callback provided
    i18n.changeLanguage(lang); // change i18n language
  };

  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img
            src="/CuraVitals_logo.png"
            alt={t("CuraVitals Logo")}
            className="w-10 h-10 object-contain"
          />
          <div>
            <h1 className="text-xl font-bold text-gray-900">{t("CuraVitals")}</h1>
            <p className="text-xs text-gray-500">{t("Digital Health Records for Migrant Workers")}</p>
          </div>
        </div>

        {/* Language Selector */}
        <div className="flex items-center space-x-2">
          <select
            value={selectedLanguage || i18n.language}
            onChange={handleChange}
            className="text-sm bg-transparent border-none focus:outline-none cursor-pointer"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
