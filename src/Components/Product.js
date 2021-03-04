import React from "react";
import "./Styles/Product.css";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <React.Fragment>
      <div className="cards-overlay">
        <div className="product-card">
          <i className="far fa-heart"></i>
          <h6>Louis asda</h6>

          <Link to="/offer">
            <img
              src="https://cdn.rebelle.com/te/teaser_topdesigners_primary_louisvuitton.jpg"
              alt="product"
            ></img>
          </Link>
          <div className="product-description">
            <h4>€2,259</h4>
            <h4>Bag/Purse Leather</h4>
            <h4>M / 10</h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Product;