import './App.css'
import Login from './pages/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingUp from './pages/SignupPage'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/login' element={<Login />} />
				<Route path='/Signup' element={<SingUp />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
