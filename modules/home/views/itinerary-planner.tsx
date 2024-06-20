import { monthDayFormat } from "@/constants/general";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import planeIcon from "@/public/icons/plane.svg";
import userIcon from "@/public/icons/user.svg";

type Props = {
  from: string;
  to: string;
  startDate: Date;
  endDate: Date;
  peopleCount: number;
};

export const ItineraryPlanner = ({
  endDate,
  from,
  peopleCount,
  startDate,
  to,
}: Props) => (
  <section className="mb-12 flex flex-col gap-6">
    <div className="text-2xl font-semibold">Iceland itinerary</div>
    <div className="flex flex-col items-center gap-2 rounded-2xl border bg-[rgba(220,_227,_246,_0.5)] p-6 text-base md:flex-row">
      <div className="flex w-full items-center gap-2">
        <div className="planner-fligth-field">{from}</div>
        <Image priority src={planeIcon} alt="plane-icon" />
        <div className="planner-fligth-field">{to}</div>
      </div>
      <div className="flex w-full justify-between md:justify-normal md:gap-2">
        <div className="planner-field w-[157px] justify-center gap-2">
          <CalendarDays className="h-5 w-5 flex-shrink-0" />
          <div className="text-sm text-light-secondary">
            {format(startDate, monthDayFormat)} -{" "}
            {format(endDate, monthDayFormat)}
          </div>
        </div>
        <div className="planner-field w-[70px] justify-center gap-2">
          <Image priority src={userIcon} alt="user-icon" />
          <div className="text-light-secondary">{peopleCount}</div>
        </div>
      </div>
    </div>
  </section>
);
