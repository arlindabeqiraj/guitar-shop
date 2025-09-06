"use client";

import Image from "next/image";
import { Trans, useTranslation } from "next-i18next";

export default function AppDownloadSection() {
  const { t } = useTranslation("common");

  return (
    <section className="w-full bg-white py-42">
      <div className="max-w-[1280px] mx-auto px-[120px] flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-[36px] leading-[44px] font-normal text-center">
            <Trans
              i18nKey="appDownload.title"
              ns="common"
              components={{
                1: <span className="text-[#FF6428]" />,
                br: <br />,
              }}
            />
          </h2>

          <div className="flex items-center justify-center md:justify-start gap-4 mt-8">
            <Image
              src="/images/google-play.png"
              alt="Google Play"
              width={180}
              height={54}
              className="object-contain"
            />
            <Image
              src="/images/app-store.png"
              alt="App Store"
              width={180}
              height={54}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex-1 relative flex justify-center items-center">
          <div className="relative w-[600px] h-[350px] flex justify-center items-center">
            <Image
              src="/images/oval-orange.png"
              alt="Orange oval background"
              fill
              className="object-contain z-0"
            />

            <div className="relative z-10 flex -space-x-28 items-center justify-center">
              <Image
                src="/images/phone-left.png"
                alt="App screenshot left"
                width={420}
                height={820}
                className="object-contain relative -top-6"
              />
              <Image
                src="/images/phone-right.png"
                alt="App screenshot right"
                width={420}
                height={820}
                className="object-contain relative top-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
