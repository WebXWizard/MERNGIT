import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import EvenHandling from './Components/EvenHandling'



const App = () => {
  return (
    <div>
    <BrowserRouter>
       <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/EventHandling' element={<EvenHandling/>} />
     </Routes>
    </BrowserRouter> 
    </div>
  )
}

export default App
