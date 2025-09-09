"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

type Model = {
  id: string;
  name: string;
  type: string;
  image: string;
  price: number;
};

type ModelsGridProps = {
  models: Model[];
  brandId: string;
  onImageError?: (id: string) => void;
};

export default function ModelsGrid({
  models,
  brandId,
  onImageError,
}: ModelsGridProps) {
  const { t } = useTranslation("common");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {models.map((model) => (
        <Link
          key={model.id}
          href={`/brands/${brandId}/models/${model.id}`}
          className="p-6 rounded-lg hover:shadow-lg transition cursor-pointer"
        >
          <Image
            src={model.image}
            alt={model.name}
            width={300}
            height={200}
            className="object-contain mx-auto"
            onError={() => onImageError?.(model.id)}
          />
          <h3 className="text-lg font-semibold mt-4">{model.name}</h3>
          <p className="text-sm text-gray-500">
            {t(`types.${model.type.toLowerCase()}`, model.type)}
          </p>
          <p className="text-[#FF6428] font-bold">
            {t("price", { value: model.price.toLocaleString() })}
          </p>
        </Link>
      ))}
    </div>
  );
}
