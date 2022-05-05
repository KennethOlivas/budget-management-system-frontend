import React from 'react'
interface InputProps {
	placeholderLabel: string
	type?: string
	value: string
	divMargin?: boolean
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
	placeholderLabel,
	divMargin,
	type,
	value,
	onChange,
}: InputProps) => {
	return (
		<div className={`${divMargin ? 'my-5' : ''} relative`}>
			<input
				placeholder={placeholderLabel}
				className='peer input input-primary pt-8 rounded-md focus:shadow-sm w-full p-3 h-16 placeholder-transparent bg-opacity-70 transition-all duration-100'
				type={type}
				value={value}
				onChange={onChange}
			/>
			<label className='peer-placeholder-shown:opacity-100 peer-focus:text-primary opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out'>
				{placeholderLabel}
			</label>
		</div>
	)
}

export default Input
