import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';


const ForgotPassword = () => {
  return (
     <>
      <Meta title={"forgot Password"}></Meta>
      <BreadCrumb title="Forgot password" />
      

       <div className="forgot-wrapper home-wrapper-2 py-5">
              <div className="container-xxl">
                  <div className="row">
                      <div className="col-12">
                          <div className="auth-card">
                <h3 className='text-center mb-3'>Reset Your Password</h3>
                <span className='d-flex align-items-center justify-content-center mb-2'>We will send you email to reset your password</span>

                              <form action="" className='d-flex flex-column gap-15'>
                                  <div>
                                    <input type="email" name='email' placeholder=' Enter email' className='form-control' />
                                  </div> 
                                                              
                                  
                                     

                                      <div className='mt-2 d-flex flex-column align-items-center justify-content-center gap-15'>
                                          <Link to='/reset-password'><button className='button border-0' type='submit'>Submit</button></Link>
                                          <Link to='/login' className="cancel">Cancel</Link>
                                      </div>
                                  
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
      
    </>
  )
}

export default ForgotPassword
