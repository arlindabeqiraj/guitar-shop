"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

type ErrorMessageProps = {
  i18nKey?: string;
  fallback?: string;
  values?: Record<string, string | number>;
};

export default function ErrorMessage({
  i18nKey = "error.general",
  fallback = "An error occurred",
  values = {},
}: ErrorMessageProps) {
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <p className="text-center text-red-500">
      {mounted ? (t(i18nKey, values) as string) : fallback}
    </p>
  );
}
