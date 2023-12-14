import Image from 'next/image'
import NavBar from './components/navbar'
import TimerDisplay from '@/app/components/timer-display'

export default function Home() {
  return (
    <main>
      <NavBar />
      <TimerDisplay />
    </main>
  )
}
