import React from 'react'

const Login = () => {
  return (
    <>
      <div className="wrapper">
        <div className="main-content">

          <div className="header">
            <h5>Member Login</h5>
          </div><br></br>

          <div className="l-part">
            <input type="text" placeholder="Username" className="input-1" />

            <div className="overlap-text">
              <input type="password" placeholder="Password" className="input-2" />
              <br></br>
            </div>

            <input type="button" defaultValue="Log in" className="btn" />
          </div>
        </div>

        <div className="sub-content">
          <div className="s-part">
            Don't have an account?<a href="#">Sign up</a>
          </div>
        </div>
      </div>
     
    </>


  )
}

export default Login