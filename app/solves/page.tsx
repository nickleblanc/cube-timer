import NavBar from "@/components/navbar";
import { getAllSolves } from "@/data/solve";
import { getTimeString } from "@/lib/timer-util";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function Solves() {
  const solves = await getAllSolves();

  const solveList = solves.map((solve) => {
    const time = getTimeString(solve.time);
    return (
      <Card
        key={solve.id}
        className="m-1 h-[100px] w-[400px] text-lg"
      >
        <CardHeader>
          <CardTitle>{time}</CardTitle>
        </CardHeader>
        <CardContent>{}</CardContent>
      </Card>
    );
  });

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center">{solveList}</div>
    </>
  );
}
