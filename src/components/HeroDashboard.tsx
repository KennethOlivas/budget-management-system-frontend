import SetUpAcount from "./SetUpAcount"

const HeroDashboard = () => {
	
	
	return (
		<div className='hero bg-base-200 '>
			<div className='hero-content text-center'>
				<div className='max-w-md'>
					<h1 className='text-5xl font-bold'>Welcome Username</h1>
					<p className='py-6'>
						First time here? Setup Bank account to get started.
					</p>
					<SetUpAcount />
					
				</div>
			</div>
		</div>
	)
}

export default HeroDashboard
