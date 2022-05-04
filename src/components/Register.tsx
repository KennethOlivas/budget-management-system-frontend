import RegisterForm from './RegisterForm'
import ThemeButton from './ThemeButton'

const Register = () => {
	return (
		<>
			<div className='w-screen h-screen bg-gradient-to-r from-error-content via-secondary-content to-accent-content background-animate flex '>
				<div className='card h-full w-full border-none md:border-2 md:h-auto md:w-96 bg-base-100 shadow-xl bg-opacity-70 m-auto pb-4'>
					<div className='card-body flex justify-center'>
						<RegisterForm />
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
					<ThemeButton
						styleIcon='my-4 h-12 w-12 btn btn-circle btn-ghost'
						StyleLabel='p-20'
					/>
				</div>
			</div>
		</>
	)
}
export default Register
