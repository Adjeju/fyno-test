export type User = { name: string; avatarUrl: string; role: string };

export type ItinerarySummary = {
  duration: number;
  exploration: number;
  flight: string;
};

export type ItineraryPlanner = {
  from: string;
  to: string;
  startDate: Date;
  endDate: Date;
  peopleCount: number;
};

export type Itinerary = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  regionHighlights: RegionHighlight[];
  hotels: Hotel[];
  dailyPlanId: number;
};

type BaseInfo = {
  id: number;
  imgUrl: string;
  isCuratorsPick: boolean;
  title: string;
};

export type RegionHighlight = BaseInfo & {
  duration: string;
  desription: string;
};

export type Hotel = BaseInfo & {
  rating: string;
  price: string;
  type: string;
};

export type DailyPlanItem = {
  id: number;
  title: string;
  isCuratorsPick: boolean;
  duration: string;
  type: string;
  description: string;
  imgUrl: string;
};

export type DayPlan = { id: number; duration: string; items: DailyPlanItem[] };

export type DailyPlan = {
  id: number;
  days: DayPlan[];
};
