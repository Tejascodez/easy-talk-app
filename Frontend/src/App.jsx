import './App.css'
import Home from './components/Home/Home'
import AuthPages from './components/Login/Login'
import { Routes, Route } from 'react-router-dom'
function App() {
  

  return (
    <>
    <div className=' bg-black text-white h-screen ' >
      <Routes>
      <Route path='/' element={<AuthPages/>}/>
      <Route path='/home' element={<Home/>} />
      </Routes>
      
    </div>
      
    </>
  )
}

export default App
