import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface SolveCardProps {
  time: string;
  scramble: string;
  id: number;
}

export function SolveCard({ time, scramble, id }: SolveCardProps) {
  return (
    <Card className="m-1 h-[100px] w-[400px] text-lg">
      <Link href={`/solve/${id}`}>
        <CardHeader>
          <CardTitle>{time}</CardTitle>
        </CardHeader>
        <CardContent>{}</CardContent>
      </Link>
    </Card>
  );
}
