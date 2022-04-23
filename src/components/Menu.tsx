import DrawerItem from './DrawerItem'
import NavBar from './NavBar'
import { HomeIcon, MenuIcon } from '@heroicons/react/solid'


const Menu = () => (
	<div className='drawer'>
		<input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
		<div className='drawer-content flex flex-col'>
			<div className='w-full navbar bg-base-300'>
				<label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
					<MenuIcon className='w-7 h-7' />
				</label>
				<NavBar />
			</div>
		</div>
		<div className='drawer-side'>
			<label htmlFor='my-drawer-3' className='drawer-overlay'></label>
			<ul className='menu p-4 overflow-y-auto w-80 bg-base-200'>
				<DrawerItem Icon={HomeIcon} title='Home' url='/' onClick={function (): void {
					throw new Error('Function not implemented.')
				} } />
			</ul>
		</div>
	</div>
)

export default Menu
