"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Mail, MapPin } from "lucide-react";
import { useTranslation } from "next-i18next";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-gray-100 pt-20 pb-12">
      <div className="max-w-[1280px] mx-auto px-[120px] grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo + Info */}
        <div className="md:col-span-2 space-y-4">
          <Logo />
          <div className="flex items-center gap-3 text-gray-600">
            <Mail size={20} />
            <span suppressHydrationWarning>{t("footer.email")}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <MapPin size={20} />
            <span suppressHydrationWarning>{t("footer.location")}</span>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="font-semibold mb-4">{t("footer.pages.title")}</h3>
          <ul className="space-y-2 text-gray-600">
            <li>{t("footer.pages.store")}</li>
            <li>{t("footer.pages.collections")}</li>
            <li>{t("footer.pages.support")}</li>
          </ul>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-4">{t("footer.product.title")}</h3>
          <ul className="space-y-2 text-gray-600">
            <li>{t("footer.product.terms")}</li>
            <li>{t("footer.product.privacy")}</li>
            <li>{t("footer.product.copyright")}</li>
          </ul>
        </div>

        {/* Socials + Language */}
        <div>
          <h3 className="font-semibold mb-4">{t("footer.follow.title")}</h3>
          <div className="flex gap-4 text-gray-600 mb-4">
            <FaFacebookF size={20} />
            <FaTwitter size={20} />
            <FaInstagram size={20} />
          </div>
          <LanguageSwitcher />
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10">
        © 2022 <span suppressHydrationWarning>{t("footer.copyright")}</span>
      </div>
    </footer>
  );
}
