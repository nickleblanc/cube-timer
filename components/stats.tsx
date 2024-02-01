import { getAllSolves } from "@/data/solve";
import getTimeString from "@/lib/timer-util";

interface SolveProps {
  solves: {
    id: number;
    time: number;
    scramble: string;
    createdAt: Date;
  }[];
}

// export default async function Stats(props: SolveProps) {
//     // const solves = await getSolves();

//     // console.log(props)

//     const times = props.solves.map((solve) => {
//         let time = solve.time;
//         let minutes = Math.floor(time / 6000);
//         let seconds = Math.floor((time / 1000) % 60);
//         let milliseconds = Math.floor(time % 1000);
//         let timeFormat = `${minutes}:${seconds
//           .toString()
//           .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
//         return (
//           <tr className="h-10 border-b border-b-slate-200/5">
//             {/* <td>{key + 1}</td> */}
//             <td className="text-end">{timeFormat}</td>
//           </tr>
//         );
//       });

//       return (
//         <div className="flex w-48 flex-col border-r-2 border-t-2 border-slate-800/50 text-white shadow-xl md:w-72 lg:w-96 h-full">
//           <h1 className="flex justify-center p-6 text-2xl font-bold backdrop-blur-2xl">
//             Recent Solves
//           </h1>
//           <div className="mx-4 flex-1 overflow-auto p-2">
//             <table className="w-full">
//                 <tbody>
//                     {times.reverse()}
//                 </tbody>
//             </table>
//           </div>
//         </div>
//       );
// }

export default async function Stats() {
  const solves = await getAllSolves();

  // const times = solves.map((solve) => {
  //     let time = getTimeString(solve.time);
  //     return (
  //       <tr key={solve.id} className="h-10 border-b border-b-slate-200/5">
  //         {/* <td>{solve.id}</td> */}
  //         <td className="text-end">{time}</td>
  //       </tr>
  //     );
  //   });

  const times = solves.map((solve) => {
    let time = getTimeString(solve.time);
    return (
      <div
        className="h-[30px] pr-1 text-end"
        key={solve.id}
      >
        <button>
          <span>{time}</span>
        </button>
      </div>
    );
  });

  return (
    <div className="flex w-48 grow flex-col border-r-2 border-t-2 border-slate-800/50 text-white shadow-xl md:w-72 lg:w-96">
      <h1 className="flex justify-center p-6 text-2xl font-bold backdrop-blur-2xl">
        Recent Solves
      </h1>
      <div className="h-2 grow overflow-auto">{times}</div>
    </div>
  );
}
