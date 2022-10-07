import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "./context/notes/noteContext";

const Login = () => {
  const [enteredInp, setEnteredInp] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const context = useContext(NoteContext);
  const { showAlertHandler } = context;

  const onChangeHandler = (event) => {
    setEnteredInp({ ...enteredInp, [event.target.name]: event.target.value });
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: enteredInp.email,
        password: enteredInp.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authicationToken);
      showAlertHandler("Login to your account successfully", "success");
      navigate("/addnote");
    } else {
      showAlertHandler("Invailed email and password", "warning");
    }
    setEnteredInp({ email: "", password: "" });
  };

  return (
    <>
      <h1 className="heading text-center text-primary">Sign In</h1>
      <form onSubmit={loginHandler}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={enteredInp.email}
            onChange={onChangeHandler}
            placeholder="Email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={enteredInp.password}
            onChange={onChangeHandler}
            placeholder="Password"
          />
        </div>

        <button
          disabled={
            enteredInp.email.length < 0 || enteredInp.password.length < 8
          }
          type="submit"
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
