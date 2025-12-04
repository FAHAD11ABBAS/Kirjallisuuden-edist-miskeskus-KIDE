import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationFI from './locales/fi/translation.json';
import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';
import translationSV from './locales/sv/translation.json';

const resources = {
  fi: {
    translation: translationFI
  },
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  },
  sv: {
    translation: translationSV
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fi', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
