import {
  StepContentWrapper,
  StepHeader,
  StepNode,
  StepWrapper,
} from "@/components/ui/stepper";
import { Hotel } from "../../types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardImage, CardTitle } from "../../components";
import { BedDouble } from "lucide-react";
import { joinDescription } from "@/lib/utils";
import ratingIcon from "@/public/icons/rating.svg";
import Image from "next/image";

type Props = {
  hotels: Hotel[];
};

export const ThirdStep = ({ hotels }: Props) => (
  <StepWrapper>
    <StepHeader>
      <StepNode>
        <BedDouble className="h-4 w-4" />
      </StepNode>
      <div className="text-xl font-semibold">Where to stay</div>
    </StepHeader>
    <StepContentWrapper hideLine>
      <div className="py-4">
        <Carousel className="w-full max-w-[650px]">
          <CarouselContent>
            {hotels.map(
              ({ id, imgUrl, isCuratorsPick, title, price, rating, type }) => (
                <CarouselItem key={id} className="basis-1/3">
                  <Card isCuratorsPick={isCuratorsPick}>
                    <CardImage imgUrl={imgUrl} />
                    <CardContent>
                      <CardTitle title={title} />
                      <div className="flex items-center gap-1.5 text-sm font-semibold">
                        <Image src={ratingIcon} alt="rating-icon" priority />
                        {rating}
                      </div>
                      <div className="subheadline">
                        {joinDescription({ arr: [price, type] })}
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

export default ThirdStep;
