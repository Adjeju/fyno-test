import { Stepper } from "@/components/ui/stepper";
import { ReactNode } from "react";

import { Itinerary } from "../../types";
import FirstStep from "./first-step";
import SecondStep from "./second-step";
import ThirdStep from "./third-step";

type Props = { itinerary: Itinerary; firstNode: ReactNode };

export const ItineraryStepper = ({ firstNode, itinerary }: Props) => {
  const { id, hotels, regionHighlights, dailyPlanId, ...info } = itinerary;

  return (
    <Stepper>
      <FirstStep {...info} firstNode={firstNode} />
      <SecondStep
        dailyPlanId={dailyPlanId}
        regionHighlights={regionHighlights}
      />
      {/* <ThirdStep hotels={hotels} /> */}
    </Stepper>
  );
};

export default ItineraryStepper;
