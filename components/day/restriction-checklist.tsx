"use client";

import { useState } from "react";

import { restrictions } from "@/data/mock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function RestrictionChecklist() {
  const [enabled, setEnabled] = useState<boolean[]>([true, false, true]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Restrições</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {restrictions.map((restriction, index) => (
          <div key={restriction} className="flex items-center justify-between rounded-xl border border-border/70 px-3 py-2">
            <Label htmlFor={`restriction-${index}`} className="pr-3">
              {restriction}
            </Label>
            <Switch id={`restriction-${index}`} checked={enabled[index]} onCheckedChange={(value) => setEnabled((prev) => prev.map((v, i) => (i === index ? value : v)))} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
