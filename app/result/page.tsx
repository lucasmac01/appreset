import Link from "next/link";

import { AppShell } from "@/components/app-shell";
import { RadarChartCard } from "@/components/charts/radar-chart-card";
import { FeedbackCard } from "@/components/result/feedback-card";
import { Button } from "@/components/ui/button";

const resultState = { corpo: 8.1, mente: 7.5, espirito: 8.3 };

export default function ResultPage() {
  return (
    <AppShell>
      <section className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Dia concluído</h1>
          <p className="text-sm text-muted-foreground">Seu loop de execução foi fechado com clareza.</p>
        </div>

        <RadarChartCard
          highlighted
          title="Resultado do dia"
          description="Leitura final após protocolo completo: evolução visível e próxima ação definida."
          score={resultState}
        />

        <FeedbackCard />

        <Button asChild size="lg" className="w-full sm:w-auto">
          <Link href="/">Voltar ao dashboard</Link>
        </Button>
      </section>
    </AppShell>
  );
}
