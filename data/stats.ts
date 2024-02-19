export function getUserStats(solveTimes: number[]) {
  const bestTime = solveTimes.reduce((acc, time) => {
    return time < acc ? time : acc;
  }, Infinity);

  const worstTime = solveTimes.reduce((acc, time) => {
    return time > acc ? time : acc;
  }, 0);

  const last5 = solveTimes.slice(0, 5);

  const averageOf5 = last5
    .slice(0, 5)
    .filter((time) => time < Math.max(...last5) && time > Math.min(...last5))
    .reduce((acc, time) => acc + time, 0);

  const last12 = solveTimes.slice(0, 12);

  const averageOf12 = last12
    .slice(0, 100)
    .filter((time) => time < Math.max(...last12) && time > Math.min(...last12))
    .reduce((acc, time) => acc + time, 0);

  return {
    bestTime,
    worstTime,
    averageOf5: averageOf5 / 3,
    averageOf12: averageOf12 / 10,
  };
}
