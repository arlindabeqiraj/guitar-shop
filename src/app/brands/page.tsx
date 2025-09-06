"use client";

import { gql, useQuery } from "@apollo/client";
import Hero from "../(shared)/components/Hero";
import BrandsGrid from "../(shared)/components/BrandsGrid";
import WhyTrySection from "../(shared)/components/WhyTrySection";
import AppDownloadSection from "../(shared)/components/AppDownloadSection";
import LoadingMessage from "../(shared)/components/ui/LoadingMessage";
import ErrorMessage from "../(shared)/components/ui/ErrorMessage";
import { useTranslation } from "next-i18next";

/* ---------------- Types ---------------- */
type Brand = {
  id: string;
  name: string;
  image: string;
};

/* ---------------- GraphQL query ---------------- */
const BRANDS_QUERY = gql`
  query GetBrands {
    findAllBrands {
      id
      name
      image
    }
  }
`;

export default function BrandsPage() {
  const { t } = useTranslation("common");

  const { data, loading, error } = useQuery<{ findAllBrands: Brand[] }>(
    BRANDS_QUERY,
    {
      context: {
        uri: "https://graphql-api-brown.vercel.app/api/graphql",
      },
    }
  );

  const brands = data?.findAllBrands ?? [];

  return (
    <main className="min-h-screen w-full bg-white">
      <Hero />

      <section className="mx-auto max-w-[1280px] px-[10px] pt-[100px] pb-[100px] text-center">
        <h2 className="text-[36px] font-semibold">
          <span suppressHydrationWarning>{t("brands.selection.title")}</span>{" "}
          <span className="text-[#FF6428]" suppressHydrationWarning>
            {t("brands.selection.highlight")}
          </span>
        </h2>
        <p
          className="mt-2 text-[14px] leading-[22px] text-[#666666]"
          suppressHydrationWarning
        >
          {t("brands.selection.subtitle")}
        </p>

        {loading && (
          <LoadingMessage i18nKey="loading.models" fallback="Loading..." />
        )}

        {error && (
          <ErrorMessage
            i18nKey="error.general"
            values={{ error: error.message }}
            fallback="An error occurred"
          />
        )}

        {!loading && !error && (
          <div className="mt-0">
            <BrandsGrid brands={brands} />
          </div>
        )}
      </section>

      <WhyTrySection />
      <AppDownloadSection />
    </main>
  );
}
