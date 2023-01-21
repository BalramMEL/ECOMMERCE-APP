import React from 'react'
import { NavLink, Link } from 'react-router-dom'
  import {BsSearch} from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Free Shipping Over ₹500 & Free Returns</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0' >
                HelpLine: <a className="text-white" href='tel:+91 9834499411'> +91 9834499411</a>
              </p>
            </div>
          </div>
        </div>

      </header>
      <header className='header-upper py-3'>
        <div className="container-xxl">
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link className='text-white'>E-Cart</Link>
              </h2>
            </div>
            <div className='col-5'>
              <div className="input-group">
                <input
                  type="text" className="form-control py-2" placeholder="Search Products...." aria-label="Search Products...." aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6'/></span>
              </div>
            </div>

           <div className='col-5'>
            <div className='header-upper-links d-flex align-items-center justify-content-between'>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='images/compare.svg' alt='compare' />
                  <p className='mb-0'>Compare <br/> Products</p>
                </Link>
              </div>

              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                <img src='images/wishlist.svg' alt='Wishlist' />
                  <p className='mb-0'>Favourite <br/>Wishlist </p>
                </Link>
              </div>

              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                <img src='images/user.svg' alt='user' />
                  <p className='mb-0'>Log in <br/>My Account</p>
                </Link>
              </div>

              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                <img src='images/cart.svg' alt='cart' />
                <div className='d-flex flex-column'>
                  <span className='badge bg-white text-dark'>0</span>
                  <p className='mb-0'>₹ 500</p> 
                </div>                  
              </Link>
              </div>

            </div>
          </div> 
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Shop Categories
  </button>
  <ul class="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Our Store</NavLink>
                    <NavLink to="/">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header