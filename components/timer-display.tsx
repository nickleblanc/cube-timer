"use client";

import { useState, useEffect } from "react";
import { createSolve } from "@/actions/solve";
import { getTimeString } from "@/lib/timer-util";
import { cn } from "@/lib/utils";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useCurrentUser } from "@/hooks/use-current-user";

interface TimerProps {
  scramble: string;
  onFinish: () => void;
}

export default function TimerDisplay({ scramble, onFinish }: TimerProps) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [inspectionTimer, setinspectionTimer] = useState(0);
  const [inInspection, setInInspection] = useState(false);
  const [canStart, setCanStart] = useState(false);

  const user = useCurrentUser();
  const userId = user?.id;

  const solveObject = {
    time: time,
    scramble: scramble,
    userId: user?.id,
  };

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createSolve,
    onMutate: () => {
      queryClient.cancelQueries({ queryKey: ["solves", userId] });
      const previousSolves = queryClient.getQueryData(["solves", userId]);
      queryClient.setQueryData(["solves", userId], (old: any) => {
        return [solveObject, ...old];
      });
      return { previousSolves };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["solves", userId] });
    },
    mutationKey: ["createSolve"],
  });

  const startTimer = () => {
    setTime(0);
    setRunning(true);
    setStartTime(Date.now());
  };

  function stopTimer() {
    setRunning(false);
    solveObject.time = time;
    solveObject.scramble = scramble;
    onFinish();
    mutate(solveObject);
  }

  useEffect(() => {
    if (!running) {
      return;
    }
    const interval = setInterval(() => {
      setTime(Date.now() - startTime);
    }, 10);
    return () => clearInterval(interval);
  }, [running, startTime]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.code === "Space") {
        if (running) {
          stopTimer();
          return;
        }
        const date = Date.now();
        if (!inspectionTimer) {
          setinspectionTimer(date);
          setInInspection(true);
        } else if (date - inspectionTimer > 500) {
          setCanStart(true);
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  useEffect(() => {
    function handleKeyUp(e: KeyboardEvent) {
      if (e.code === "Space") {
        if (canStart) {
          startTimer();
        }
        setinspectionTimer(0);
        setInInspection(false);
        setCanStart(false);
      }
    }
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  });

  function getTextColor() {
    if (canStart) {
      return "text-green-500";
    } else if (inInspection) {
      return "text-yellow-500";
    }
  }

  return (
    <div
      className={cn(
        "flex justify-center p-6 font-mono text-5xl font-bold text-white",
        getTextColor(),
      )}
    >
      {getTimeString(time)}
    </div>
  );
}
