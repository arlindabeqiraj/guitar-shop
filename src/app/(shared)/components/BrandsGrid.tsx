"use client";

import { useTranslation } from "next-i18next";
import BrandCard from "./ui/BrandCard";

type Brand = {
  id: string;
  name: string;
  image: string;
};

export default function BrandsGrid({ brands }: { brands: Brand[] }) {
  const { t } = useTranslation("common");

  if (!brands || brands.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">{t("brands.noBrands")}</p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-16">
      {brands.map((brand) => (
        <BrandCard key={brand.id} brand={brand} />
      ))}
    </div>
  );
}
