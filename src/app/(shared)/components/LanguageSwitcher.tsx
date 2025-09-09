"use client";

import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n";
import Cookies from "js-cookie";
import { Language } from "../../../../i18n/settings";

export default function LanguageSwitcher() {
  const { i18n: i18nextInstance } = useTranslation();

  const currentLocale = i18nextInstance.language as Language;
  const nextLocale: Language = currentLocale === "en" ? "sq" : "en";

  const handleSwitch = () => {
    i18n.changeLanguage(nextLocale);
    Cookies.set("NEXT_LOCALE", nextLocale, { expires: 365 });
  };

  return (
    <button
      onClick={handleSwitch}
      className="px-4 py-2 border rounded-md text-sm font-medium text-gray-600 hover:text-[#FF6428] transition"
    >
      {currentLocale === "en" ? "Shqip" : "English"}
    </button>
  );
}
