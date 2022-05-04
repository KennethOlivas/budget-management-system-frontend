import React, { Component } from 'react'
import DrawerItem from './DrawerItem'
import NavBar from './NavBar'
import { HomeIcon, MenuIcon } from '@heroicons/react/solid'

import ThemeButton from './ThemeButton'
import HeroDashboard from './HeroDashboard'

interface DashboardProps {
	Component: React.ComponentType<Component>
	props ?: any
}

const Dashboard = ({ Component, props }: DashboardProps) => (
	<div className='drawer'>
		<input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
		<div className='drawer-content'>
			<div className='w-full navbar bg-base-300 space-x-4'>
				<label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
					<MenuIcon className='w-7 h-7' />
				</label>

				<NavBar />
				<ThemeButton
					styleIcon='btn btn-circle btn-ghost px-2 py-2'
					StyleLabel=''
				/>
				{Component && <Component {...props} />}
			</div>
			<section className='m-8'>
				<HeroDashboard />
			</section>
		</div>
		<div className='drawer-side'>
			<label htmlFor='my-drawer-3' className='drawer-overlay'></label>
			<ul className='menu p-4 overflow-y-auto w-80 bg-base-200'>
				<DrawerItem
					Icon={HomeIcon}
					title='Home'
					url='/'
					onClick={function (): void {
						throw new Error('Function not implemented.')
					}}
				/>
			</ul>
		</div>
	</div>
)

export default Dashboard
