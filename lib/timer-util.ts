export function getTimeString(time: number) {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time / 1000) % 60);
  const milliseconds = Math.floor(time % 1000);
  if (minutes === 0) {
    const timeFormat = `${seconds}.${milliseconds.toString().padStart(3, "0").slice(0, 2)}`;
    return timeFormat;
  } else {
    const timeFormat = `${minutes}:${seconds
      .toString()
      .padStart(
        2,
        "0",
      )}.${milliseconds.toString().padStart(3, "0").slice(0, 2)}`;
    return timeFormat;
  }
}

const moves = ["R", "L", "U", "D", "F", "B"];

export function generateScramble() {
  const modifiers = ["", "'", "2"];
  let scramble = [];
  for (let x = 0; x < 20; x++) {
    scramble.push([
      moves[Math.floor(Math.random() * moves.length)],
      modifiers[Math.floor(Math.random() * modifiers.length)],
    ]);
  }
  scramble = validateScramble(scramble);
  // return scramble;
  return scrambleToString(scramble).join(" ");
}

function validateScramble(scramble: any) {
  for (let x = 1; x < scramble.length; x++) {
    while (scramble[x][0] == scramble[x - 1][0]) {
      scramble[x][0] = moves[Math.floor(Math.random() * moves.length)];
    }
  }
  // for (let x = 2; x < scramble.length; x++) {
  //   while (scramble[x][0] == scramble[x - 2][0]) {
  //     scramble[x][0] = moves[Math.floor(Math.random() * moves.length)];
  //   }
  // }
  return scramble;
}

function scrambleToString(scramble: any) {
  for (let x = 0; x < scramble.length; x++) {
    scramble[x] = scramble[x].join("");
  }
  return scramble;
}
