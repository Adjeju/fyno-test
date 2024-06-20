import { Button } from "@/components/ui/button";

type Props = {
  duration: number;
  exploration: number;
  fligth: string;
};

export const ItineraryInfo = ({ duration, exploration, fligth }: Props) => (
  <section className="mb-12 flex items-center justify-between rounded-2xl border p-6">
    <div className="flex flex-col gap-3 md:flex-row md:gap-16">
      <div className="flex flex-col">
        <div className="text-light-secondary">Trip duration</div>
        <div className="font-semibold">
          {duration} {duration === 1 ? "day" : "days"}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-light-secondary">Exploration</div>
        <div className="font-semibold">
          {exploration} {exploration === 1 ? "region" : "regions"}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-light-secondary">Flight</div>
        <div className="font-semibold">{fligth}</div>
      </div>
    </div>
    <Button asChild variant="ghost">
      <a href="#itinerary" className="text-base text-[rgba(113,_78,_255,_1)]">
        View internatory
      </a>
    </Button>
  </section>
);
