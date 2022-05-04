import './App.css'
import LoginPage from './pages/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingUp from './pages/SignupPage'
import HomePage from './pages/HomePage'



function App() {
	return (
		<BrowserRouter >
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/signup' element={<SingUp />} />
				<Route path='/home' element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
