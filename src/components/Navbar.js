import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Fragment>
        <Link to="/" className="navbar-brand ml-4">
          <span className="name-braces">&lt; </span>
          <span className="name-logo">RP</span>
          <span className="name-braces"> /&gt;</span>
        </Link>
      </Fragment>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-4">
            <NavLink
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              exact
              to="/"
              activeClassName="active"
              className="nav-link nav-text"
            >
              Home
            </NavLink>
          </li>


          <li className="nav-item mr-4">
            <NavLink
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              to="/projects"
              activeClassName="active"
              className="nav-link nav-text"
            >
              Projects
            </NavLink>

          </li>
          <li className="nav-item mr-4">
            <NavLink
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              to="/casestudy"
              activeClassName="active"
              className="nav-link nav-text"
            >
              Case Studies
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              to="/contact"
              activeClassName="active"
              className="nav-link nav-text"
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
