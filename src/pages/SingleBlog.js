import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';
import {HiOutlineArrowLeft} from "react-icons/hi"


const SingleBlog = () => {
  return (
    <>
        <Meta title={"SingleBlog"}></Meta>
      <BreadCrumb title="SingleBlog" />
          
          <div className="blog-wrapper home-wrapper-2 py-5">
              <div className="container-xxl">
          <div className="row">
            
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              </div>


            <div className="col-9">
              <div className="single-blog-card ">
               <Link to="/blogs" className='d-flex align-items-center gap-10'><HiOutlineArrowLeft className='fs-4'/> Back to Blogs</Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img src="/images/blog-1.jpg" alt="blog" className='img-fluid  my-4' />

                <p>
                    Dropdown menus can now be clickable with a new autoClose option to handle the auto close behavior. You can use this option to accept the click inside or outside the dropdown menu to make it interactive. Pagination links now have customizable margin-left that are dynamically rounded on all corners when separated from one another.
                Road construction activities during 9MFY23 were affected largely by elevated level of input prices, labour shortages along with heavy and prolonged monsoon period. Due to these, Ministry of Road Transportation and Highways’ (MoRTH) construction pace has tapered to 5774 km of National Highway during 9MFY23 vs. target of 12000 km in FY23. 
                </p>
                
              </div>
                          
                  
               
            </div>
            

            </div>
            </div>
            </div>
            
    </>
  )
}

export default SingleBlog
