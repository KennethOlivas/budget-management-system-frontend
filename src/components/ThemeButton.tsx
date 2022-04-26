import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'

interface ThemeProps {
	style: string
}

const ThemeButton = ({ style }: ThemeProps) => {
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

	return darkMode ? (
		<SunIcon onClick={toggleDarkMode} className={style} />
	) : (
		<MoonIcon onClick={toggleDarkMode} className={style} />
	)
}

export default ThemeButton
