import { CuratorsPickBadge } from "@/components/ui/curators-pick-badge";
import bookmarkIcon from "@/public/icons/bookmark.svg";
import Image from "next/image";
import { PropsWithChildren } from "react";

type Props = {
  isCuratorsPick: boolean;
} & PropsWithChildren;

export const CardTitle = ({ title }: { title: string }) => (
  <div className="title">{title}</div>
);

export const CardContent = ({ children }: PropsWithChildren) => (
  <div className="flex flex-col gap-1">{children}</div>
);

export const CardImage = ({ imgUrl }: { imgUrl: string }) => (
  <img src={imgUrl} alt="img" className="h-[292px] rounded-2xl object-cover" />
);

export const Card = ({ isCuratorsPick, children }: Props) => {
  return (
    <div className="relative flex flex-col gap-2">
      {isCuratorsPick && (
        <CuratorsPickBadge className="absolute left-4 top-4" />
      )}
      <Image
        priority
        alt="bookmark-icon"
        src={bookmarkIcon}
        className="absolute right-4 top-4"
      />
      {children}
    </div>
  );
};
