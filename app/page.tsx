import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
      <main className={'h-screen w-full flex flex-col justify-center sm:items-center'}>
        <p className={'text-lg sm:text-6xl font-bold mb-10'}>
          Under Construction
        </p>
        <p className={'text-lg mb-5'}>
          Please Contact Us on Instagram <a className={'underline font-bold underline-offset-1'} href={'https://www.instagram.com/bambuubyo/'}> @bambuubyo</a>
        </p>
        {/*<p>Or</p>*/}
        {/*<p>*/}
        {/*  Whatsapp <a className={'underline font-bold underline-offset-1'} href={'https://wa.me/0706527578'}>+234 706 527 4578</a>*/}
        {/*</p>*/}
      </main>
  )
}
