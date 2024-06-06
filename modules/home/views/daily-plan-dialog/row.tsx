import { CuratorsPickBadge } from "@/components/ui/curators-pick-badge";
import { DailyPlanItem } from "../../types";
import { joinDescription } from "@/lib/utils";
import { Ellipsis, Equal } from "lucide-react";

type DailyPlanRowProps = { item: DailyPlanItem };

export const DailyPlanRow = ({ item }: DailyPlanRowProps) => {
  const { description, duration, id, isCuratorsPick, title, type, imgUrl } =
    item;

  return (
    <div className="relative flex items-center gap-4">
      <div className="absolute -left-8 top-1/2 flex h-2 w-2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-slate-600 bg-white" />
      <img src={imgUrl} alt="" className="h-32 w-24 rounded-xl object-cover" />
      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="title">{title}</div>
          {isCuratorsPick && <CuratorsPickBadge />}
          <div className="subheadline">
            {joinDescription({ arr: [duration, type, description] })}
          </div>
        </div>
        <div className="text-light-secondary flex gap-2">
          <Equal className="h-6 w-6" />
          <Ellipsis className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};
