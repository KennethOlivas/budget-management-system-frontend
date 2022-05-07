import './App.css'
import LoginPage from './pages/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingUp from './pages/SignupPage'
import HomePage from './pages/HomePage'
import BankAccountPage from './pages/BankAccountPage'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<SingUp />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='/bankaccount' element={<BankAccountPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
