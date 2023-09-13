import type { ISocial } from '@interface/*'

const TwitterLink = ({ color, hoverColor }: ISocial) => {
	return (
		<a href='#' target='_blank'>
			<svg className='social-icon group' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 45 45'>
				<path className={`fill-[${color}] group-hover:fill-[${hoverColor}]`} fillRule='evenodd' clipRule='evenodd'
							d='M23.2222 0.00012207C10.8879 0.00012207 0.888916 9.9991 0.888916 22.3335C0.888916 34.6678 10.8879 44.6668 23.2222 44.6668C35.5566 44.6668 45.5556 34.6678 45.5556 22.3335C45.5556 9.9991 35.5566 0.00012207 23.2222 0.00012207ZM22.6 18.9255L22.5532 18.1527C22.4126 16.1498 23.6467 14.3203 25.5994 13.6106C26.318 13.3583 27.5365 13.3268 28.3332 13.5476C28.6456 13.6422 29.2392 13.9576 29.661 14.2415L30.4265 14.7619L31.2701 14.4938C31.7387 14.3519 32.3636 14.1153 32.6448 13.9576C32.9103 13.8157 33.1447 13.7368 33.1447 13.7841C33.1447 14.0522 32.5667 14.967 32.0824 15.4716C31.4263 16.1813 31.6137 16.2444 32.9416 15.7713C33.7383 15.5032 33.7539 15.5032 33.5977 15.8028C33.504 15.9605 33.0197 16.5125 32.5042 17.0172C31.6294 17.8846 31.5825 17.9792 31.5825 18.7047C31.5825 19.8245 31.0514 22.1586 30.5202 23.436C29.5361 25.8332 27.4271 28.3093 25.3182 29.5552C22.3501 31.3058 18.3978 31.7474 15.0704 30.7223C13.9612 30.3753 12.0554 29.4921 12.0554 29.3344C12.0554 29.2871 12.6334 29.224 13.3363 29.2083C14.8048 29.1767 16.2732 28.7667 17.523 28.0412L18.3665 27.5365L17.398 27.2053C16.0233 26.7322 14.7892 25.644 14.4767 24.6189C14.383 24.2877 14.4142 24.2719 15.2891 24.2719L16.1951 24.2561L15.4297 23.8934C14.5236 23.436 13.6956 22.6633 13.2895 21.8747C12.9927 21.3069 12.6177 19.8718 12.7271 19.7614C12.7583 19.7141 13.0864 19.8087 13.4613 19.9349C14.5392 20.3291 14.6798 20.2345 14.0549 19.5721C12.8833 18.3735 12.524 16.5914 13.0864 14.9039L13.352 14.1469L14.383 15.172C16.4919 17.238 18.9758 18.4681 21.8189 18.8309L22.6 18.9255Z' />
			</svg>
		</a>
	)
}

export default TwitterLink
