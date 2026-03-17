"use client";

import { useState } from "react";

import { habits } from "@/data/mock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function HabitChecklist() {
  const [checked, setChecked] = useState<boolean[]>([true, false, true]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hábitos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {habits.map((habit, index) => (
          <div key={habit} className="flex items-center space-x-3 rounded-xl border border-border/70 px-3 py-2">
            <Checkbox id={`habit-${index}`} checked={checked[index]} onCheckedChange={(value) => setChecked((prev) => prev.map((v, i) => (i === index ? Boolean(value) : v)))} />
            <Label htmlFor={`habit-${index}`}>{habit}</Label>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
