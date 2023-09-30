import FbLink from '@atoms/FbLink.tsx'
import InstagramLink from '@atoms/InstagramLink.tsx'
import TwitterLink from '@atoms/TwitterLink.tsx'

const Socials = () => {
	const color = '#ADADAD'
	const hoverColor = '#95631B'
	return (
		<div className='flex gap-[3rem] md:gap-[2rem]'>
			<InstagramLink color={color} hoverColor={hoverColor} />
			<TwitterLink color={color} hoverColor={hoverColor} />
			<FbLink color={color} hoverColor={hoverColor} />
		</div>
	)

}

export default Socials
