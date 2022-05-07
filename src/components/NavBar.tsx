import { Fragment } from 'react'
import NavbarItems from './NavbarItems'

const NavBar = () => {
	return (
		<Fragment>
			<div className='flex-1 px-2 mx-2 space-x-4'>
				<NavbarItems title={'link'} path={'/'} />
			</div>
			<div className='flex-none hidden lg:block justify-center space-x-6'></div>
		</Fragment>
	)
}

export default NavBar
