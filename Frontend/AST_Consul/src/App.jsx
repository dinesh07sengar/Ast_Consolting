import { useState } from 'react'


import { Login } from './components/login/Login'
import { Home } from './components/home/Home'

import {Navbar} from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
      {/* <Home/> */}
       {/* <Login/> */}
    </div>
  )
}

export default App
