"use client";

import { useScrambleStore } from "@/stores/scramble";
import { Card, CardContent } from "@/components/ui/card";
import { ScrambleVisual } from "@/components/scramble-visual";

export function TimerScramble() {
  const scramble = useScrambleStore((state) => state.scramble);
  return (
    <Card className="flex items-center justify-center">
      <CardContent className="flex items-center justify-center p-2">
        <ScrambleVisual scramble={scramble} />
      </CardContent>
    </Card>
  );
}
