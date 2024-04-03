import React, { useState } from 'react'
import { enqueueSnackbar } from 'notistack'

const EvenHandling = () => {
  const [count,setcount]=useState(0)
 const handleButoonClick=() => 
//  alert('Why are you Gay')
  enqueueSnackbar('Why are you Gay')


  const handleIncrement=() =>
  {
    setcount (count +1)
  }
  const handleDecrement=() =>
    {
      setcount (count -1)
    }
      const handleReset= () =>
      {
        setcount (0)
      }
  return (
    
    <div className='Con'>
        <h3> EventHandling Example</h3>
        <button onClick={handleButoonClick} className='btn2 btn-danger'> CLICK ME</button>
        <section className='mt-5'>
          <h2>Count Handling</h2>
          <h4> Number of counts: {count} </h4>
          <div className='button-container'>

           <button onClick={handleIncrement} className='btn2 btn-primary'>Increase</button>
           <button onClick={handleDecrement} className='btn2 btn-info'>Decrease</button>
           <button onClick={handleReset} className='btn2 btn-danger'>Reset</button>

          </div>
        </section>
    </div>
  )
}

export default EvenHandling