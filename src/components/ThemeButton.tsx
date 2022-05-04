import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'

interface ThemeProps {
	StyleLabel: string
	styleIcon: string
}

const ThemeButton = ({ styleIcon, StyleLabel }: ThemeProps) => {
	const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined)
	useEffect(() => {
		if (darkMode) {
			document.documentElement.setAttribute('data-theme', 'winter')
			localStorage.setItem('vidyaDarkMode', 'true')
		} else {
			document.documentElement.setAttribute('data-theme', 'night')
			localStorage.setItem('vidyaDarkMode', 'false')
		}
	}, [darkMode])

	const toggleDarkMode = () => {
		setDarkMode(!darkMode)
	}

	return (
		<label className={'swap swap-rotate' + StyleLabel}>
			<input onClick={toggleDarkMode} type='checkbox' />
			<SunIcon className={'swap-off fill-current' + styleIcon} />
			<MoonIcon className={'swap-on fill-current' + styleIcon} />
		</label>
	)
}

export default ThemeButton
