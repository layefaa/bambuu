// import NavLinks from '@molecules/NavLinks.tsx'
import { isMenuOpen } from '@store/index.ts'
import { useStore } from '@nanostores/react'
import Socials from '@molecules/Socials.tsx'
import NavLinks from '@molecules/NavLinks.tsx'

const MobileNav = () => {
	const $isMenuOpen = useStore(isMenuOpen)
	return (
		<div id='Nav'
				 className={`${$isMenuOpen ? 'grid' : 'hidden'} md:hidden z-20 h-screen w-screen containerXPadding bg-bb-primary-white absolute top-0 left-0 grid-cols-4 grid-rows-6`}>
			<div className='row-start-2 row-end-5 col-span-4 w-5/6 mx-auto'>
				<NavLinks classes={'text-bb-tertiary-black text-48 gap-[6rem] font-[300]'}/>
			</div>
			<div className='row-start-6 col-span-4  w-5/6 mx-auto'>
				<p className='text-20 font-30 text-bb-quaternary-black mb-[1.5rem]'>Follow Us</p>
				<Socials />
			</div>

		</div>
	)
}

export default MobileNav