import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">1 Jan 2023</p>
          <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
          <p className="desc">
            you're Only As Good as your last collection, which is an Enormous
            Pressure. I think there is something about...
          </p>
          <Link to="/blog/:id" className="button">
            Read More
          </Link>
        </div>
      </div>
    
  );
};

export default BlogCard;
