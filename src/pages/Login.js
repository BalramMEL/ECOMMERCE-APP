import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Meta title={"Login"}></Meta>
          <BreadCrumb title="Login" />

          <div className="login-wrapper home-wrapper-2 py-5">
              <div className="container-xxl">
                  <div className="row">
                      <div className="col-12">
                          <div className="auth-card">
                              <h3 className='text-center mb-4'>Login</h3>

                              <form action="" className='d-flex flex-column gap-15'>
                                  <div>
                                    <input type="email" name='email' placeholder=' Enter email' className='form-control' />
                                  </div> 
                                  <div className='mt-1'>
                                    <input type="password" name='password' placeholder=' Enter password' className='form-control'/>
                                  </div> 
                                  
                                  <div>
                                      <Link to="/forgot-password">Forgot Password ?</Link>

                                      <div className='mt-3 d-flex align-items-center justify-content-center gap-15'>
                                          <button className='button border-0'>Login</button>
                                          <Link className="button signup">SignUp</Link>
                                      </div>
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

export default Login
