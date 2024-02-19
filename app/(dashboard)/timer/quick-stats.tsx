import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getUserStats } from "@/data/stats";
import { getTimeString } from "@/lib/timer-util";
import { useQuery } from "@tanstack/react-query";

export function QuickStats() {
  const userId = "1";
  const { data: stats } = useQuery({
    queryKey: ["stats", userId],
    queryFn: () => getUserStats(userId),
  });
  if (!stats) {
    return null;
  }

  const { bestTime, worstTime, averageOf5, averageOf12 } = stats;

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
            <span>{getTimeString(averageOf5)}</span>
          </CardContent>
        </Card>
        <Card className="h-[100px] w-[200px]">
          <CardHeader>
            <CardTitle>Average of 12</CardTitle>
          </CardHeader>
          <CardContent>
            <span>{getTimeString(averageOf12)}</span>
          </CardContent>
        </Card>
        <Card className="h-[100px] w-[200px]">
          <CardHeader>
            <CardTitle>Worst</CardTitle>
          </CardHeader>
          <CardContent>
            <span>{getTimeString(worstTime)}</span>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
