import type { ISocial } from '@interface/*'

const FbLink = ({ color, hoverColor }: ISocial) => {
	return (
		<a href='#' target='_blank'>
			<svg className='social-icon group' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 45 45'>
				<path className={`fill-[${color}] group-hover:fill-[${hoverColor}]`} fillRule='evenodd' clipRule='evenodd'
							d='M22.3333 0C9.99897 0 0 9.99897 0 22.3333C0 34.6677 9.99897 44.6667 22.3333 44.6667C34.6677 44.6667 44.6667 34.6677 44.6667 22.3333C44.6667 9.99897 34.6677 0 22.3333 0ZM24.6611 23.3145V35.465H19.6338V23.3149H17.1221V19.1278H19.6338V16.6139C19.6338 13.198 21.052 11.1668 25.0814 11.1668H28.4359V15.3544H26.3391C24.7706 15.3544 24.6668 15.9396 24.6668 17.0316L24.6611 19.1273H28.4597L28.0152 23.3145H24.6611Z'
				/>
			</svg>
		</a>
	)
}


export default FbLink;