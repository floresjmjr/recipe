import React from "react";
import "./Signup.css";
import Footer from "../Components/Footer";

const Signup = () => {
  return (
    <>
      <div id="sign-up-container">
        <div id="sign-up-modal">
          <form>
            <div id="entries">
              <div className="full-name">
                <div className="first-name">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="first"
                    min="2"
                    pattern="[a-zA-Z]+"
                    required
                    formControlName="firstName"
                  />
                  <p className="alert alert-danger" role="alert" hidden>
                    First Name can only contain letters
                  </p>
                </div>
                <div className="last-name">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="last"
                    min="2"
                    pattern="[a-zA-Z]+"
                    required
                    formControlName="lastName"
                  />
                  <p className="alert alert-danger" role="alert" hidden>
                    Last Name can only contain letters
                  </p>
                </div>
              </div>
              <div className="email">
                <label>
                  <i className="fa-regular fa-envelope"></i> Email
                </label>
                <input type="email" name="email" required formControlName="email" />
                <p className="alert alert-danger" role="alert" hidden>
                  Email cannot be blank and must be an email
                </p>
              </div>
              <div className="password">
                <label>
                  <i className="fa-solid fa-lock"></i> Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="6+ characters"
                  min="6"
                  required
                />
                <p className="alert alert-danger" role="alert" hidden>
                  Password must be at least 6 chars long
                </p>
              </div>
            </div>
            <div className="terms">
              <input type="checkbox" name="agreement" required />
              Creating an account means you're okay with our{" "}
              <span>Terms of Service, Privacy Policy,</span> and our default{" "}
              <span>Notification Settings</span>.
            </div>
            <button type="submit">Create Account</button>
          </form>
          <p className="policies">
            This site is protected by reCAPTCHA and the Google <span>Privacy Policy</span> and{" "}
            <span>Terms of Service</span> apply.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
