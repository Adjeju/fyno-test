"use client";

import {
  StepContentWrapper,
  StepHeader,
  StepNode,
  StepWrapper,
} from "@/components/ui/stepper";
import { useDailyPlanDialog } from "../../hooks";
import { RegionHighlight } from "../../types";
import { Button } from "@/components/ui/button";
import { List, Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardImage, CardTitle } from "../../components";
import { joinDescription } from "@/lib/utils";

type SecondStepProps = {
  regionHighlights: RegionHighlight[];
  dailyPlanId: number;
};

const SecondStep = ({ regionHighlights, dailyPlanId }: SecondStepProps) => {
  const { onSelectedPlanChange } = useDailyPlanDialog();

  return (
    <StepWrapper>
      <StepHeader>
        <StepNode>
          <Sparkles className="h-4 w-4" />
        </StepNode>
        <div className="flex flex-1 items-center justify-between">
          <div className="title">Region highlights</div>
          <Button
            variant="outline"
            size="sm"
            className="title-base rounded-lg"
            onClick={() => onSelectedPlanChange(dailyPlanId)}
          >
            <List className="mr-2 h-4 w-4" /> Show daily plan
          </Button>
        </div>
      </StepHeader>
      <StepContentWrapper>
        <div className="py-8">
          <Carousel className="w-full max-w-[650px]">
            <CarouselContent>
              {regionHighlights.map(
                ({
                  id,
                  imgUrl,
                  isCuratorsPick,
                  desription,
                  duration,
                  title,
                }) => (
                  <CarouselItem key={id} className="basis-1/3">
                    <Card isCuratorsPick={isCuratorsPick}>
                      <CardImage imgUrl={imgUrl} />
                      <CardContent>
                        <CardTitle title={title} />
                        <div className="subheadline">
                          {joinDescription({ arr: [duration, desription] })}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ),
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </StepContentWrapper>
    </StepWrapper>
  );
};

export default SecondStep;
