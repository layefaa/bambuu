import React from 'react'

const Card = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='bg-bb-primary-gray w-full h-full pt-[6rem] pl-[8rem] pr-[12rem]'>
			{
				children
			}
		</div>
	)
}

export default Card