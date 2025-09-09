"use client";

import { useTranslation } from "next-i18next";

type ErrorMessageProps = {
  i18nKey: string;
  values?: Record<string, unknown>;
  fallback?: string;
};

export default function ErrorMessage({
  i18nKey,
  values,
  fallback,
}: ErrorMessageProps) {
  const { t } = useTranslation("common");

  return (
    <p className="text-center text-red-500" suppressHydrationWarning>
      {t(i18nKey, values) || fallback || "An error occurred"}
    </p>
  );
}
