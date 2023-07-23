import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Login } from './components/login/Login'
import { Home } from './components/home/Home'
import { Post_image } from './components/post_image'
import {Navbar} from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Post_image/> */}
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
