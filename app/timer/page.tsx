'use server';

import Image from 'next/image'
import NavBar from '@/app/components/navbar'
import TimerDisplay from '@/app/components/timer-display'
import Scramble from '@/app/components/scramble'
import Stats from '@/app/components/stats'
import { getSolves } from "@/app/lib/data";
import { revalidatePath } from 'next/cache';
import Timer from './timer';

export default async function Home() {

  // const data = await getSolves();

  return (
    <>
      <Scramble />
      <Timer />
      {/* <TimerDisplay /> */}
      {/* <Stats solves={data}/> */}
      <Stats />
    </>
  )
}
