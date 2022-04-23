import './App.css'
import LoginPage from './pages/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingUp from './pages/SignupPage'
import HomePage from './pages/HomePage'
import { useEffect } from 'react'



function App() {



	return (
		<BrowserRouter >
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/Signup' element={<SingUp />} />
				<Route path='/Home' element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
