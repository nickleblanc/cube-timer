"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getUserStats } from "@/data/stats";
import { getSolvesByUser } from "@/data/solve";
import { getTimeString } from "@/lib/timer-util";
import { useQuery } from "@tanstack/react-query";
import { useCurrentUser } from "@/hooks/use-current-user";

export function QuickStats() {
  const user = useCurrentUser();
  const userId = user?.id;
  const { data: solves } = useQuery({
    queryKey: ["solves", userId],
    queryFn: () => getSolvesByUser(userId),
  });

  if (!solves) {
    return null;
  }

  const solveTimes = solves.map((solve) => solve.time);

  const { bestTime, worstTime, averageOf5, averageOf12 } =
    getUserStats(solveTimes);

  return (
    <Card className="grow p-1">
      <CardContent className="grid h-full grid-cols-2 content-center justify-items-center gap-y-1 px-4">
        <Card className="h-[100px] w-[200px]">
          <CardHeader>
            <CardTitle>PB</CardTitle>
          </CardHeader>
          <CardContent>
            <span>{bestTime == Infinity ? "-" : getTimeString(bestTime)}</span>
          </CardContent>
        </Card>
        <Card className="h-[100px] w-[200px]">
          <CardHeader>
            <CardTitle>Average of 5</CardTitle>
          </CardHeader>
          <CardContent>
            <span>{averageOf5 == 0 ? "-" : getTimeString(averageOf5)}</span>
          </CardContent>
        </Card>
        <Card className="h-[100px] w-[200px]">
          <CardHeader>
            <CardTitle>Average of 12</CardTitle>
          </CardHeader>
          <CardContent>
            <span>{averageOf12 == 0 ? "-" : getTimeString(averageOf12)}</span>
          </CardContent>
        </Card>
        <Card className="h-[100px] w-[200px]">
          <CardHeader>
            <CardTitle>Worst</CardTitle>
          </CardHeader>
          <CardContent>
            <span>{worstTime == 0 ? "-" : getTimeString(worstTime)}</span>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
