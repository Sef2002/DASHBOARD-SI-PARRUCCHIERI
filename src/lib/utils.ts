import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type ClassValue = string | number | boolean | undefined | null | ClassValue[];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

// Add this new function to handle local date formatting
export function formatDateToYYYYMMDDLocal(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}