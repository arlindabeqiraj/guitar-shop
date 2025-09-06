"use client";

import Image from "next/image";

type WhyTryCardProps = {
  icon: string;
  alt?: string;
  title: string;
  description: string;
};

export default function WhyTryCard({
  icon,
  alt,
  title,
  description,
}: WhyTryCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-[#222] rounded-xl flex items-center justify-center mb-4">
        <Image
          src={icon}
          alt={alt || "Advantage icon"} // fallback default identik
          width={32}
          height={32}
        />
      </div>
      <h3 className="text-lg font-normal">{title}</h3>
      <p className="text-sm text-gray-400 mt-2 max-w-[220px]">{description}</p>
    </div>
  );
}
