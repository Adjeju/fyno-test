import { cn } from "@/lib/utils";

type Props = { className?: string };

export const CuratorsPickBadge = ({ className }: Props) => (
  <div
    className={cn(
      "text-light-secondary flex h-8 w-28 select-none items-center justify-center rounded bg-[rgba(255,_255,_255,_0.5)] text-xs font-medium backdrop-blur",
      className,
    )}
  >
    Curator’s pick
  </div>
);
