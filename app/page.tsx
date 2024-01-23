'use server';

import Image from 'next/image'
import NavBar from './components/navbar'
import TimerDisplay from '@/app/components/timer-display'
import Scramble from '@/app/components/scramble'
import Stats from '@/app/components/stats'

export default async function Home() {

  return (
    <main>
      {/* <NavBar /> */}
      {/* <Scramble />
      <TimerDisplay />
      <Stats /> */}
    </main>
  )
}
