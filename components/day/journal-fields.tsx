import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export function JournalFields() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Journaling</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Textarea placeholder="O que me deu energia hoje?" />
        <Textarea placeholder="Onde perdi foco e por quê?" />
        <Textarea placeholder="Qual ajuste farei amanhã?" />
      </CardContent>
    </Card>
  );
}
