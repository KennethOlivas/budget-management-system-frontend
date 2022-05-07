import SetUpAcount from './SetUpAcount'

const BankAccount = () => {
	const bankInfo = [
		{
			id: 1,
			bankName: 'Bank of America',
			bankNumber: '325326627',
			bankNameAcount: 'Juan Loez',
		},
		{
			id: 2,
			bankName: 'Bank of America',
			bankNumber: '1234326789',
			bankNameAcount: 'John Lamar',
		},
		{
			id: 3,
			bankName: 'Bank of Nicaragua',
			bankNumber: '123456789',
			bankNameAcount: 'Kenneth Olivas',
		},
	]

	return (
		<>
			<div className='flex my-4'>
				<div className='flex-auto md:ml-8'>
					<h1 className='text-3xl font-bold '>Bank Accounts</h1>
				</div>
				<div className='flex-none md:mr-8 text-center'>
					<div>
						<SetUpAcount title='Add bank account' />
					</div>
				</div>
			</div>
			<div className='overflow-x-auto mx-0 md:mx-8'>
				<table className='table w-full'>
					<thead>
						<tr>
							<th></th>
							<th>Bank Name</th>
							<th>Bank Name Acount</th>
							<th>Acount</th>
						</tr>
					</thead>
					<tbody>
						{bankInfo.map(bank => (
							<tr key={bank.id} className='hover'>
								<td>{bank.id}</td>
								<td>{bank.bankName}</td>
								<td>{bank.bankNameAcount}</td>
								<td>{bank.bankNumber}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default BankAccount
