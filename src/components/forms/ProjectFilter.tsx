import type { Category, SortField, SortOrder } from "../../types/project";
import Input from "../ui/Input";

interface ProjectFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: Category | "all";
  onCategoryChange: (value: Category | "all") => void;
  sortField: SortField;
  onSortFieldChange: (value: SortField) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (value: SortOrder) => void;
  resultCount: number;
  totalCount: number;
}

const categories: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "Tümü" },
  { value: "frontend", label: "Frontend" },
  { value: "fullstack", label: "Full Stack" },
  { value: "backend", label: "Backend" },
];

export default function ProjectFilter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sortField,
  onSortFieldChange,
  sortOrder,
  onSortOrderChange,
  resultCount,
  totalCount,
}: ProjectFilterProps) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm mb-12 space-y-6">
      <div className="relative">
        <Input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Proje ara (başlık, teknoloji)..."
          className="pl-10"
        />
        <span className="absolute left-3 top-[34px] -translate-y-1/2 text-gray-400">🔍</span>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex gap-2 flex-wrap" role="group" aria-label="Kategori filtresi">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onCategoryChange(cat.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                category === cat.value
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
              }`}
              aria-pressed={category === cat.value}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex gap-3 items-center w-full md:w-auto">
          <select
            value={sortField}
            onChange={(e) => onSortFieldChange(e.target.value as SortField)}
            className="flex-1 md:flex-none border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-1.5 text-sm dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
          >
            <option value="year">Yıla Göre</option>
            <option value="title">Başlığa Göre</option>
          </select>
          <button
            onClick={() => onSortOrderChange(sortOrder === "asc" ? "desc" : "asc")}
            className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all font-medium"
          >
            {sortOrder === "asc" ? "↑ Artan" : "↓ Azalan"}
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 border-t border-gray-50 dark:border-gray-800 pt-4">
        <span className="font-bold text-blue-600">{resultCount}</span> / {totalCount} proje listeleniyor
      </p>
    </div>
  );
}
