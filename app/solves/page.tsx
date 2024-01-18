import NavBar from "@/app/components/navbar"
import Modal from "@/app/components/modal"
import { fetchSolveData } from "@/app/lib/data"
import getTimeString from "@/app/lib/timer-util";
// import { useState } from "react"

export default async function Solves() {

    const solves = await fetchSolveData();

    // const [show, setShow] = useState(false);

    const solveList = solves.map((solve) => {
        const time = getTimeString(solve.time);
        return (
          <div key={solve.id} className="bg-slate-600 rounded-xl w-96 h-24 p-4 m-1">
            <span>{time}</span>
          </div>
        );
      }
    );

    return (
        <>
          <NavBar />
          {/* <Modal /> */}
          <div className="flex flex-col items-center">{solveList}</div>
        </>
    )
}