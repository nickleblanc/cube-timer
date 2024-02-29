const directionsMap = new Map([
  ["", 1],
  ["'", -1],
  ["2", 2],
]);

const colorMap = new Map([
  ["w", "bg-white"],
  ["o", "bg-orange-500"],
  ["g", "bg-green-500"],
  ["r", "bg-red-500"],
  ["b", "bg-blue-500"],
  ["y", "bg-yellow-500"],
]);

const cubeColors = ["w", "o", "g", "r", "b", "y"];

interface ScrambleVisualProps {
  scramble: string;
}

export function ScrambleVisual({ scramble }: ScrambleVisualProps) {
  const cube: string[][][] = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ];

  for (let i = 0; i < cubeColors.length; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        cube[i][j].push(cubeColors[i]);
      }
    }
  }

  turnCube(cube, scramble);

  const spanElements = [];
  for (let i = 0; i < cubeColors.length; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        spanElements.push(
          <span
            key={i}
            className={`${colorMap.get(cube[i][j][k])} rounded-sm `}
          ></span>,
        );
      }
    }
  }

  return (
    <>
      <div className="h-[288px] w-[384px] p-2">
        <div className="grid h-full w-full grid-cols-4 grid-rows-3 gap-2 p-2">
          <div></div>
          <div className="grid grid-cols-3 grid-rows-3 gap-1">
            {spanElements.slice(0, 9)}
          </div>
          <div></div>
          <div></div>
          <div className="grid grid-cols-3 grid-rows-3 gap-1">
            {spanElements.slice(9, 18)}
          </div>
          <div className="grid grid-cols-3 grid-rows-3 gap-1">
            {spanElements.slice(18, 27)}
          </div>
          <div className="grid grid-cols-3 grid-rows-3 gap-1">
            {spanElements.slice(27, 36)}
          </div>
          <div className="grid grid-cols-3 grid-rows-3 gap-1">
            {spanElements.slice(36, 45)}
          </div>
          <div></div>
          <div className="grid grid-cols-3 grid-rows-3 gap-1">
            {spanElements.slice(45, 54)}
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

function horizontalMove(cube: string[][][], row: number, direction: number) {
  if (row < cube[0].length) {
    if (direction == 1) {
      [cube[1][row], cube[2][row], cube[3][row], cube[4][row]] = [
        cube[2][row],
        cube[3][row],
        cube[4][row],
        cube[1][row],
      ];
    } else if (direction == -1) {
      [cube[1][row], cube[2][row], cube[3][row], cube[4][row]] = [
        cube[4][row],
        cube[1][row],
        cube[2][row],
        cube[3][row],
      ];
    } else if (Math.abs(direction) == 2) {
      [cube[1][row], cube[2][row], cube[3][row], cube[4][row]] = [
        cube[2][row],
        cube[3][row],
        cube[4][row],
        cube[1][row],
      ];
      [cube[1][row], cube[2][row], cube[3][row], cube[4][row]] = [
        cube[2][row],
        cube[3][row],
        cube[4][row],
        cube[1][row],
      ];
    }
  }
  if (direction == 1) {
    if (row == 0) {
      cube[0] = zip(cube[0].reverse());
    } else if (row == 2) {
      cube[5] = zip(cube[5]).reverse();
    }
  } else if (direction == -1) {
    if (row == 0) {
      cube[0] = zip(cube[0]).reverse();
    } else if (row == 2) {
      cube[5] = zip(cube[5].reverse());
    }
  } else if (Math.abs(direction) == 2) {
    if (row == 0) {
      cube[0] = zip(cube[0].reverse());
      cube[0] = zip(cube[0].reverse());
    } else if (row == 2) {
      cube[5] = zip(cube[5].reverse());
      cube[5] = zip(cube[5].reverse());
    }
  }
}

function verticalMove(cube: string[][][], column: number, direction: number) {
  if (column < cube[0].length) {
    for (let i = 0; i < cube[0].length; i++) {
      if (direction == 1) {
        [
          cube[0][i][column],
          cube[2][i][column],
          cube[4][cube[0].length - i - 1][cube[0].length - column - 1],
          cube[5][i][column],
        ] = [
          cube[2][i][column],
          cube[5][i][column],
          cube[0][i][column],
          cube[4][cube[0].length - i - 1][cube[0].length - column - 1],
        ];
      } else if (direction == -1) {
        [
          cube[0][i][column],
          cube[2][i][column],
          cube[4][cube[0].length - i - 1][cube[0].length - column - 1],
          cube[5][i][column],
        ] = [
          cube[4][cube[0].length - i - 1][cube[0].length - column - 1],
          cube[0][i][column],
          cube[5][i][column],
          cube[2][i][column],
        ];
      } else if (Math.abs(direction) == 2) {
        [
          cube[0][i][column],
          cube[2][i][column],
          cube[4][cube[0].length - i - 1][cube[0].length - column - 1],
          cube[5][i][column],
        ] = [
          cube[2][i][column],
          cube[5][i][column],
          cube[0][i][column],
          cube[4][cube[0].length - i - 1][cube[0].length - column - 1],
        ];
        [
          cube[0][i][column],
          cube[2][i][column],
          cube[4][cube[0].length - i - 1][cube[0].length - column - 1],
          cube[5][i][column],
        ] = [
          cube[2][i][column],
          cube[5][i][column],
          cube[0][i][column],
          cube[4][cube[0].length - i - 1][cube[0].length - column - 1],
        ];
      }
    }
  }

  if (direction == 1) {
    if (column == 0) {
      cube[1] = zip(cube[1]).reverse();
    } else if (column == 2) {
      cube[3] = zip(cube[3].reverse());
    }
  } else if (direction == -1) {
    if (column == 0) {
      cube[1] = zip(cube[1].reverse());
    } else if (column == 2) {
      cube[3] = zip(cube[3]).reverse();
    }
  } else if (Math.abs(direction) == 2) {
    if (column == 0) {
      cube[1] = zip(cube[1].reverse());
      cube[1] = zip(cube[1].reverse());
    } else if (column == 2) {
      cube[3] = zip(cube[3].reverse());
      cube[3] = zip(cube[3].reverse());
    }
  }
}

function sideMove(cube: string[][][], side: number, direction: number) {
  for (let i = 0; i < cube[0].length; i++) {
    if (direction == 1) {
      [
        cube[0][side][i],
        cube[1][cube[0].length - i - 1][side],
        cube[3][i][cube[0].length - side - 1],
        cube[5][cube[0].length - side - 1][cube[0].length - i - 1],
      ] = [
        cube[1][cube[0].length - i - 1][side],
        cube[5][cube[0].length - side - 1][cube[0].length - i - 1],
        cube[0][side][i],
        cube[3][i][cube[0].length - side - 1],
      ];
    } else if (direction == -1) {
      [
        cube[0][side][i],
        cube[1][cube[0].length - i - 1][side],
        cube[3][i][cube[0].length - side - 1],
        cube[5][cube[0].length - side - 1][cube[0].length - i - 1],
      ] = [
        cube[3][i][cube[0].length - side - 1],
        cube[0][side][i],
        cube[5][cube[0].length - side - 1][cube[0].length - i - 1],
        cube[1][cube[0].length - i - 1][side],
      ];
    } else if (Math.abs(direction) == 2) {
      [
        cube[0][side][i],
        cube[1][cube[0].length - i - 1][side],
        cube[3][i][cube[0].length - side - 1],
        cube[5][cube[0].length - side - 1][cube[0].length - i - 1],
      ] = [
        cube[1][cube[0].length - i - 1][side],
        cube[5][cube[0].length - side - 1][cube[0].length - i - 1],
        cube[0][side][i],
        cube[3][i][cube[0].length - side - 1],
      ];
      [
        cube[0][side][i],
        cube[1][cube[0].length - i - 1][side],
        cube[3][i][cube[0].length - side - 1],
        cube[5][cube[0].length - side - 1][cube[0].length - i - 1],
      ] = [
        cube[1][cube[0].length - i - 1][side],
        cube[5][cube[0].length - side - 1][cube[0].length - i - 1],
        cube[0][side][i],
        cube[3][i][cube[0].length - side - 1],
      ];
    }
  }
  if (direction == 1) {
    if (side == 0) {
      cube[4] = zip(cube[4]).reverse();
    } else if (side == 2) {
      cube[2] = zip(cube[2].reverse());
    }
  } else if (direction == -1) {
    if (side == 0) {
      cube[4] = zip(cube[4].reverse());
    } else if (side == 2) {
      cube[2] = zip(cube[2]).reverse();
    }
  } else if (Math.abs(direction) == 2) {
    if (side == 0) {
      cube[4] = zip(cube[4].reverse());
      cube[4] = zip(cube[4].reverse());
    } else if (side == 2) {
      cube[2] = zip(cube[2].reverse());
      cube[2] = zip(cube[2].reverse());
    }
  }
}

function zip(arrays: string[][]) {
  return arrays[0].map(function (_, i) {
    return arrays.map(function (array) {
      return array[i];
    });
  });
}

function stringToArray(str: string) {
  let arr = str.split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == 1) {
      newArr.push([arr[i], ""]);
    } else {
      newArr.push([arr[i][0], arr[i][1]]);
    }
  }
  return newArr;
}

