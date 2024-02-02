import NavBar from "@/components/navbar";
import Modal from "@/components/modal";
import { getAllSolves } from "@/data/solve";
import getTimeString from "@/lib/timer-util";
// import { useState } from "react"

export default async function Solves() {
  const solves = await getAllSolves();

  // const [show, setShow] = useState(false);

  const solveList = solves.map((solve) => {
    const time = getTimeString(solve.time);
    return (
      <div
        key={solve.id}
        className="m-1 h-24 w-96 rounded-xl bg-slate-600 p-4"
      >
        <span>{time}</span>
      </div>
    );
  });

  return (
    <>
      <NavBar />
      {/* <Modal /> */}
      <div className="flex flex-col items-center">{solveList}</div>
    </>
  );
}
