"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

type LoadingMessageProps = {
  i18nKey?: string;
  fallback?: string;
};

export default function LoadingMessage({
  i18nKey = "loading.models",
  fallback = "Loading...",
}: LoadingMessageProps) {
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <p className="text-center text-gray-500 animate-pulse">
      {mounted ? t(i18nKey) : fallback}
    </p>
  );
}
