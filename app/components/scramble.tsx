const moves = ["R", "L", "U", "D", "F", "B"];

function generateScramble() {
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

export default function Scramble() {
    return (
        <div className="flex justify-center p-6 text-xl font-bold font-mono h-[80px]">
            {generateScramble()}
        </div>
    )
}