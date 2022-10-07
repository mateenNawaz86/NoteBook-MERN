import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NoteContext from "./context/notes/noteContext";
import AlertCom from "./AlertCom";

const Navbar = (props) => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const menuShowHandler = () => setShow(!show);
  const context = useContext(NoteContext);
  const { alert } = context;

  const navigate = useNavigate();

  // function for logout the current login user
  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
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
            {!localStorage.getItem("token") ? (
              <form className="d-flex" role="search">
                <Link
                  to="/login"
                  className="btn btn-primary mx-1"
                  role="button"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="btn btn-success mx-1"
                  role="button"
                >
                  Sign Up
                </Link>
              </form>
            ) : (
              <button
                onClick={logoutHandler}
                className="btn btn-primary mx-1"
                role="button"
              >
                Logout
              </button>
            )}
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
