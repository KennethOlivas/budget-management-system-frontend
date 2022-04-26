import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useState } from 'react'

interface ThemeProps {
	style: string
}

const ThemeButton = ({ style }: ThemeProps) => {
	const [theme, setTheme] = useState(
		document.documentElement.getAttribute('data-theme')
	)
	const handleClick = () => {
		setTheme(document.documentElement.getAttribute('data-theme'))
		if (theme === 'night') {
			document.documentElement.setAttribute('data-theme', 'winter')
		} else {
			document.documentElement.setAttribute('data-theme', 'night')
		}
	}

	return (
		{theme === 'night' ? <MoonIcon className=`${style}` onClick={handleClick} /> : <SunIcon className=`${style}` onClick={handleClick} />}
	)
}

export default ThemeButton
