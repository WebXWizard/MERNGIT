import React from 'react'
import logo from '../assets/jjk.jpg'

const Home = () => {
  return (
    <div>
      <header>
        { <img   src={logo} alt='logo'  /> }
        <h1>ALone Boy</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam?</p>
      </header>
    </div>
  )
}

export default Home