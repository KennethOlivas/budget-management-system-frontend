import { useNavigate } from 'react-router-dom'

const ProfileButton = () => {
	const navigate = useNavigate()

	const Logout = () => {
		localStorage.removeItem('token')
		navigate('/login')
	}

	return (
		<div className='dropdown dropdown-end'>
			<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
				<div className='rounded-full'>
					<img src='https://api.lorem.space/image/face?hash=33791' />
				</div>
			</label>
			<ul
				tabIndex={0}
				className='mt-3 p-2 shadow menu  dropdown-content bg-base-300 rounded-box w-52'
			>
				<li>
					<a className='justify-between'>
						Profile
						<span className='badge'>New</span>
					</a>
				</li>
				<li>
					<a>Settings</a>
				</li>
				<li>
					<a onClick={Logout}>Logout</a>
				</li>
			</ul>
		</div>
	)
}

export default ProfileButton
