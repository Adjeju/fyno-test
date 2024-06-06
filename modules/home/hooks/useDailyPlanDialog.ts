import { create } from "zustand";

type State = {
  selectedPlan: number | null;
  onSelectedPlanChange: (state: number | null) => void;
};

export const useDailyPlanDialog = create<State>((set) => ({
  selectedPlan: null,
  onSelectedPlanChange: (selectedPlan) => set({ selectedPlan }),
}));
