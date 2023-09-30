import type { link } from '@interface/*'


const Link = ({ name, url, classes, animate }: link) => {
	return (
		<a href={url}>
			<span className={`block ${classes}`}>
						{name}
			</span>

			{/*	animate*/}
			{/*		? <span style={{ transitionProperty: 'width' }}*/}
			{/*						className={`transition group-hover:w-[80%] ease-in h-[1px] bg-black w-0`} />*/}
			{/*		: null*/}
			{/*}*/}

		</a>
	)
}

export default Link
