import { clsx, type ClassValue } from "clsx";
import exp from "constants";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatViews(views: number) {
  if (views < 2) return views + " View";
  if (views < 1000) return views + " Views";
  if (views < 1000000) return `${(views / 1000).toFixed(1)}k Views`;
  return `${(views / 1000000).toFixed(1)}m Views`;
}
