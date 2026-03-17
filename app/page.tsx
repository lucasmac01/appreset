import Link from "next/link";

import { AppShell } from "@/components/app-shell";
import { DayProgressList } from "@/components/dashboard/day-progress-list";
import { WelcomeModal } from "@/components/dashboard/welcome-modal";
import { RadarChartCard } from "@/components/charts/radar-chart-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { overallState, todayState } from "@/data/mock";

export default function DashboardPage() {
  return (
    <AppShell>
      <WelcomeModal />
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Olá, Lucas</p>
          <h1 className="text-3xl font-semibold tracking-tight">Seu estado interno está evoluindo com consistência.</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <RadarChartCard
            highlighted
            title="Panorama da Jornada"
            description="Leitura acumulada dos 10 dias: o equilíbrio entre Corpo, Mente e Espírito é seu indicador central de evolução."
            score={overallState}
          />
          <div className="space-y-6">
            <RadarChartCard title="Estado de Hoje" description="Atualização com base nas ações do dia atual." score={todayState} />
            <Card>
              <CardContent className="pt-6 text-sm text-muted-foreground">
                O gráfico não mede produtividade bruta. Ele mede alinhamento interno para sustentar foco, energia e direção.
              </CardContent>
            </Card>
          </div>
        </div>

        <DayProgressList />

        <Button asChild size="lg" className="w-full sm:w-auto">
          <Link href="/day">Continuar dia</Link>
        </Button>
      </section>
    </AppShell>
  );
}
