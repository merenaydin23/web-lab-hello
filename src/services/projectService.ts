import type { Project } from "../types/project";

export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch("/data/projects.json");
  if (!response.ok) {
    throw new Error("Veri yuklenemedi.");
  }
  return response.json();
}
