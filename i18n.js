// src/i18n.js
const NextI18Next = require("next-i18next").default;

const options = {
  defaultLanguage: "ar",
  otherLanguages: ["en"],
  localeSubpaths: {
    en: "en",
    ar: "ar",
  },
};

const NextI18NextInstance = new NextI18Next(options);

module.exports = NextI18NextInstance;
module.exports.default = NextI18NextInstance;
