import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import TranslationEN from './locales/en/translation.json'
import TranslationRU from './locales/ru/translation.json'

// const backend = new Backend({
//   // path where resources get loaded from
//   loadPath: '/locales/{{lng}}/{{ns}}.json'
// });

const resources = {
  en: {translation: TranslationEN},
  ru: {translation: TranslationRU}
}

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources: resources,
  debug: true,
  lng: 'en',
  fallbackLng: ['en', 'ru'],
  supportedLngs: ['en', 'ru'],
  load: 'languageOnly',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n