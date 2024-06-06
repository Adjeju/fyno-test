import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Grip } from "lucide-react";
import Image from "next/image";

type Props = {
  mainImageUrl: string;
  images: string[];
};

export const Galery = ({ mainImageUrl, images }: Props) => (
  <div className="relative mb-6 grid h-[292px] grid-cols-2 gap-1">
    <Button
      variant="outline"
      className="absolute bottom-4 right-4 z-10 rounded-[40px] border-none bg-[rgba(136,_136,_136,_0.3)] font-semibold text-white backdrop-blur"
    >
      <Grip className="mr-2 h-6 w-6" /> All photos
    </Button>
    <div className="relative h-[inherit] w-full">
      <Image
        src={mainImageUrl}
        alt="main-image"
        className="rounded-l-3xl object-cover"
        fill
        priority
      />
    </div>
    <div className="relative grid h-[inherit] grid-cols-2 grid-rows-2 gap-1">
      {images.map((url, idx) => (
        <div key={url} className="relative h-full w-full">
          <Image
            src={url}
            alt="addition-image"
            className={cn(
              "object-cover",
              idx === 1 && "rounded-tr-3xl",
              idx === 3 && "rounded-br-3xl",
            )}
            fill
            priority
          />
        </div>
      ))}
    </div>
  </div>
);
