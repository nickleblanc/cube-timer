import { getSolvesByUser } from "@/data/solve";
import { getTimeString } from "@/lib/timer-util";
import { SolveCard } from "@/components/solve-card";
import { auth } from "@/auth";

export default async function Solves() {
  const session = await auth();
  const userId = session?.user?.id;
  const solves = await getSolvesByUser(userId);

  if (!solves) {
    return null;
  }

  const solveList = solves.map((solve) => {
    const time = getTimeString(solve.time);
    return (
      <SolveCard
        key={solve.id}
        time={time}
        scramble={solve.scramble}
        id={solve.id}
        date={solve.createdAt}
      />
    );
  });

  return (
    <>
      <div className="flex flex-col items-center">{solveList}</div>
    </>
  );
}
