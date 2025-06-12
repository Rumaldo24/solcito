import React, { useState } from "react";
import { Languages, ChevronDown } from "lucide-react";
import { SupportedLanguage } from "../hooks/useLanguage";

interface LanguageSelectorProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (language: SupportedLanguage) => void;
}

const languageOptions = [
  { code: "es" as SupportedLanguage, name: "Español", flag: "🇪🇸" },
  { code: "en" as SupportedLanguage, name: "English", flag: "🇺🇸" },
  { code: "fr" as SupportedLanguage, name: "Français", flag: "🇫🇷" },
  { code: "pt" as SupportedLanguage, name: "Português", flag: "🇧🇷" },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentOption = languageOptions.find(
    (option) => option.code === currentLanguage
  );

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 flex items-center gap-2 p-3 rounded-full 
                   bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 
                   border border-white/20 shadow-lg hover:shadow-xl transform hover:scale-110"
        aria-label="Seleccionar idioma"
      >
        <Languages className="w-5 h-5 text-white" />
        <span className="text-white font-medium text-sm">
          {currentOption?.flag} {currentOption?.code.toUpperCase()}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-white transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="fixed top-16 left-4 z-50 rounded-2xl border-2 backdrop-blur-sm 
                          bg-white/90 border-white/30 shadow-xl min-w-[160px]"
          >
            {languageOptions.map((option) => (
              <button
                key={option.code}
                onClick={() => {
                  onLanguageChange(option.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left p-3 hover:bg-white/20 transition-colors
                           flex items-center gap-3 first:rounded-t-2xl last:rounded-b-2xl
                           ${
                             currentLanguage === option.code
                               ? "bg-blue-500/20 text-blue-700 font-semibold"
                               : "text-gray-700 hover:text-gray-900"
                           }`}
              >
                <span className="text-lg">{option.flag}</span>
                <span className="font-medium">{option.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
