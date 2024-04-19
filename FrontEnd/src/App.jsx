import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import EvenHandling from './Components/EvenHandling'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import './App.css'
import {SnackbarProvider} from 'notistack'
import ManageUsers from './Components/ManageUsers'
import ContactUs from './Components/ContactUs'
import ProductListing from './Components/ProductListing'
import AddProduct from './Components/AddProduct'




const App = () => {
  return (
    <div>
      <SnackbarProvider >
    <BrowserRouter>
       <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/EventHandling' element={<EvenHandling />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/AddProduct' element={<AddProduct />} />
      <Route path='/ManageUsers' element={<ManageUsers />} />
      
      <Route path='/ProductListing' element={<ProductListing />} />

      <Route path='/ContactUs' element={<ContactUs />} />

     </Routes>
    </BrowserRouter> 
    </SnackbarProvider>
    </div>
  )
}

export default App
