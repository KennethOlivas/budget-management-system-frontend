import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

const RegisterForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	// password confirmation
	const [confirmPassword, setConfirmPassword] = useState('')
	const [emailError, setEmailError] = useState('')
	const navigate = useNavigate()
	const [strength, setStrength] = useState(0)
	//
	const passwordStrength = [
		{
			id: 1,
			color: 'bg-red-200',
		},
		{
			id: 2,
			color: 'bg-oragne-300',
		},
		{
			id: 3,
			color: 'bg-yellow-300',
		},
		{
			id: 4,
			color: 'bg-green-300',
		},
		{
			id: 5,
			color: 'bg-green-500',
		},
	]
	const register = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		if (!validate()) return
		if (!validatePassword()) return
		navigate('/Home')
	}

	const validate = (): boolean => {
		if (email === '' || password === '') {
			setEmailError('Email and password are required')
			return false
		}
		return true
	}

	const validatePassword = (): boolean => {
		if (password !== confirmPassword) {
			setEmailError('Passwords do not match')
			return false
		}
		return true
	}

	const handlePasswordStrength = (password: string) => {
		setPassword(password)
		setStrength(ValidateStrength(password))
        console.log(strength);
        
		
	}

	const ValidateStrength = (password: string): number => {
		let strength = 0
		if (password.length < 6) {
			strength = +1
		}
		if (password.match(/[a-z]/)) {
			strength = strength + 1
		}
		if (password.match(/[A-Z]/)) {
			strength = strength + 1
		}
		if (password.match(/[0-9]/)) {
			strength = strength + 1
		}
		if (password.match(/[!@#$%^&*]/)) {
			strength = strength + 1
		}
		return strength
	}

	const contentStrength = () => {
		const content = []
		for (let i = 0; i < strength; i++) {
			content.push(
				<div key={i} className='w-1/5 px-1'>
					<div
						className={`h-2 rounded-xl transition-colors ${passwordStrength[strength].color}`}
					></div>
				</div>
			)
		}

		return content
	}

	return (
		<form onSubmit={register} className='space-y-8'>
			<div className='space-y-4'>
				<div className='text-center'>
					<img src='/images/logo.png' alt='logo' className='h-12 w-auto' />
				</div>
				<div className='space-y-4'>
					<div className='text-center'>
						<h1 className='text-2xl font-bold'>Register</h1>
					</div>
					<div className='space-y-4'>
						<div className='space-y-2'>
							<div className='mb-5 relative'>
								<input
									onChange={e => setEmail(e.target.value)}
									type='email'
									className='peer input  input-primary pt-8 rounded-md focus:shadow-sm w-full p-3 h-16 placeholder-transparent bg-opacity-70 transition-all duration-100'
									placeholder='name@example.com'
									autoComplete='off'
								/>
								<label
									htmlFor='email'
									className='peer-placeholder-shown:opacity-100 peer-focus:text-primary opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out'
								>
									Email address
								</label>
							</div>
						</div>
						<div className='space-y-2'>
							<div className='mb-5 relative'>
								<input
									onChange={e => handlePasswordStrength(e.target.value)}
									type='password'
									className='peer input input-primary pt-8  rounded-md  focus:shadow-sm w-full p-3 h-16 placeholder-transparent bg-opacity-70 transition-all duration-100'
									placeholder='**********'
									autoComplete='off'
								/>
								<label
									htmlFor='password'
									className='peer-placeholder-shown:opacity-100 peer-focus:text-primary opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out'
								>
									Password
								</label>
							</div>
							<div className='mb-5 relative'>
								<input
									onChange={e => setConfirmPassword(e.target.value)}
									type='password'
									className='peer input input-primary pt-8  rounded-md  focus:shadow-sm w-full p-3 h-16 placeholder-transparent bg-opacity-70 transition-all duration-100'
									placeholder='**********'
									autoComplete='off'
								/>
								<label
									htmlFor='password'
									className='peer-placeholder-shown:opacity-100 peer-focus:text-primary opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out'
								>
									Password Confirmation
								</label>
							</div>
							<div className='flex -mx-1'>{contentStrength()}</div>

							<span className='text-rose-400 text-sm opacity-90'>
								{emailError}
							</span>
						</div>
					</div>
					<div className='space-y-8'>
						<button
							type='submit'
							className='btn btn-outline btn-secondary w-full'
						>
							Register
						</button>
					</div>
					<div className='text-center'>
						<div className='space-y-2'>
							<span className='text-sm text-accent-focus'>
								Do you have account ?
							</span>
							<NavLink
								to='/Login'
								className='text-sm underline decoration-transparent hover:decoration-sky-500 ml-2 hover:text-secondary transition-all duration-150'
							>
								Sign in
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}

export default RegisterForm
