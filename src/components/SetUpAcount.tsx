import { ChangeEvent, useState } from 'react'
import Input from './Input'

interface Props {
	title: string | undefined
}

const SetUpAcount = ({ title }: Props) => {
	const [bankNameAcount, setBankNameAcount] = useState('')
	const [bankName, setBankName] = useState('')
	const [bankNumber, setBankNumber] = useState('')
	const currency: String[] = ['USD', 'EUR', 'NIO']
	const [amount, setAmount] = useState('')

	const handleChangeNameAcount = (event: ChangeEvent<HTMLInputElement>) => {
		setBankNameAcount(event.target.value)
	}

	const handleChangeBankName = (event: ChangeEvent<HTMLInputElement>) => {
		setBankName(event.target.value)
	}

	const handleChangeBankNumber = (event: ChangeEvent<HTMLInputElement>) => {
		setBankNumber(event.target.value)
	}

	const handleChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
		setAmount(event.target.value)
	}
	return (
		<>
			<label
				htmlFor='my-modal-3'
				className='btn btn-primary shadow-md shadow-primary/70 hover:shadow-primary/40 btn-xl capitalize text-xl'
			>
				{title || 'Set Up bank Acount'}
			</label>

			<input type='checkbox' id='my-modal-3' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box bg-base-100 relative'>
					<label
						htmlFor='my-modal-3'
						className='btn btn-sm btn-circle absolute right-2 top-2 hover:text-error'
					>
						✕
					</label>
					<h3 className='text-3xl p-4 font-extrabold'>Setup Bank Acount</h3>
					<form className='form space-y-6'>
						<Input
							placeholderLabel={'Acount Name'}
							value={bankNameAcount}
							onChange={function (event: ChangeEvent<HTMLInputElement>): void {
								handleChangeNameAcount(event)
							}}
						/>

						<Input
							placeholderLabel={'Bank Name'}
							value={bankName}
							onChange={function (event: ChangeEvent<HTMLInputElement>): void {
								handleChangeBankName(event)
							}}
						/>

						<Input
							placeholderLabel={'Bank Number'}
							value={bankNumber}
							onChange={function (event: ChangeEvent<HTMLInputElement>): void {
								handleChangeBankNumber(event)
							}}
						/>
						<div className='flex space-x-4'>
							<div className='mx-0 w-1/2'>
								<select className='select select-primary select-lg w-full rounded-md focus:shadow-sm  bg-opacity-70 transition-all duration-100'>
									{currency.map(curr => (
										<option key={curr.toString()}>{curr}</option>
									))}
								</select>
							</div>
							<div className='mx-0 w-1/2'>
								<Input
									placeholderLabel={'Amount'}
									value={amount}
									onChange={function (
										event: ChangeEvent<HTMLInputElement>
									): void {
										handleChangeAmount(event)
									}}
								/>
							</div>
						</div>

						<button className='btn btn-outline btn-secondary btn-lg mt-8'>
							Crate Account
						</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default SetUpAcount
