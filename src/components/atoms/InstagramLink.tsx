import type { ISocial } from '@interface/*'

const InstagramLink = ({ color, hoverColor }: ISocial) => {
	return (
		<a href='#' target='_blank'>
			<svg className='social-icon group' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 46 45'>
				<path fillRule='evenodd' clipRule='evenodd'
							d='M22.7777 0.00012207C10.4433 0.00012207 0.444336 9.9991 0.444336 22.3335C0.444336 34.6678 10.4433 44.6668 22.7777 44.6668C35.112 44.6668 45.111 34.6678 45.111 22.3335C45.111 9.9991 35.112 0.00012207 22.7777 0.00012207ZM17.8675 10.4943C19.138 10.4365 19.544 10.4224 22.7789 10.4224H22.7752C26.0111 10.4224 26.4156 10.4365 27.6861 10.4943C28.9541 10.5524 29.8202 10.7532 30.5795 11.0477C31.3637 11.3517 32.0262 11.7587 32.6888 12.4212C33.3514 13.0833 33.7583 13.7478 34.0636 14.5313C34.3564 15.2886 34.5574 16.1542 34.6169 17.4222C34.674 18.6927 34.6889 19.0987 34.6889 22.3336C34.6889 25.5685 34.674 25.9735 34.6169 27.244C34.5574 28.5116 34.3564 29.3774 34.0636 30.135C33.7583 30.9181 33.3514 31.5827 32.6888 32.2447C32.027 32.9073 31.3634 33.3153 30.5803 33.6195C29.8224 33.9141 28.9559 34.1148 27.6878 34.1729C26.4173 34.2307 26.0126 34.2448 22.7774 34.2448C19.5428 34.2448 19.1371 34.2307 17.8665 34.1729C16.5987 34.1148 15.7329 33.9141 14.9751 33.6195C14.1922 33.3153 13.5276 32.9073 12.8658 32.2447C12.2035 31.5827 11.7965 30.9181 11.492 30.1347C11.1977 29.3774 10.997 28.5118 10.9386 27.2438C10.8811 25.9732 10.8667 25.5685 10.8667 22.3336C10.8667 19.0987 10.8816 18.6925 10.9384 17.422C10.9955 16.1544 11.1965 15.2886 11.4918 14.531C11.797 13.7478 12.204 13.0833 12.8665 12.4212C13.5286 11.7589 14.1931 11.3519 14.9766 11.0477C15.7339 10.7532 16.5995 10.5524 17.8675 10.4943Z'
							className={`fill-[${color}] group-hover:fill-[${hoverColor}]`}
				/>
				<path fillRule='evenodd' clipRule='evenodd'
							d='M21.7104 12.5684C21.9178 12.5681 22.141 12.5682 22.3819 12.5683L22.7789 12.5684C25.9592 12.5684 26.3361 12.5798 27.592 12.6369C28.7534 12.69 29.3837 12.8841 29.8035 13.0471C30.3594 13.263 30.7557 13.5211 31.1723 13.938C31.5892 14.3548 31.8473 14.7519 32.0637 15.3077C32.2267 15.7271 32.421 16.3574 32.4739 17.5188C32.531 18.7744 32.5434 19.1516 32.5434 22.3304C32.5434 25.5092 32.531 25.8864 32.4739 27.1421C32.4208 28.3034 32.2267 28.9337 32.0637 29.3531C31.8478 29.9089 31.5892 30.3047 31.1723 30.7214C30.7555 31.1383 30.3596 31.3963 29.8035 31.6122C29.3842 31.776 28.7534 31.9696 27.592 32.0227C26.3364 32.0798 25.9592 32.0922 22.7789 32.0922C19.5983 32.0922 19.2214 32.0798 17.9658 32.0227C16.8044 31.9691 16.1741 31.775 15.754 31.612C15.1981 31.3961 14.8011 31.138 14.3842 30.7211C13.9673 30.3042 13.7092 29.9082 13.4928 29.3521C13.3298 28.9327 13.1355 28.3024 13.0826 27.1411C13.0256 25.8854 13.0142 25.5082 13.0142 22.3274C13.0142 19.1466 13.0256 18.7714 13.0826 17.5158C13.1358 16.3544 13.3298 15.7241 13.4928 15.3043C13.7087 14.7484 13.9673 14.3514 14.3842 13.9345C14.8011 13.5176 15.1981 13.2595 15.754 13.0431C16.1739 12.8793 16.8044 12.6858 17.9658 12.6324C19.0646 12.5828 19.4904 12.5679 21.7104 12.5654V12.5684ZM29.1372 14.5458C28.3481 14.5458 27.7079 15.1853 27.7079 15.9746C27.7079 16.7638 28.3481 17.404 29.1372 17.404C29.9264 17.404 30.5666 16.7638 30.5666 15.9746C30.5666 15.1855 29.9264 14.5453 29.1372 14.5453V14.5458ZM16.6624 22.3324C16.6624 18.9544 19.4011 16.2156 22.7791 16.2155C26.1572 16.2155 28.8953 18.9543 28.8953 22.3324C28.8953 25.7104 26.1574 28.448 22.7794 28.448C19.4013 28.448 16.6624 25.7104 16.6624 22.3324Z'
							className={`fill-[${color}] group-hover:fill-[${hoverColor}]`} />
				<path fillRule='evenodd' clipRule='evenodd'
							d='M22.7785 18.3628C24.9712 18.3628 26.7489 20.1403 26.7489 22.3332C26.7489 24.5259 24.9712 26.3036 22.7785 26.3036C20.5856 26.3036 18.8081 24.5259 18.8081 22.3332C18.8081 20.1403 20.5856 18.3628 22.7785 18.3628V18.3628Z'
							className={`fill-[${color}] group-hover:fill-[${hoverColor}]`} />
			</svg>
		</a>
	)
}

export default InstagramLink


