import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import { languages, fallbackLng, defaultNS, getOptions } from "./settings";

i18n
  // ngarkon përkthimet nga public/locales
  .use(Backend)
  // lidh me react-i18next
  .use(initReactI18next)
  // inicializimi
  .init({
    ...getOptions(),
    fallbackLng,
    supportedLngs: languages,
    defaultNS,
    ns: [defaultNS],
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
