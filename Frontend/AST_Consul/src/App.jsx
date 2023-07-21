import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Login } from './components/login/Login'
import { Home } from './components/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home/>
       {/* <Login/> */}
    </div>
  )
}

export default App
