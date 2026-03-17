export type DimensionState = {
  corpo: number;
  mente: number;
  espirito: number;
};

export type DayStatus = "locked" | "available" | "completed";

export type DayProgress = {
  day: number;
  status: DayStatus;
  score: DimensionState;
};
