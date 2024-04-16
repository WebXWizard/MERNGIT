import React from 'react'

const ContactUs = () => {
  return (
    
    <div className="container9">
        <div className="card4">
          <div className="contact-form">
            <form action="" id="contact-form">
              <h4 className='centre'>Contact Us</h4>
              <div className="input-box">
                <input type="text" required="true" name="" />
                <span>Full Name</span>
              </div>
              <div className="input-box">
                <input type="email" required="true" name="" />
                <span>Email</span>
              </div>
              <div className="input-box">
                <textarea required="true" name="" defaultValue={""} />
                <span>Type your Message...</span>
              </div>
              <div className="input-box">
                <input type="submit" defaultValue="Send" name="" />
              </div>
            </form>
          </div>
        </div>
      
      
    </div>


  )
}

export default ContactUs