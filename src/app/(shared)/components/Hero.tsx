"use client";

import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function Hero() {
  const { t } = useTranslation("common");

  return (
    <section className="relative w-full overflow-hidden min-h-[720px]">
      <div
        className="absolute"
        style={{
          width: "508px",
          height: "194px",
          top: "235px",
          left: "120px",
        }}
      >
        <div className="text-center">
          <h3 className="text-[48px] leading-[56px] font-extrabold tracking-tight">
            {t("hero.title", "Browse top quality")}{" "}
            <span className="text-[#FF6428]">
              {t("hero.highlight", "Guitars")}
            </span>{" "}
            {t("hero.suffix", "online")}
          </h3>
          <p className="mt-6 text-[18px] leading-[28px] text-[#666] max-w-md mx-auto">
            {t(
              "hero.subtitle",
              "Explore 50k+ latest collections of branded guitars online with VibeStrings."
            )}
          </p>
        </div>
      </div>

      <div className="absolute top-0 right-0 h-[586px] w-[672px]">
        <div className="relative h-full w-full rounded-bl-[200px] overflow-hidden">
          <Image
            src="/images/guitar.png"
            alt="Guitar"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
