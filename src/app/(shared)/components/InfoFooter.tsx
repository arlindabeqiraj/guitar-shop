"use client";

import { useTranslation } from "next-i18next";

export default function InfoFooter({
  visibleCount,
  totalCount,
}: {
  visibleCount: number;
  totalCount: number;
}) {
  const { t } = useTranslation("common");

  return (
    <p className="text-center mt-8 text-gray-500">
      {t("infoFooter.results", { visibleCount, totalCount })}
    </p>
  );
}
