import { Fragment } from 'react'
import NavbarItems from './NavbarItems'

const NavBar = () => {
	return (
		<Fragment>
			<div className='flex-1 px-2 mx-2 space-x-4'>
				<NavbarItems title={'link'} path={'/'} />
			</div>
			<div className='flex-none hidden lg:block'>
				<div className='dropdown dropdown-end'>
					<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
						<div className='w-10 rounded-full'>
							<img src='https://api.lorem.space/image/face?hash=33791' />
						</div>
					</label>
					<ul
						tabIndex={0}
						className='mt-3 p-2 shadow menu  dropdown-content bg-base-300 rounded-box w-52'
					>
						<li>
							<a className='justify-between'>
								Profile
								<span className='badge'>New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
				<ul className='menu menu-horizontal'></ul>
			</div>
		</Fragment>
	)
}

export default NavBar
