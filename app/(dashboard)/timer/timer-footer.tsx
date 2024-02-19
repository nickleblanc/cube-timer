"use client";

import { useScrambleStore } from "@/stores/scramble";
import Stats from "@/components/stats";
import { QuickStats } from "./quick-stats";
import { ScrambleVisual } from "@/components/scramble-visual";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function TimerFooter() {
  const scramble = useScrambleStore((state) => state.scramble);
  return (
    <div className="m-1 flex space-x-2">
      <Stats />
      <QuickStats />
      <Card className="flex items-center justify-center">
        <CardContent className="flex items-center justify-center p-2">
          <ScrambleVisual scramble={scramble} />
        </CardContent>
      </Card>
    </div>
  );
}
