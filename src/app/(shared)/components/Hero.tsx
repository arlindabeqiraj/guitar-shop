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
          <h3
            className="text-[48px] leading-[56px] font-extrabold tracking-tight"
            suppressHydrationWarning
          >
            {t("hero.title")}{" "}
            <span className="text-[#FF6428]" suppressHydrationWarning>
              {t("hero.highlight")}
            </span>{" "}
            {t("hero.suffix")}
          </h3>
          <p
            className="mt-6 text-[18px] leading-[28px] text-[#666] max-w-md mx-auto"
            suppressHydrationWarning
          >
            {t("hero.subtitle")}
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
