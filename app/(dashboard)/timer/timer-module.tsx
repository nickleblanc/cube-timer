"use client";

import TimerDisplay from "@/components/timer-display";
import Scramble from "@/components/scramble";
import { generateScramble } from "@/lib/timer-util";
import { useEffect, useState } from "react";
import { useScrambleStore } from "@/stores/scramble";

export default function Timer() {
  const [scramble, setScramble] = useState("");
  const setScrambleStore = useScrambleStore((state) => state.setScramble);

  const handleFinish = () => {
    setScramble(generateScramble());
  };

  useEffect(() => {
    setScramble(generateScramble());
  }, []);

  useEffect(() => {
    setScrambleStore(scramble);
  }, [scramble, setScrambleStore]);

  return (
    <div className="flex grow flex-col justify-center">
      <Scramble scramble={scramble} />
      <TimerDisplay
        scramble={scramble}
        onFinish={handleFinish}
      />
    </div>
  );
}
