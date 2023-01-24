import React from "react";
import { BsLinkedin, BsInstagram, BsGithub, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <div className="footer-top-data d-flex align-items-center gap-30">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign up for NewsLetter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Enter E-mail address...."
                  aria-label="Enter your E-mail address...."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4"> 
        <div className="container-xxl  ">
          <div className="row ">
            <div className="col-4 ">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  JaiBhavani Nagar, N-4 <br />
                  Cidco, SambhajiNagar <br /> Pincode:431001
                </address>
                <a
                  href="tel:+71 56744424532"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +82 453546135
                </a>
                <a
                  href="mailto:balrammelkunde1999@gmail.com"
                  className="mt-2 d-block mb-2 text-white"
                >
                  balrammelkunde134@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-5" />
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className="fs-5" />
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-5" />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy</Link>
                <Link className="text-white py-2 mb-1">Refound Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms of Service</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Accounts</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
                <Link className="text-white py-2 mb-1">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Accesseries</Link>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Developer's Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
