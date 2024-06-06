import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function joinDescription({
  arr,
  separator = " · ",
}: {
  arr: string[];
  separator?: string;
}) {
  return arr.join(separator);
}
