import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { timeSinceDate } from "@/lib/time-util";
import { FaceScramble } from "./scramble-visual";

interface SolveCardProps {
  time: string;
  scramble: string;
  id: number;
  date: Date;
}

export function SolveCard({ time, scramble, id, date }: SolveCardProps) {
  return (
    <Card className="m-1 h-[110px] w-[400px] text-xl">
      <Link href={`/solve/${id}`}>
        <div className="flex justify-between">
          <div>
            <CardHeader>
              <CardTitle>{time}</CardTitle>
            </CardHeader>
            <CardContent className="text-base">
              {timeSinceDate(date)}
            </CardContent>
          </div>
          <FaceScramble scramble={scramble} />
        </div>
      </Link>
    </Card>
  );
}
