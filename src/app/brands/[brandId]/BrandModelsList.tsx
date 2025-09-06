"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import ModelsFilters from "../../(shared)/components/ModelsFilters";
import ModelsGrid from "../../(shared)/components/ModelsGrid";
import InfoFooter from "../../(shared)/components/InfoFooter";
import LoadingMessage from "../../(shared)/components/ui/LoadingMessage";
import ErrorMessage from "../../(shared)/components/ui/ErrorMessage";

/* ---------------- Types ---------------- */
type Model = {
  id: string;
  name: string;
  type: string;
  image: string;
  price: number;
};

export default function BrandModelsList({
  models,
  brandId,
  loading,
  error,
}: {
  models: Model[];
  brandId: string;
  loading?: boolean;
  error?: string;
}) {
  const { t } = useTranslation("common");

  const [search, setSearch] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());

  const handleImageError = (id: string) => {
    setBrokenImages((prev) => new Set(prev).add(id));
  };

  const filteredModels = models.filter(
    (m) =>
      !brokenImages.has(m.id) &&
      m.image?.trim() !== "" &&
      m.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterType
        ? m.type.toLowerCase().includes(filterType.toLowerCase())
        : true)
  );

  const visibleModels = filteredModels.slice(0, visibleCount);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        setVisibleCount((prev) => prev + 6);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return <LoadingMessage message={t("loading.models")} />;
  if (error) return <ErrorMessage message={t("error.general", { error })} />;

  return (
    <main className="px-10 py-16 mt-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        {t("brands.selection.title")}{" "}
        <span className="text-[#FF6428]">
          {t("brands.selection.highlight")}
        </span>
      </h2>

      <ModelsFilters
        search={search}
        filterType={filterType}
        onSearchChange={(val: string) => {
          setSearch(val);
          setVisibleCount(6);
        }}
        onFilterChange={(val: string) => setFilterType(val)}
      />

      <ModelsGrid
        models={visibleModels}
        brandId={brandId}
        onImageError={handleImageError}
      />

      <InfoFooter
        visibleCount={visibleModels.length}
        totalCount={filteredModels.length}
      />
    </main>
  );
}
