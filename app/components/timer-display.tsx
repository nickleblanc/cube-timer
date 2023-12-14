'use client';

import { useState, useEffect } from 'react';

export default function TimerDisplay() {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [startTime, setStartTime] = useState(0);

    const startTimer = () => {
        setRunning(true);
        setStartTime(Date.now());
    }

    const formattedTime = () => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor(time % 1000);
        return `${minutes}:${seconds}:${milliseconds}`;
      };

    useEffect(() => {
        if (!running) {
            return;
        }
        const interval = setInterval(() => {
            setTime(Date.now() - startTime);
        }, 10);
        return () => clearInterval(interval);
    }, [time, startTime, running]);

    return (
        <div className="flex justify-center items-center h-64">
            {/* {time} */}
            {formattedTime()}
            <button onClick={startTimer}>Start</button>
        </div>
    )
}