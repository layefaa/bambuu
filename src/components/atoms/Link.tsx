import React from 'react'
import type { link } from '@interface/*'


const Link = ({ name, url, classes }: link) => {
	return (
		<a href={url} className={`font-[400] flex flex-col ${classes}`}>
			{name}
			<span style={{transitionProperty: 'width'}} className='transition ease-in h-[1px] bg-black opacity-0'/>
		</a>
	)
}

export default Link
