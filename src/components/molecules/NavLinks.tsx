import { links } from '@content/info'
import Link from '@atoms/Link'

// ---
// import Link from '@atoms/Link'

// interface Props {
// 	classes: string
// }
//
// const { classes } = Astro.props
// ---
//
// 	)
// 	}


// <script>
// 	const nav = document.querySelector('.navbar')
// 	const navLinks = nav.querySelectorAll('a')
// 	const currentURL = window.location.href
// 	navLinks.forEach((link) => {
// 	if (link.href === currentURL) {
// 	link.classList.add('activeLink')
// 	link.children[0].classList.add('activeLine')
// }
// })
// </script>


const NavLinks = () => {
	return (
		<>
			{
				links.map((x, index) => {
						return (
							<Link  key={index} url={x.url} name={x.name} animate={true} />
						)
					}
				)
			}
		</>
	)
}

export default NavLinks