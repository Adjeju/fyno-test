import {
  alphabet,
  comment,
  images,
  itineraryPlanner,
  itinerarySummary,
  itinerarys,
  mainImageUrl,
  user,
} from "../constants";
import {
  DailyPlanDialog,
  Galery,
  Highlight,
  ItineraryInfo,
  ItineraryPlanner,
  ItineraryStepper,
  TopPanel,
} from "../views";

const { duration, exploration, flight } = itinerarySummary;
const { endDate, from, peopleCount, startDate, to } = itineraryPlanner;

export const HomePage = () => {
  return (
    <main className="p-8 md:mx-auto md:w-[761px]">
      <TopPanel />
      <Galery images={images} mainImageUrl={mainImageUrl} />
      <ItineraryInfo
        duration={duration}
        exploration={exploration}
        fligth={flight}
      />
      <Highlight comment={comment} user={user} />
      <ItineraryPlanner
        startDate={startDate}
        endDate={endDate}
        from={from}
        to={to}
        peopleCount={peopleCount}
      />
      <section id="itinerary" className="flex flex-col gap-4">
        {itinerarys.map((itinerary, idx) => (
          <ItineraryStepper
            key={itinerary.id}
            firstNode={alphabet[idx]}
            itinerary={itinerary}
          />
        ))}
      </section>
      <DailyPlanDialog />
    </main>
  );
};
