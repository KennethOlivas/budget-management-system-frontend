import { Fragment } from 'react'
import LoginForm from './LoginForm'
import ThemeButton from './ThemeButton'

const Login = () => (
	<Fragment>
		<div className='w-screen h-screen bg-gradient-to-r from-neutral-content via-secondary-content to-accent-content background-animate flex '>
			<ThemeButton style='absolute left-6 top-4 h-12 w-12 btn btn-circle btn-ghost ' />
			<div className='card w-96 bg-base-100 shadow-xl bg-opacity-70 m-auto'>
				<div className='card-body'>
					<LoginForm />
				</div>
				<div className='p-5 text-center text-gray-400 text-xs '>
					<span className=''>
						Copyright © 2022
						<a
							href='https://github.com/KennethOlivas'
							rel='noreferrer'
							target='_blank'
							title='Kenneth Olivas'
							className='text-green hover:text-green-500 pl-1'
						>
							Kenneth Olivas
						</a>
					</span>
				</div>
			</div>
		</div>
	</Fragment>
)

export default Login
