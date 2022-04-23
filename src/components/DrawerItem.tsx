import { NavLink } from 'react-router-dom'
import React from 'react'
interface DrawerItemProps {
	Icon?: React.ComponentType<any>
	title: string
	url?: string
	onClick: () => void
}

const DrawerItem = ({ Icon, title, url }: DrawerItemProps) => {
	url = url || `/${title.toLowerCase()}`
	return (
		<li>
			<NavLink to={url}>
				{Icon && <Icon className='w-6 h-6' />}
				{title}
			</NavLink>
		</li>
	)
}

export default DrawerItem
