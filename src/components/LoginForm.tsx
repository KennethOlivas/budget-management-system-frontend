import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const LoginForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailError, setEmailError] = useState('')
	const navigate = useNavigate()

	const login = async (e: { preventDefault: () => void }) => {
		e.preventDefault()
		if (!validate()) return
		navigate('/Home')
		try {
			console.log('login')
			console.log(email, password)
		} catch (error) {}
	}

	const validate = (): boolean => {
		if (email === '' || password === '') {
			setEmailError('Email and password are required')
			return false
		}
		return true
	}

	return (
		<form onSubmit={login} className='space-y-8'>
			<div className='space-y-4'>
				<div className='text-center'>
					<img src='/images/logo.png' alt='logo' className='h-12 w-auto' />
				</div>
				<div className='space-y-4'>
					<div className='text-center'>
						<h1 className='text-2xl font-bold'>Login</h1>
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
									onChange={e => setPassword(e.target.value)}
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
							Login
						</button>
					</div>
					<div className='text-center'>
						<span className='text-sm text-accent-focus cursor-pointer'>
							Forgot password?
						</span>
						<div className='space-y-2'>
							<span className='text-sm text-accent-focus'>
								Don&apos;t have an account?
							</span>
							<NavLink
								to='/Signup'
								className='text-sm underline decoration-transparent hover:decoration-sky-500 ml-2 hover:text-secondary transition-all duration-150'
							>
								Sign up
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}

export default LoginForm
