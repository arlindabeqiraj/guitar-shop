"use client";

import Image from "next/image";
import Link from "next/link";

type Brand = {
  id: string;
  name: string;
  image: string;
};

export default function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link
      href={`/brands/${brand.id}`}
      className="p-4 rounded-lg cursor-pointer flex items-center justify-center"
    >
      <Image
        src={brand.image}
        alt={brand.name}
        width={140}
        height={80}
        className="object-contain filter grayscale brightness-50 contrast-200"
      />
    </Link>
  );
}
