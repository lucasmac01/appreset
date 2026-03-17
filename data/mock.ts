import { DayProgress, DimensionState } from "@/types/domain";

export const overallState: DimensionState = { corpo: 7.4, mente: 8.2, espirito: 7.9 };
export const todayState: DimensionState = { corpo: 7.8, mente: 7.1, espirito: 8.4 };

export const dayTrail: DayProgress[] = [
  { day: 1, status: "completed", score: { corpo: 6.5, mente: 6.9, espirito: 6.4 } },
  { day: 2, status: "completed", score: { corpo: 7.1, mente: 7.2, espirito: 6.9 } },
  { day: 3, status: "completed", score: { corpo: 7.3, mente: 7.8, espirito: 7.5 } },
  { day: 4, status: "available", score: todayState },
  { day: 5, status: "locked", score: { corpo: 0, mente: 0, espirito: 0 } },
  { day: 6, status: "locked", score: { corpo: 0, mente: 0, espirito: 0 } },
  { day: 7, status: "locked", score: { corpo: 0, mente: 0, espirito: 0 } },
  { day: 8, status: "locked", score: { corpo: 0, mente: 0, espirito: 0 } },
  { day: 9, status: "locked", score: { corpo: 0, mente: 0, espirito: 0 } },
  { day: 10, status: "locked", score: { corpo: 0, mente: 0, espirito: 0 } }
];

export const habits = [
  "20 minutos de movimento consciente",
  "10 minutos de respiração focada",
  "Planejamento de 3 prioridades"
];

export const restrictions = [
  "Sem redes sociais até 12h",
  "Sem consumo passivo noturno",
  "Sem multitarefa durante bloco profundo"
];

export const feedback = {
  positive: "Você elevou o eixo Espírito com consistência e presença nas pausas conscientes.",
  attention: "A oscilação em Mente indica distrações curtas no meio da tarde.",
  suggestion: "Amanhã, proteja um bloco de foco de 90 minutos logo após o primeiro hábito." 
};
