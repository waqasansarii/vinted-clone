import React from "react";
import Second_Nav from "../Layout/Second_Nav";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>

      <div className="top-nav">
        <Link
          className="navbar-logo"
          style={{ textDecoration: "none", color: "inherit" }}
          to="/"
        >
          DIBSTUFF
          </Link>
        <div className="ms-3 input-group">
          <button
            className="btn btn-outline-secondary custom-gray dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Catalogue
                </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
                    </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
                    </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
                    </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Separated link
                    </a>
            </li>
          </ul>
          <input
            type="text"
            className="form-control custom-gray"
            placeholder="Search for items"
            aria-label="Text input with dropdown button"
          />
        </div>
        <div className="top-btn">
          <button type="button" className="lgn-sign-btn">
            Sign up | Log in
                </button>
          <button type="button" className="sell-btn">
            Sell now
                </button>
          <i className="fa fa-info-circle" aria-hidden="true"></i>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light flex-column">
        <div className="container-fluid d-flex ">
          {/* <Link
            className="navbar-logo"
            style={{ textDecoration: "none", color: "inherit" }}
            to="/"
          >
            DIBSTUFF
          </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <div className="mb-view top-btn">
              <button type="button" className="lgn-sign-btn">
                Sign up | Log in
                </button>
              <button type="button" className="sell-btn">
                Sell now
                </button>
              <i className="fa fa-info-circle" aria-hidden="true"></i>
            </div>
            <Second_Nav />
          </div>

        </div>
      </nav>

    </React.Fragment>
  );
};

export default Navbar;
