'use client';

import Stats from '@/app/components/stats'
import TimerDisplay from '@/app/components/timer-display'
import { revalidatePath } from 'next/cache';
import { useState, useEffect } from 'react';

export default function Timer() {

    const [timerFinished, setTimerFinished] = useState(false);

    console.log(timerFinished);

    return (
        <>
        <TimerDisplay onFinish={setTimerFinished}/>
        {/* <Stats /> */}
        </>
    );
}