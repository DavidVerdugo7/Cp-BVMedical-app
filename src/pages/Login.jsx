import React, { useState } from "react";
import "../styles/Loging.css";

export default function Login() {
  const [activeForm, setActiveForm] = useState("login");

  const switchForm = (formType) => {
    setActiveForm(formType);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if (activeForm === "login") {
      // Login form logic
    } else {
      // Sign-up form logic
    }
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
                <input id="login-email" type="email" required />
              </div>
              <div className="input-block">
                <label htmlFor="login-password">Password</label>
                <input id="login-password" type="password" required />
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
