import React from 'react'
import type { link } from '@interface/*'


const Link = ({ name, url, classes }: link) => {
	return (
		<a href={url} className={`font-[400] ${classes}`}>
			{name}
		</a>
	)
}

export default Link
