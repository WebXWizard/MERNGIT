import React from 'react'


const Login = () => {
    
  return (
<div className='cons'>
   <div className="container5">
      <div className="wrapper">
        <div className="title">
        <span>Login Form</span>
        </div>
        <form action="#">
          <div className="row">
            {/* <i className="fas fa-user" /> */}
            {/* <span style={{ color: 'red', fontSize: '10' }}>{loginForm.touched.email && loginForm.errors.email}</span> */}
            <input type="text" placeholder="Email or Phone" required=""  />
             {/* id='email'
             onChange={loginForm.handleChange}
             value={loginForm.values.email} */}
          </div>
          <div className="row">
            {/* <i className="fas fa-lock" /> */}
            {/* <span style={{ color: 'red', fontSize: '10' }}>{loginForm.touched.password && loginForm.errors.password}</span> */}
            <input type="password" placeholder="Password" required=""  />
              {/* id='password'
              onChange={loginForm.handleChange}
              value={loginForm.values.password} */}
          </div>
          <div className="pass">
            <a href="#">Forgot password?</a>
          </div>
          <div className="row button">
            <input type="submit" defaultValue="Login" />
          </div>
          <div className="signup-link">
            Not a member? <a href="SignUp">Signup now</a>
          </div>
        </form>
      </div>
    </div>
 </div>  
  

  )
}

export default Login