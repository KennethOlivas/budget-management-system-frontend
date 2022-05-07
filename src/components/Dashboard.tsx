import React from 'react'
import DrawerItem from './DrawerItem'
import NavBar from './NavBar'
import { HomeIcon, MenuIcon, LibraryIcon } from '@heroicons/react/solid'
import ThemeButton from './ThemeButton'
import { NavLink } from 'react-router-dom'

interface Props {
	children: React.ReactNode
}

const Dashboard = ({ children }: Props) => {
	return (
		<div className='drawer'>
			<input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content flex flex-col'>
				<div className='w-full navbar bg-base-300 space-x-4'>
					<label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
						<MenuIcon className='w-7 h-7' />
					</label>

					<NavBar />
					<ThemeButton
						styleIcon='btn btn-circle btn-ghost px-2 py-2'
						StyleLabel=''
					/>
					<div className='dropdown dropdown-end'>
						<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
							<div className='w-10 rounded-full'>
								<img src='https://api.lorem.space/image/face?hash=33791' />
							</div>
						</label>
						<ul
							tabIndex={0}
							className='menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
						>
							<li>
								<a className='justify-between'>Profile</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<NavLink to={'/login'}>Logout</NavLink>
							</li>
						</ul>
					</div>
				</div>
				{children}
			</div>

			<div className='drawer-side'>
				<label htmlFor='my-drawer-3' className='drawer-overlay'></label>
				<ul className='menu p-4 overflow-y-auto w-80 bg-base-200'>
					<DrawerItem Icon={HomeIcon} title='Home' url='/home' />
					<DrawerItem
						Icon={LibraryIcon}
						title='BankAccount'
						url='/bankaccount'
					/>
				</ul>
			</div>
		</div>
	)
}

export default Dashboard
