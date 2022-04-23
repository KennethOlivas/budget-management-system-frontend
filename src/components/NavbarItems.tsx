import { useNavigate } from 'react-router-dom'

interface NavbarItemsProps {
	title: string
	path: string
}

const NavbarItems = ({ title, path }: NavbarItemsProps) => {
	const navigate = useNavigate()
	const redirect = (path: string): void => {
		navigate(path)
	}
	return (
		<button
			onClick={() => {
				redirect(path.toString())
			}}
			className='btn btn-square btn-ghost'
		>
			{title}
		</button>
	)
}

export default NavbarItems
