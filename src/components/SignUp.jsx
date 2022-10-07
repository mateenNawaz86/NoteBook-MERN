import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "./context/notes/noteContext";

const SignUp = () => {
  const [enteredInp, setEnteredInp] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const context = useContext(NoteContext);
  const { showAlertHandler } = context;

  const onChangeHandler = (event) => {
    setEnteredInp({ ...enteredInp, [event.target.name]: event.target.value });
  };

  // function for create a new user
  const signUpHandler = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: enteredInp.name,
        email: enteredInp.email,
        password: enteredInp.password,
      }),
    });

    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authicationToken);
      showAlertHandler("Your account is created successfully", "success");
      navigate("/login");
    } else {
      showAlertHandler("Invailed Details", "error");
    }
  };

  return (
    <>
      <h1 className="text-center text-success heading">Create an account</h1>
      <form onSubmit={signUpHandler}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={enteredInp.name}
            onChange={onChangeHandler}
            aria-describedby="emailHelp"
            placeholder="Name"
            autoComplete="off"
          />
        </div>
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
            aria-describedby="emailHelp"
            placeholder="Email"
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
            id="password"
            name="password"
            value={enteredInp.password}
            onChange={onChangeHandler}
            className="form-control"
            placeholder="Password"
          />
        </div>

        <button
          disabled={
            enteredInp.name.length < 3 || enteredInp.password.length < 8
          }
          type="submit"
          className="btn btn-success"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUp;
