import './App.css'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import ForgotPass from './components/ForgotPass'
import ResetPass from './components/ResetPass'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotPassword' element={<ForgotPass/>}/>
        <Route path='/reset-password/:token' element={<ResetPass/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App


