import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const PrivacyPolicy = () => {
  return (
     <>
      <Meta title={"Privacy Policy"}></Meta>
      <BreadCrumb title="Privacy Policy" />

      <div className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className='privacy py-5 w-100'>
                <div className='mb-5'>
                  <h3 className="title">
                  Information Collection
                  </h3>
                  <p className="desc">
                      The personal information collected by our e-commerce site will be used to process orders, communicate with customers, improve our site and services, and to send promotional offers and updates. We will not sell, trade, or rent any personal information to third parties unless required by law.
                  </p>
                </div>
                <div className='mb-5'>
                  <h3 className="title">
                  Information Use
                  </h3>
                  <p className="desc">
                     Our e-commerce site may collect personal information from users such as name, email address, mailing address, phone number, credit card information, and order history. This information is collected when a user creates an account or makes a purchase.
                  </p>
                </div>
                <div className='mb-5'>
                  <h3 className="title">
                 Security Measures 
                  </h3>
                  <p className="desc">
                     Our e-commerce site uses industry-standard security measures such as SSL encryption to protect personal information during transmission. We also use secure servers and firewalls to protect against unauthorized access and hacking attempts.
                  </p>
                </div>
                <div className='mb-5'>
                  <h3 className="title">
                  Cookies and Tracking
                  </h3>
                  <p className="desc">
                     Our e-commerce site uses cookies and other tracking technologies to enhance the user experience and to gather information about user behavior on our site. This information is used to improve our site and services and to provide personalized recommendations and advertising. Users can opt-out of cookies through 
                  </p>
                </div>
                <div >
                  <h3 className="title">
                  Third-Party Links
                  </h3>
                  <p className="desc">
                     Our e-commerce site may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these sites and encourage users to review their respective privacy policies before using them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
