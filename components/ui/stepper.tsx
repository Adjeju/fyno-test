import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

export const Stepper = ({
  children,
  className,
  ...props
}: ComponentProps<"div"> & PropsWithChildren) => (
  <div className={cn("flex flex-col gap-px", className)} {...props}>
    {children}
  </div>
);

export const StepWrapper = ({ children }: PropsWithChildren) => (
  <div className="flex flex-col gap-px">{children}</div>
);

export const StepHeader = ({ children }: PropsWithChildren) => (
  <div className="flex items-center gap-4">{children}</div>
);

export const StepNode = ({
  children,
  className,
  ...props
}: ComponentProps<"div"> & PropsWithChildren) => (
  <div
    className={cn(
      "flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(157,_157,_161,_1)] text-white",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export const StepLine = ({
  hide = false,
  className,
}: {
  hide?: boolean;
  className?: string;
}) => (
  <div className="flex h-[inherit] w-6 flex-shrink-0 items-center justify-center">
    <div
      className={cn(
        "h-full w-px bg-[rgba(60,_60,_67,_0.18)]",
        hide && "hidden",
        className,
      )}
    />
  </div>
);

export const StepContentWrapper = ({
  children,
  hideLine = false,
}: { hideLine?: boolean } & PropsWithChildren) => (
  <div className="flex gap-4">
    <StepLine hide={hideLine} />
    {children}
  </div>
);
