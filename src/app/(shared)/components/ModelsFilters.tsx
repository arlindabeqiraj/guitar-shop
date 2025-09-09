"use client";

import { Filter, Search } from "lucide-react";
import { useTranslation } from "next-i18next";

type ModelsFiltersProps = {
  search: string;
  filterType: string;
  onSearchChange?: (value: string) => void;
  onFilterChange?: (value: string) => void;
};

export default function ModelsFilters({
  search,
  filterType,
  onSearchChange,
  onFilterChange,
}: ModelsFiltersProps) {
  const { t } = useTranslation("common");

  return (
    <div className="flex justify-center gap-4 mb-12">
      <div className="relative">
        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <select
          value={filterType}
          onChange={(e) => onFilterChange?.(e.target.value)}
          className={`pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 appearance-none
            ${filterType ? "text-[#FF6428]" : "text-gray-500"}`}
        >
          <option value="">{t("filters.allTypes")}</option>
          <option value="Acoustic">{t("filters.acoustic")}</option>
          <option value="Electric">{t("filters.electric")}</option>
          <option value="Bass">{t("filters.bass")}</option>
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          ▼
        </span>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder={t("filters.searchPlaceholder")}
          value={search}
          onChange={(e) => onSearchChange?.(e.target.value)}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6428]"
        />
      </div>
    </div>
  );
}
