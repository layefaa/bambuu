import { links } from '@content/info.ts'
import Link from '@atoms/Link.tsx'

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


const NavLinks = ({ classes }: { classes: string }) => {
	return (
		<>
			{
				links.map((x, index) => {
						return (
							<Link classes={classes} key={index} url={x.url} name={x.name} animate={true} />
						)
					}
				)
			}
		</>
	)
}

export default NavLinks