import {
  StepContentWrapper,
  StepHeader,
  StepNode,
  StepWrapper,
} from "@/components/ui/stepper";
import { ReactNode } from "react";

type Props = {
  firstNode: ReactNode;
  title: string;
  tags: string[];
  description: string;
};

const FirstStep = ({ description, firstNode, tags, title }: Props) => (
  <StepWrapper>
    <StepHeader>
      <StepNode className="bg-[rgba(113,_78,_255,_1)]">{firstNode}</StepNode>
      <div className="text-xl font-semibold">{title}</div>
    </StepHeader>
    <StepContentWrapper>
      <div className="flex flex-col gap-4 pb-10">
        <div className="flex gap-3 text-[rgba(60,_60,_67,_0.5)]">
          {tags.map((tag, idx) => (
            <div key={idx}>{tag}</div>
          ))}
        </div>
        <div className="text-light-secondary">{description}</div>
      </div>
    </StepContentWrapper>
  </StepWrapper>
);

export default FirstStep;
