'use client';

import { useState, useEffect } from 'react';

export default function TimerDisplay() {

    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center h-64">
            {time}
        </div>
    )
}