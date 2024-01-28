import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="hero_area">
<header className="header_section">
<div className="header_bottom">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <Link className="navbar-brand" to="/">
            <img src="images/logo.png" alt="Main Logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex mr-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/booking">
                    Appointment
                  </Link>
                </li>


                <li className="nav-item">
                  <Link className="nav-link" to="/doctor">
                    Doctors
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/testimonial">
                    Testimonial
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="quote_btn-container">
              <Link to="/login">
                <i className="fa fa-user" aria-hidden="true"></i>
                <span>Login</span>
              </Link>
              <Link to="/register">
                <i className="fa fa-user" aria-hidden="true"></i>
                <span>Sign Up</span>
              </Link>
              <form className="form-inline">
                <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div> 
</header>
</div>
  );
}

export default Navbar;
