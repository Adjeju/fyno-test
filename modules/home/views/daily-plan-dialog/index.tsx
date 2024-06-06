"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  StepContentWrapper,
  StepHeader,
  StepLine,
  StepNode,
  Stepper,
} from "@/components/ui/stepper";
import { useDailyPlanDialog } from "@/modules/home/hooks";
import { Ellipsis, List, Sparkles } from "lucide-react";
import { dailyPlans } from "../../constants";
import Image from "next/image";
import arrowIcon from "@/public/icons/arrow.svg";
import { DailyPlanRow } from "./row";

export const DailyPlanDialog = () => {
  const { onSelectedPlanChange, selectedPlan } = useDailyPlanDialog();

  if (!selectedPlan) {
    return null;
  }

  const { days } = dailyPlans.find((plan) => plan.id === selectedPlan)!;

  return (
    <Dialog
      open={Boolean(selectedPlan)}
      onOpenChange={() => onSelectedPlanChange(null)}
    >
      <DialogContent className="max-w-[697px] overflow-y-auto">
        <Stepper>
          <StepLine className="h-6" />
          <StepHeader>
            <StepNode>
              <List className="h-4 w-4" />
            </StepNode>
            <div className="flex flex-1 items-center justify-between">
              <div className="title">{days.length} days plan</div>
              <Button
                variant="outline"
                size="sm"
                className="title-base rounded-lg"
                onClick={() => onSelectedPlanChange(null)}
              >
                <Sparkles className="mr-2 h-4 w-4" /> Show highlights
              </Button>
            </div>
          </StepHeader>
          <StepContentWrapper>
            <div className="flex flex-1 flex-col gap-6 pb-4 pt-6">
              {days.map(({ id, duration, items }, idx) => (
                <div key={id} className="flex flex-col gap-3">
                  <div className="flex justify-between">
                    <div className="title">Day {idx + 1}</div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center gap-2.5 rounded-3xl bg-[rgba(242,_242,_247,_1)] px-2 py-1 text-light-secondary">
                        <Image alt="arrow" priority src={arrowIcon} />
                        <div>{duration}</div>
                      </div>
                      <Ellipsis className="h-6 w-6 text-light-secondary" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    {items.map((item) => (
                      <DailyPlanRow item={item} key={item.id} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </StepContentWrapper>
        </Stepper>
      </DialogContent>
    </Dialog>
  );
};
