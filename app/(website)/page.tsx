// import {Inter} from 'next/font/google'

// const inter = Inter({subsets: ['latin']})

import {Hero, Process} from "@/components/templates";

export default function Home() {
  return (
      // bg-amber-50 sm:bg-amber-100 md:bg-amber-500 lg:bg-amber-800
      <main className={'min-h-screen w-full '}>
        <Hero/>
        <Process/>
      </main>
  )
}
