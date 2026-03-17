import Link from "next/link";

import { AppShell } from "@/components/app-shell";
import { RadarChartCard } from "@/components/charts/radar-chart-card";
import { HabitChecklist } from "@/components/day/habit-checklist";
import { JournalFields } from "@/components/day/journal-fields";
import { RestrictionChecklist } from "@/components/day/restriction-checklist";
import { Button } from "@/components/ui/button";
import { todayState } from "@/data/mock";

export default function DayPage() {
  return (
    <AppShell>
      <section className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Dia 4</h1>
          <p className="text-sm text-muted-foreground">Execute o protocolo com presença. Pequenas ações consistentes recalibram seu estado.</p>
        </div>

        <RadarChartCard title="Estado parcial do dia" description="Atualizado em tempo real conforme hábitos, restrições e reflexão." score={todayState} />

        <div className="grid gap-6 lg:grid-cols-2">
          <HabitChecklist />
          <RestrictionChecklist />
        </div>

        <JournalFields />

        <Button asChild size="lg" className="w-full sm:w-auto">
          <Link href="/result">Finalizar dia</Link>
        </Button>
      </section>
    </AppShell>
  );
}
