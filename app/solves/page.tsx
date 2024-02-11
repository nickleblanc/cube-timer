import NavBar from "@/components/navbar";
import { getAllSolves } from "@/data/solve";
import { getTimeString } from "@/lib/timer-util";
import { SolveCard } from "@/components/solve-card";

export default async function Solves() {
  const solves = await getAllSolves();

  const solveList = solves.map((solve) => {
    const time = getTimeString(solve.time);
    return (
      <SolveCard
        key={solve.id}
        time={time}
        scramble={solve.scramble}
        id={solve.id}
      />
    );
  });

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center">{solveList}</div>
    </>
  );
}
