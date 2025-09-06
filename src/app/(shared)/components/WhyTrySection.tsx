"use client";

import { useTranslation } from "next-i18next";
import WhyTryCard from "../../(shared)/components/ui/WhyTryCard";

export default function WhyTrySection() {
  const { t } = useTranslation("common");

  const advantages = [
    {
      icon: "/images/smooth-browsing.png",
      alt: t("advantages.smooth.alt", "Smooth Browsing"),
      title: t("advantages.smooth.title", "SMOOTH BROWSING"),
      description: t(
        "advantages.smooth.description",
        "Enjoy a seamless browsing experience tailored for guitar lovers."
      ),
    },
    {
      icon: "/images/easy-delivery.png",
      alt: t("advantages.delivery.alt", "Easy Delivery"),
      title: t("advantages.delivery.title", "EASY DELIVERY"),
      description: t(
        "advantages.delivery.description",
        "Fast and reliable delivery straight to your door."
      ),
    },
    {
      icon: "/images/swift-payments.png",
      alt: t("advantages.payments.alt", "Swift Payments"),
      title: t("advantages.payments.title", "SWIFT PAYMENTS"),
      description: t(
        "advantages.payments.description",
        "Secure and hassle-free payments for your favorite guitars."
      ),
    },
  ];

  return (
    <section className="w-full bg-[#111] text-white py-20">
      <div className="max-w-[1280px] mx-auto px-[120px] text-center">
        <h2 className="text-[36px] font-normal">
          {t("whytry.title", "Why try")}{" "}
          <span className="text-[#FF6428]">VibeStrings?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 mt-16">
          {advantages.map((adv, idx) => (
            <WhyTryCard
              key={idx}
              icon={adv.icon}
              alt={adv.alt}
              title={adv.title}
              description={adv.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
