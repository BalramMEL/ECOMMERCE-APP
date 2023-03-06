import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";


const OurStore = () => {
  const [grid, setGrid] = useState(4); 
 

  return (
    <>
      <Meta title={"Our Store"}></Meta>
      <BreadCrumb title="Our Store" />

      <div className="store-wrapper home-wrapper-2 py-5">
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

              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">
                      In Stock (12)
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">
                      Out of Stock (2)
                    </label>
                  </div>
                  </div>
                
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input type="email" className="form-control py-1" id="floatingInput" placeholder="From" />
                     <label htmlfor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input type="email" className="form-control py-1" id="floatingInput1" placeholder="To" />
                     <label htmlfor="floatingInput1">To</label>
                  </div>
                  </div>

                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>      
                  
                  <h5 className="sub-title">Size</h5>
                  <div className="size_section">
                    <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="color-1" />
                    <label className="form-check-label" htmlFor="color-1">
                      S (17)
                    </label>
                  </div>
                    <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="color-1" />
                    <label className="form-check-label" htmlFor="color-1">
                      M (22)
                    </label>
                  </div>
                    <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="color-1" />
                    <label className="form-check-label" htmlFor="color-1">
                      L (0)
                    </label>
                  </div>
                    <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="color-1" />
                    <label className="form-check-label" htmlFor="color-1">
                      XL (5)
                    </label>
                  </div>
                    <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="color-1" />
                    <label className="form-check-label" htmlFor="color-1">
                      XXL (12)
                    </label>
                  </div>
                  </div>

                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tag</h3>

                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphones</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Oppo</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Speaker</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
                  </div>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>

                <div>
                  <div className="random-products mb-3 d-flex gap-4">
                    <div className="w-45">
                      <img src="images/watch.jpg" className="img-fluid " alt="headphone" />
                    </div>
                    <div className="w-55">
                      <h5>
                        Kids Headphones Bulk 10 Pack Multi Colored for Students
                      </h5>
                      <ReactStars
                        count={5}              
                        size={24}
                        value={3.5}
                        edit={false}
                        activeColor="#ffd700" />
                      <b>₹599.00</b>
                    </div>
                  </div>

                  <div className="random-products  d-flex gap-4">
                    <div className="w-45">
                      <img src="images/watch.jpg" className="img-fluid " alt="headphone" />
                    </div>
                    <div className="w-55">
                      <h5>
                        Kids Headphones Bulk 10 Pack Multi Colored for Students
                      </h5>
                      <ReactStars
                        count={5}              
                        size={24}
                        value={3.5}
                        edit={false}
                        activeColor="#ffd700" />
                      <b>₹599.00</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                   <div className="d-flex align-items-center gap-10">
                    <p className="mb-0" style={{"width": "100px" }}>Sort By:</p>
                  <select name="" className="form-control form-select" id="" >
                    <option value="manual">Featured</option>
                    <option value="best-selling" selected="selected">Best Selling</option>
                    <option value="title-ascending" >Alphabetically, A-Z</option>
                    <option value="title-descending" >Alphabetically, Z-A</option>
                    <option value="price-ascending" >Price, low to high</option>
                    <option value="price-descending" >Price,high to low</option>
                    <option value="created-ascending" >old to new</option>
                    <option value="created-descending" >new to old</option>
                  </select>
                  </div>                  

                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0 " style={{"color": "lightgray" }}>23 products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                       <img onClick={() => {
                        setGrid(3);
                       }} src="images/gr4.svg" alt="grid" className="d-block img-fluid" /> 
                       <img onClick={() => {
                        setGrid(4);
                       }} src="images/gr3.svg" alt="grid" className="d-block img-fluid" /> 
                       <img onClick={() => {
                        setGrid(6);
                       }} src="images/gr2.svg" alt="grid" className="d-block img-fluid" /> 
                       <img onClick={() => {
                        setGrid(12);
                       }} src="images/gr.svg" alt="grid" className="d-block img-fluid" /> 
                    </div>
                  </div>
               </div>
              </div>

              <div className="product-list pb-5">
                <div className="d-flex flex-wrap gap-15">
                  <ProductCard grid={grid} />
                </div>      
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
