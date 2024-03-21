import { getTimeString } from "@/lib/timer-util";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSolvesByUser } from "@/data/solve";
import { getUserStats } from "@/data/stats";
import { auth } from "@/auth";

export default async function Stats() {
  const session = await auth();
  const user = session?.user;
  const solves = await getSolvesByUser(user?.id);

  if (!solves) return null;

  const solveTimes = solves.map((solve) => solve.time);
  const {
    bestTime,
    worstTime,
    averageOf5,
    averageOf12,
    averageOf100,
    averageOf500,
    averageOf1000,
  } = getUserStats(solveTimes);

  let total = 0;

  for (const solve of solves) {
    total += solve.time;
  }

  let numSolves = solves.length;

  return (
    <div className="flex h-full flex-col justify-center">
      <div className="flex flex-row justify-center">
        <div className="grid grid-cols-2 gap-2">
          <Card className="w-[250px]">
            <CardHeader>
              <CardTitle>Personal Best</CardTitle>
            </CardHeader>
            <CardContent className="text-xl font-bold text-green-500">
              <p>{bestTime == Infinity ? "-" : getTimeString(bestTime)}</p>
            </CardContent>
          </Card>
          <Card className="w-[250px]">
            <CardHeader>
              <CardTitle>Time Spent Solving</CardTitle>
            </CardHeader>
            <CardContent className="text-xl font-bold text-gray-400">
              <p>{total == 0 ? "-" : getTimeString(total)}</p>
            </CardContent>
          </Card>
          <Card className="w-[250px]">
            <CardHeader>
              <CardTitle>Worst Time</CardTitle>
            </CardHeader>
            <CardContent className="text-xl font-bold text-red-500">
              <p>{getTimeString(worstTime)}</p>
            </CardContent>
          </Card>
          <Card className="w-[250px]">
            <CardHeader>
              <CardTitle>Total Number of Solves</CardTitle>
            </CardHeader>
            <CardContent className="text-xl font-bold text-blue-500">
              <p>{numSolves}</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Card className="m-4 w-[508px]">
          <CardHeader>
            <CardTitle>Averages</CardTitle>
          </CardHeader>
          <CardContent className="text-xl font-bold">
            <div className="flex justify-between">
              <p>Average of 5:</p>
              <p>{averageOf5 == 0 ? "-" : getTimeString(averageOf5)}</p>
            </div>
            <div className="flex justify-between">
              <p>Average of 12:</p>
              <p>{averageOf12 == 0 ? "-" : getTimeString(averageOf12)}</p>
            </div>
            <div className="flex justify-between">
              <p>Average of 100:</p>
              <p>{averageOf100 == 0 ? "-" : getTimeString(averageOf100)}</p>
            </div>
            <div className="flex justify-between">
              <p>Average of 500:</p>
              <p>{averageOf500 == 0 ? "-" : getTimeString(averageOf500)}</p>
            </div>
            <div className="flex justify-between">
              <p>Average of 1,000:</p>
              <p>{averageOf1000 == 0 ? "-" : getTimeString(averageOf1000)}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
