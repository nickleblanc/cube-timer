'use client';

import { useState, useEffect } from 'react';
import { createSolve } from '@/app/lib/actions';
import Stats from '@/app/components/stats';

interface TimerProps {
    onFinish: any
}

export default function TimerDisplay(props: TimerProps) {


    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [startTime, setStartTime] = useState(0);

    const [scramble, setScramble] = useState(0);

    const solveObject = {
        time: time,
        scramble: 'scramble',
    }

    const startTimer = () => {
        setTime(0);
        setRunning(true);
        props.onFinish(false);
        setStartTime(Date.now());
    }

    async function stopTimer() {
        setRunning(false);
        solveObject.time = time;
        solveObject.scramble = 'scramble';
        createSolve(solveObject);
        // props.onFinish(true);
        // console.log(time);
    }

    const formattedTime = () => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time / 1000) % 60);
        const milliseconds = Math.floor(time % 1000);
        return (
            <div>
            <span>{minutes}:</span>
            <span>{seconds.toString().padStart(2,"0")}:</span>
            <span>{milliseconds.toString().padStart(3,"0")}</span>
            </div>
        );
      };

    useEffect(() => {
        if (!running) {
            return;
        }
        const interval = setInterval(() => {
            setTime(Date.now() - startTime);
        }, 10);
        return () => clearInterval(interval);
    }, [running]);

    return (
        <>
        <div className={'w-screen text-white h-[100px]'}>
            <div className="flex justify-center p-6 text-5xl font-bold font-mono">
                {formattedTime()}
                {/* <span>{("0" + Math.floor((time / 60000))).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time % 1000))).slice(-3)}</span> */}
            </div>
        </div>
        <div className='flex justify-center space-x-10'>
            <button className="flex h-[48px] w-24 grow items-center justify-center gap-2 rounded-md bg-gray-500 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-2 md:px-3"onClick={startTimer}>Start</button>
            <button className="flex h-[48px] w-24 grow items-center justify-center gap-2 rounded-md bg-gray-500 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-2 md:px-3"onClick={stopTimer}>Stop</button>
        </div>
        {/* <Stats /> */}
        </>
    )
}