import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
      <Meta title={"SignUp"}></Meta>
      <BreadCrumb title="SignUp" />

       <div className="signUp-wrapper home-wrapper-2 py-5">
              <div className="container-xxl">
                  <div className="row">
                      <div className="col-12">
                          <div className="auth-card">
                <h3 className='text-center mt-2 mb-3'>Create Account</h3>
                
                 <form action="" className='d-flex flex-column gap-15'>
                    <div>
                     <input type="text" name=' name' placeholder='Name' className='form-control' />
                    </div>                   
                    <div>
                     <input type="email" name='email' placeholder='email' className='form-control' />
                    </div>                  
                    <div>
                     <input type="tel" name='mobile' placeholder='Mobile Number' className='form-control' />
                    </div>                  
                    <div>
                     <input type="password" name='password' placeholder='Password' className='form-control' />
                    </div>                  
                                  
                    <div className='mt-3 mb-2 d-flex flex-column align-items-center justify-content-center gap-15'>
                      <button  className='button border-0' type='submit'>Create</button>
                                          
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

export default SignUp
