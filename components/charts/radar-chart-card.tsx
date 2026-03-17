"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DimensionState } from "@/types/domain";

const labels = [
  { key: "corpo", label: "Corpo" },
  { key: "mente", label: "Mente" },
  { key: "espirito", label: "Espírito" }
] as const;

export function RadarChartCard({
  title,
  description,
  score,
  highlighted = false
}: {
  title: string;
  description: string;
  score: DimensionState;
  highlighted?: boolean;
}) {
  const data = labels.map((item) => ({ dimension: item.label, value: score[item.key] }));

  return (
    <Card className={highlighted ? "border-primary/25" : ""}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full sm:h-[360px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data} outerRadius="72%">
              <PolarGrid stroke="hsl(160 10% 84%)" />
              <PolarAngleAxis dataKey="dimension" tick={{ fill: "hsl(160 8% 40%)", fontSize: 13 }} />
              <PolarRadiusAxis tick={false} axisLine={false} domain={[0, 10]} />
              <Radar
                dataKey="value"
                stroke="hsl(173 23% 38%)"
                fill="hsl(173 23% 38%)"
                fillOpacity={0.2}
                strokeWidth={2}
                animationDuration={700}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
