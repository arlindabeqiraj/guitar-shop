"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import WhyTryCard from "../../(shared)/components/ui/WhyTryCard";

export default function WhyTrySection() {
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="w-full bg-[#111] text-white py-20">
        <div className="max-w-[1280px] mx-auto px-[120px] text-center">
          <h2 className="text-[36px] font-normal">&nbsp;</h2>
        </div>
      </section>
    );
  }

  const advantages = [
    {
      icon: "/images/smooth-browsing.png",
      alt: t("advantages.smooth.alt"),
      title: t("advantages.smooth.title"),
      description: t("advantages.smooth.description"),
    },
    {
      icon: "/images/easy-delivery.png",
      alt: t("advantages.delivery.alt"),
      title: t("advantages.delivery.title"),
      description: t("advantages.delivery.description"),
    },
    {
      icon: "/images/swift-payments.png",
      alt: t("advantages.payments.alt"),
      title: t("advantages.payments.title"),
      description: t("advantages.payments.description"),
    },
  ];

  return (
    <section className="w-full bg-[#111] text-white py-20">
      <div className="max-w-[1280px] mx-auto px-[120px] text-center">
        <h2 className="text-[36px] font-normal">
          {t("whytry.title")}{" "}
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
