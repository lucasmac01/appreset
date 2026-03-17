import { Check, Lock } from "lucide-react";

import { dayTrail } from "@/data/mock";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DayProgressList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trilha do protocolo</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {dayTrail.map((item) => (
            <div
              key={item.day}
              className={cn(
                "rounded-xl border p-3 text-center text-xs transition",
                item.status === "completed" && "border-primary/30 bg-primary/5 text-primary",
                item.status === "available" && "border-border bg-card text-foreground",
                item.status === "locked" && "opacity-50"
              )}
            >
              <p className="font-medium">Dia {item.day}</p>
              <p className="mt-1 inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                {item.status === "completed" && <Check className="h-3 w-3" />}
                {item.status === "locked" && <Lock className="h-3 w-3" />}
                {item.status === "available" ? "Disponível" : item.status === "completed" ? "Concluído" : "Bloqueado"}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
