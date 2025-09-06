"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/images/Butterfly.png"
        alt="VibeStrings Logo"
        width={32}
        height={32}
        className="object-contain"
      />
      <span className="text-lg font-medium">VibeStrings</span>
    </div>
  );
}
