"use server";

import Image from "next/image";
import NavBar from "@/components/navbar";
import TimerDisplay from "@/components/timer-display";
import Scramble from "@/components/scramble";
import Stats from "@/components/stats";
import Timer from "./timer";

export default async function Home() {
  return (
    <>
      <Scramble />
      <Timer />
      {/* <TimerDisplay /> */}
      {/* <Stats solves={data}/> */}
      <Stats />
    </>
  );
}
