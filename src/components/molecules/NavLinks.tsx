import { links } from '@content/info'
import Link from '@atoms/Link'


const NavLinks = () => {
	return (
		<>
			{
				links.map((x, index) => {
						return (
							<li className={'list-none'} key={index}>
								<Link url={x.url} name={x.name} animate={true} />
							</li>
						)
					}
				)
			}
		</>
	)
}

export default NavLinks