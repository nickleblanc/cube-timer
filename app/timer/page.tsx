'use server';

import Image from 'next/image'
import NavBar from '@/app/components/navbar'
import TimerDisplay from '@/app/components/timer-display'
import Scramble from '@/app/components/scramble'
import Stats from '@/app/components/stats'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function Home() {

  const data = await prisma.user.findMany()

  return (
    <main>
      <NavBar />
      <Scramble />
      <TimerDisplay />
      <Stats />
    </main>
  )
}
