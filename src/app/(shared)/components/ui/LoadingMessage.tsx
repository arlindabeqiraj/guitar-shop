"use client";

import { useTranslation } from "next-i18next";

type LoadingMessageProps = {
  i18nKey: string;
  fallback?: string;
};

export default function LoadingMessage({
  i18nKey,
  fallback,
}: LoadingMessageProps) {
  const { t } = useTranslation("common");

  return (
    <p
      className="text-center text-gray-500 animate-pulse"
      suppressHydrationWarning
    >
      {t(i18nKey) || fallback || "Loading..."}
    </p>
  );
}
