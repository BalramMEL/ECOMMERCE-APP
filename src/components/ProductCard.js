import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="wishlist" />
          </Link>
        </div>

        <div className="product-image ">
          <img src="images/watch.jpg" className="img-fluid" alt="watch" />
          <img src="images/watch1.jpg" className="img-fluid" alt="watch" />
        </div>

        <div className="product-details">
          <h6 className="brand">Bajaj</h6>
          <h5 className="product-title">
            Milanese Loop Watch Band for 42mm/44mm Apple...
          </h5>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            value={3.5}
            edit={false}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
          <p className="price">₹699.00</p>
        </div>

        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt="compare" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="add-cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
