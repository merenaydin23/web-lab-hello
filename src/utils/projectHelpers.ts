import type { Project, Category, SortField, SortOrder } from "../types/project";

export function applyFilters(
  projects: Project[],
  search: string,
  category: Category | "all",
  sortField: SortField,
  sortOrder: SortOrder
): Project[] {
  let filtered = [...projects];

  // Arama
  if (search.trim()) {
    const s = search.toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(s) ||
      p.description.toLowerCase().includes(s) ||
      p.tech.some(t => t.toLowerCase().includes(s))
    );
  }

  // Kategori
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  // Siralama
  filtered.sort((a, b) => {
    let comparison = 0;
    if (sortField === "year") {
      comparison = a.year - b.year;
    } else {
      comparison = a.title.localeCompare(b.title);
    }
    return sortOrder === "asc" ? comparison : -comparison;
  });

  return filtered;
}
