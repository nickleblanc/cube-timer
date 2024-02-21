const averages = [5, 12, 100, 500, 1000];

export function getUserStats(solveTimes: number[]) {
  const bestTime = solveTimes.reduce((acc, time) => {
    return time < acc ? time : acc;
  }, Infinity);

  const worstTime = solveTimes.reduce((acc, time) => {
    return time > acc ? time : acc;
  }, 0);

  let averageOf5 = 0;
  let averageOf12 = 0;
  let averageOf100 = 0;
  let averageOf500 = 0;
  let averageOf1000 = 0;

  for (const avg of averages) {
    if (solveTimes.length < avg) {
      continue;
    }

    const lastN = solveTimes.slice(0, avg);
    const average = lastN
      .filter((time) => time < Math.max(...lastN) && time > Math.min(...lastN))
      .reduce((acc, time) => acc + time, 0);

    switch (avg) {
      case 5:
        averageOf5 = average;
        break;
      case 12:
        averageOf12 = average;
        break;
      case 100:
        averageOf100 = average;
        break;
      case 500:
        averageOf500 = average;
        break;
      case 1000:
        averageOf1000 = average;
        break;
    }
  }

  return {
    bestTime,
    worstTime,
    averageOf5: averageOf5 / 3,
    averageOf12: averageOf12 / 10,
    averageOf100: averageOf100 / 98,
    averageOf500: averageOf500 / 498,
    averageOf1000: averageOf1000 / 998,
  };
}
