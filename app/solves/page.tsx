import NavBar from "@/app/components/navbar"
import Modal from "@/app/components/modal"
import { fetchSolveData } from "@/app/lib/data"
// import { useState } from "react"

export default async function Solves() {

    const solves = await fetchSolveData();

    // const [show, setShow] = useState(false);

    const solveList = solves.map((solve) => {
        let time = solve.time;
        let minutes = Math.floor(time / 6000);
        let seconds = Math.floor((time / 1000) % 60);
        let milliseconds = Math.floor(time % 1000);
        let timeFormat = `${minutes}:${seconds
          .toString()
          .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
        return (
          <div className="bg-slate-600 rounded-xl w-96 h-24 p-4">
            <span>{timeFormat}</span>
          </div>
        );
      }
    );

    return (
        <div>
            <NavBar />
            {/* <Modal /> */}
            <div className="flex flex-col items-center">{solveList}</div>
        </div>
    )
}