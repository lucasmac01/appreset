import { feedback } from "@/data/mock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FeedbackCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Leitura do seu dia</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm leading-relaxed">
        <p>
          <span className="font-semibold">Ponto positivo:</span> {feedback.positive}
        </p>
        <p>
          <span className="font-semibold">Ponto de atenção:</span> {feedback.attention}
        </p>
        <p>
          <span className="font-semibold">Sugestão para amanhã:</span> {feedback.suggestion}
        </p>
      </CardContent>
    </Card>
  );
}
