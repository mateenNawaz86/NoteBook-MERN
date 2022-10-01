import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-dark navbar-dark`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Notebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/addNote">
                  Add Note
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/allNotes">
                  All Notes
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-success ">Sign Up</button>
              <button className="btn btn-primary mx-2">Login</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

// checks for the default Props
Navbar.propTypes = {
  title: PropTypes.string,
};

// Set Default props if props are NOT defined
Navbar.defaultProps = {
  title: "Set title here",
};

export default Navbar;
