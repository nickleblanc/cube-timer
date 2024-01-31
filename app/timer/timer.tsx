"use client";

import Stats from "@/components/stats";
import TimerDisplay from "@/components/timer-display";
import { revalidatePath } from "next/cache";
import { useState, useEffect } from "react";

export default function Timer() {
  const [timerFinished, setTimerFinished] = useState(false);

  return (
    <>
      <TimerDisplay onFinish={setTimerFinished} />
      {/* <Stats /> */}
    </>
  );
}
