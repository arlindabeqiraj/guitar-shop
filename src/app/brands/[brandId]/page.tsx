"use client";

import { gql, useQuery } from "@apollo/client";
import { use } from "react";
import { useTranslation } from "react-i18next";
import BrandModelsList from "./BrandModelsList";
import BrandHero from "../../(shared)/components/ui/BrandHero";
import LoadingMessage from "../../(shared)/components/ui/LoadingMessage";
import ErrorMessage from "../../(shared)/components/ui/ErrorMessage";

type Brand = {
  id: string;
  name: string;
  origin?: string;
  image: string;
};

type Model = {
  id: string;
  name: string;
  type: string;
  image: string;
  price: number;
};

const BRAND_AND_MODELS_QUERY = gql`
  query GetBrandAndModels($id: ID!, $sortBy: sortBy!) {
    findUniqueBrand(id: $id) {
      id
      name
      origin
      image
    }
    findBrandModels(id: $id, sortBy: $sortBy) {
      id
      name
      type
      image
      price
    }
  }
`;

export default function BrandModelsPage({
  params,
}: {
  params: Promise<{ brandId: string }>;
}) {
  const { brandId } = use(params);
  const { t } = useTranslation("common");

  const { data, loading, error } = useQuery<{
    findUniqueBrand: Brand;
    findBrandModels: Model[];
  }>(BRAND_AND_MODELS_QUERY, {
    variables: {
      id: brandId,
      sortBy: { field: "name", order: "ASC" },
    },
  });

  if (loading)
    return (
      <LoadingMessage i18nKey="loading.models" fallback={t("loading.models")} />
    );

  if (error)
    return (
      <ErrorMessage
        i18nKey="error.general"
        values={{ error: error.message }}
        fallback={t("error.general")}
      />
    );

  const brand = data?.findUniqueBrand;
  const models = data?.findBrandModels ?? [];

  if (!brand)
    return (
      <ErrorMessage
        i18nKey="error.notfound.brand"
        fallback={t("error.notfound.brand")}
      />
    );

  return (
    <main>
      <BrandHero brandName={brand.name} brandImage={brand.image} />
      <BrandModelsList models={models} brandId={brandId} />
    </main>
  );
}
