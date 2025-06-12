import { useState, useEffect } from 'react';
import { Translation, getTranslation } from '../i18n/translations';

export type SupportedLanguage = 'es' | 'en' | 'fr' | 'pt';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>('es');
  const [translation, setTranslation] = useState<Translation>(getTranslation('es'));

  useEffect(() => {
    // Cargar idioma guardado desde el almacenamiento local
    const savedLanguage = localStorage.getItem('weatherAppLanguage') as SupportedLanguage;
    if (savedLanguage && ['es', 'en', 'fr', 'pt'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
      setTranslation(getTranslation(savedLanguage));
    } else {
      // Detectar el idioma del navegador
      const browserLanguage = navigator.language.split('-')[0];
      const supportedLanguage = ['es', 'en', 'fr', 'pt'].includes(browserLanguage)
        ? browserLanguage as SupportedLanguage
        : 'es';
      setCurrentLanguage(supportedLanguage);
      setTranslation(getTranslation(supportedLanguage));
    }
  }, []);

  const changeLanguage = (language: SupportedLanguage) => {
    setCurrentLanguage(language);
    setTranslation(getTranslation(language));
    localStorage.setItem('weatherAppLanguage', language);
  };

  return {
    currentLanguage,
    translation,
    changeLanguage,
  };
};