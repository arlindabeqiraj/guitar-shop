// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: "en", // kjo gjuhë NUK merr prefix në URL
    locales: ["en", "sq"], // anglisht & shqip
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
