"use server";

import NavBar from "@/components/navbar";
import Stats from "@/components/stats";
import TimerModule from "./timer-module";

export default async function Home() {
  return (
    <>
      <NavBar />
      <TimerModule />
      <Stats />
    </>
  );
}