function turnCube(cube: string[][][], scramble: string) {
  let scrambleArray = stringToArray(scramble);
  for (let i = 0; i < scrambleArray.length; i++) {
    let dir = directionsMap.get(scrambleArray[i][1]);
    if (dir != undefined) {
      if (scrambleArray[i][0] == "U") {
        horizontalMove(cube, 0, dir);
      } else if (scrambleArray[i][0] == "D") {
        horizontalMove(cube, 2, -dir);
      } else if (scrambleArray[i][0] == "R") {
        verticalMove(cube, 2, dir);
      } else if (scrambleArray[i][0] == "L") {
        verticalMove(cube, 0, -dir);
      } else if (scrambleArray[i][0] == "F") {
        sideMove(cube, 2, dir);
      } else if (scrambleArray[i][0] == "B") {
        sideMove(cube, 0, -dir);
      }
    }
  }
}

export function FaceScramble({ scramble }: ScrambleVisualProps) {
  const cube: string[][][] = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ];

  for (let i = 0; i < cubeColors.length; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        cube[i][j].push(cubeColors[i]);
      }
    }
  }

  turnCube(cube, scramble);

  const spanElements = [];
  for (let i = 0; i < cubeColors.length; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        spanElements.push(
          <span
            key={i}
            className={`${colorMap.get(cube[i][j][k])} rounded-sm `}
          ></span>,
        );
      }
    }
  }

  return (
    <div className="h-[110px] w-[115px] p-2">
      <div className="grid h-full w-full grid-cols-1 grid-rows-1 gap-2 p-2">
        <div className="grid grid-cols-3 grid-rows-3 gap-1">
          {spanElements.slice(18, 27)}
        </div>
      </div>
    </div>
  );
}
