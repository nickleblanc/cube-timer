import { getAllSolves } from "@/data/solve";
import { getTimeString } from "@/lib/timer-util";
import NavBar from "@/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Stats() {
  const stats = await getAllSolves();

  let total = 0;
  let timestring = "";

  for (const solve of stats) {
    total += solve.time;
    timestring = getTimeString(total);
  }

  let num = stats.length;

  return (
    <>
      <div className="flex flex-row justify-center">
        <Card className="m-2 w-[250px]">
          <CardHeader>
            <CardTitle>Time Spent Solving</CardTitle>
          </CardHeader>
          <CardContent className="text-xl font-bold text-green-500">
            <p>{timestring}</p>
          </CardContent>
        </Card>
        <Card className="m-2 w-[250px]">
          <CardHeader>
            <CardTitle>Total Number of Solves</CardTitle>
          </CardHeader>
          <CardContent className="text-xl font-bold text-blue-500">
            <p>{num}</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
