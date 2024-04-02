import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import EvenHandling from './Components/EvenHandling'
import Login from './Components/Login'
import SignUp from './Components/SignUp'



const App = () => {
  return (
    <div>
    <BrowserRouter>
       <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/EventHandling' element={<EvenHandling />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/SignUp' element={<SignUp />} />
     </Routes>
    </BrowserRouter> 
    </div>
  )
}

export default App
