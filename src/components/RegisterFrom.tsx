import { NavLink } from "react-router-dom"

const RegisterForm = () => {
	return (
		<div>
			<div className='text-center'>
				
				<div className='space-y-2'>
					<span className='text-sm text-accent-focus'>
						Do you have acount ? 
					</span>
					<NavLink
						to='/Signup'
						className='text-sm underline decoration-transparent hover:decoration-sky-500 ml-2 hover:text-sky-800 transition-all duration-150'
					>
						Sign up
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default RegisterForm
