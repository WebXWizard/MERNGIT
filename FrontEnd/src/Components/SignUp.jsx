import React from 'react'

const SignUp = () => {
  return (
    <div>
        <div className="container">
  <div className="card">
    <div className="card_title">
      <h1>Create Account</h1>
      <span>
        Already have an account? <a href="login">Sign In</a>
      </span>
    </div>
    <div className="form">
      <form action="/register" method="post">
        <input
          type="text"
          name="username"
          id="username"
          placeholder=" Enter UserName"
        />
        <input type="email" name="email" placeholder="Enter Your Email" id="email" />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          id="password"
        />
        <button>Sign Up</button>
      </form>
    </div>
    <div className="card_terms">
      <input type="checkbox" name="" id="terms" />{" "}
      <span>
        I have read and agree to the <a href="">Terms of Service</a>
      </span>
    </div>
  </div>
</div>

    </div>
  )
}

export default SignUp