import React from 'react'
import type { link } from '@interface/*'


const Link = ({ name, url, classes }: link) => {
	return (
		<a href={url} className={`font-[400] flex flex-col group ${classes}`}>
			{name}
			<span style={{transitionProperty: 'width'}} className='transition group-hover:w-[80%] ease-in h-[1px] bg-black w-0'/>
		</a>
	)
}

export default Link
