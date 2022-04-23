import RegisterForm from '../components/RegisterFrom'

const SingUp = () => {
	return (
		<div className='w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex'>
			<div className='card w-96 bg-base-100 shadow-xl bg-opacity-70 m-auto'>
				<div className='card-body'>
					<RegisterForm />
				</div>
			</div>
		</div>
	)
}

export default SingUp
