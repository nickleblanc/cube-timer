import { getSolvesByUser } from "@/data/solve";

export async function getUserStats(userId: string) {
  const solves = await getSolvesByUser(userId);
  const solveTimes = solves.map((solve) => solve.time);
  console.log(solveTimes);
  const bestTime = solves.reduce((acc, solve) => {
    return solve.time < acc ? solve.time : acc;
  }, Infinity);
  const worstTime = solves.reduce((acc, solve) => {
    return solve.time > acc ? solve.time : acc;
  }, 0);
  console.log(Math.min(...solveTimes));
  console.log(Math.max(...solveTimes));
  const averageOf5 = solveTimes
    .slice(0, 5)
    .filter(
      (time) =>
        time < Math.max(...solveTimes) && time > Math.min(...solveTimes),
    )
    .reduce((acc, time) => acc + time, 0);
  const averageOf12 = solves
    .slice(0, 100)
    .filter(
      (solve) =>
        solve.time < Math.max(...solveTimes) &&
        solve.time > Math.min(...solveTimes),
    )
    .reduce((acc, solve) => acc + solve.time, 0);
  return {
    bestTime,
    worstTime,
    averageOf5: averageOf5 / 3,
    averageOf12: averageOf12 / 10,
  };
}
