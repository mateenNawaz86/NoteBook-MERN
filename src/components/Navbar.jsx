import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import NoteContext from "./context/notes/noteContext";
import AlertCom from "./AlertCom";

const Navbar = (props) => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const menuShowHandler = () => setShow(!show);
  const context = useContext(NoteContext);
  const { alert } = context;

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
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
            <i
              onClick={menuShowHandler}
              className={show ? "uil uil-times" : "uil uil-bars"}
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/addNote" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/addNote"
                >
                  Add Note
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/allNotes" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/allNotes"
                >
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
      <div id="alert__box">{alert && <AlertCom alert={alert} />}</div>
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
