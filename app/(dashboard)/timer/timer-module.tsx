"use client";

import TimerDisplay from "@/components/timer-display";
import Scramble from "@/components/scramble";
import { generateScramble } from "@/lib/timer-util";
import { useEffect, useState } from "react";

export default function Timer() {
  const [scramble, setScramble] = useState("");

  const handleFinish = () => {
    setScramble(generateScramble());
  };

  useEffect(() => {
    setScramble(generateScramble());
  }, []);

  return (
    <div className="flex h-[300px] flex-col justify-center">
      <Scramble scramble={scramble} />
      <TimerDisplay
        scramble={scramble}
        onFinish={handleFinish}
      />
    </div>
  );
}
