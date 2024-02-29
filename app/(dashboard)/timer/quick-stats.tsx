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

  const { bestTime, worstTime, averageOf5, averageOf12, average } =
    getUserStats(solveTimes);

  return (
    <Card className="hidden grow items-center justify-center p-1 lg:flex ">
      <CardContent className="grid h-full w-full grid-cols-2 grid-rows-3 content-center justify-items-center gap-1 p-2">
        <Card className="row-span-2 w-full">
          <CardHeader>
            <CardTitle>PB</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-end p-5 text-4xl font-bold">
            <span>{bestTime == Infinity ? "-" : getTimeString(bestTime)}</span>
          </CardContent>
        </Card>
        <Card className="row-span-1 h-[100px] w-full">
          <CardHeader className="pb-3">
            <CardTitle>Worst</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-lg font-bold">
            <span>{worstTime == 0 ? "-" : getTimeString(worstTime)}</span>
          </CardContent>
        </Card>
        <Card className="h-[100px] w-full">
          <CardHeader className="pb-3">
            <CardTitle>Average</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-lg font-bold">
            <span>{average == 0 ? "-" : getTimeString(average)}</span>
          </CardContent>
        </Card>
        <Card className="h-[100px] w-full">
          <CardHeader className="pb-3">
            <CardTitle>Average of 5</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-lg font-bold">
            <span>{averageOf5 == 0 ? "-" : getTimeString(averageOf5)}</span>
          </CardContent>
        </Card>
        <Card className="h-[100px] w-full">
          <CardHeader className="pb-3">
            <CardTitle>Average of 12</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-lg font-bold">
            <span>{averageOf12 == 0 ? "-" : getTimeString(averageOf12)}</span>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
