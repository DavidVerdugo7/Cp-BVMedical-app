import React, { useContext, useState } from "react";
import { AuthContext } from "../hooks/AuthContext";
import { useNavigate } from "react-router-dom";

import "../styles/Loging.css";
import axios from "axios";

export default function Login() {
  const [activeForm, setActiveForm] = useState("login");

  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8080/login", { email, password })
      .then((res) => {
        console.log(res);
        setIsLoggedIn(true);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  }

  const switchForm = (formType) => {
    setActiveForm(formType);
  };

  return (
    <section className="forms-section">
      <h1 className="section-title">Start Here</h1>

      <div className="forms">
        <div
          className={`form-wrapper ${
            activeForm === "login" ? "is-active" : ""
          }`}
        >
          <button
            type="button"
            className="switcher switcher-login"
            onClick={() => switchForm("login")}
          >
            Login
            <span className="underline"></span>
          </button>
          <form className="form form-login" onSubmit={handleFormSubmit}>
            {/* Login form fields */}
            <fieldset>
              <legend>Please, enter your email and password for login.</legend>
              <div className="input-block">
                <label htmlFor="login-email">E-mail</label>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />

                {/* {errors.email && <span>{errors.email}</span>} */}
              </div>
              <div className="input-block">
                <label htmlFor="login-password">Password</label>
                <input
                  id="login-password"
                  name="password"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />

                {/* {errors.password && <span>{errors.password}</span>} */}
              </div>
            </fieldset>
            <button type="submit" className="btn-login">
              Login
            </button>
          </form>
        </div>

        <div
          className={`form-wrapper ${
            activeForm === "signup" ? "is-active" : ""
          }`}
        >
          <button
            type="button"
            className="switcher switcher-signup"
            onClick={() => switchForm("signup")}
          >
            Sign Up
            <span className="underline"></span>
          </button>
          <form className="form form-signup" onSubmit={handleFormSubmit}>
            {/* Sign-up form fields */}
            <fieldset>
              <legend>
                Please, enter your email, password, and password confirmation
                for sign up.
              </legend>
              <div className="input-block">
                <label htmlFor="signup-email">E-mail</label>
                <input id="signup-email" type="email" required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password">Password</label>
                <input id="signup-password" type="password" required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password-confirm">
                  Confirm password
                </label>
                <input id="signup-password-confirm" type="password" required />
              </div>
            </fieldset>
            <button type="submit" className="btn-signup">
              Continue
            </button>
          </form>
        </div>
      </div>
      <p className="forms-section">
        ¿Don't have an account? Register{" "}
        <span
          type="button"
          className="switcher switcher-signup"
          onClick={() => switchForm("signup")}
        >
          Here
        </span>
      </p>
    </section>
  );
}
