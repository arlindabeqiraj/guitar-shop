"use client";

import Image from "next/image";
import Link from "next/link";

type BrandHeroProps = {
  brandName: string;
  brandImage: string;
};

export default function BrandHero({ brandName, brandImage }: BrandHeroProps) {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-10 py-16  mb-[120px]">
      <div className="max-w-xl text-center">
        <Link
          href="/brands"
          className="text-sm text-gray-500 hover:underline absolute top-20 left-6 z-12"
        >
          ← Back To Home
        </Link>

        <h1 className="text-4xl font-bold mt-26 leading-snug">
          Play like a <span className="text-[#FF6428]">Rock star</span>
        </h1>

        <p className="mt-4 text-gray-600 leading-relaxed">
          With a legacy dating back to 1950s, {brandName} blends expert
          craftsmanship with cutting-edge innovation to deliver guitars that
          inspire creativity and elevate your performance. Trusted by top
          artists worldwide, {brandName} guitars are built to play fast, sound
          bold, and stand out on any stage.
        </p>
      </div>

      <div className="absolute top-0 right-0 h-[430px] w-[630px]">
        <div className="relative h-full w-full rounded-bl-[200px] overflow-hidden">
          <Image
            src="/images/bg-orange.png"
            alt={`${brandName} Background`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={brandImage}
              alt={`${brandName} Logo`}
              width={350}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
