import React from "react";
import './Signup.css';

const Signup = () => {
  return (
    <div id="sign-up-container">
      <div id="sign-up-modal">
        <form>
          <div id="entries">
            <div class="full-name">
              <div class="first-name">
                <label>First Name</label>
                <input
                  type="text"
                  name="first"
                  min="2"
                  pattern="[a-zA-Z]+"
                  required
                  formControlName="firstName"
                />
                <p class="alert alert-danger" role="alert" hidden>
                  First Name can only contain letters
                </p>
              </div>
              <div class="last-name">
                <label>Last Name</label>
                <input
                  type="text"
                  name="last"
                  min="2"
                  pattern="[a-zA-Z]+"
                  required
                  formControlName="lastName"
                />
                <p class="alert alert-danger" role="alert" hidden>
                  Last Name can only contain letters
                </p>
              </div>
            </div>
            <div class="email">
              <label>
                <i class="fa-regular fa-envelope"></i> Email
              </label>
              <input type="email" name="email" required formControlName="email" />
              <p class="alert alert-danger" role="alert" hidden>
                Email cannot be blank and must be an email
              </p>
            </div>
            <div class="password">
              <label>
                <i class="fa-solid fa-lock"></i> Password
              </label>
              <input type="password" name="password" placeholder="6+ characters" min="6" required />
              <p class="alert alert-danger" role="alert" hidden>
                Password must be at least 6 chars long
              </p>
            </div>
          </div>
          <div class="terms">
            <input type="checkbox" name="agreement" required />
            Creating an account means you're okay with our{" "}
            <span>Terms of Service, Privacy Policy,</span> and our default{" "}
            <span>Notification Settings</span>.
          </div>
          <button type="submit">Create Account</button>
        </form>
        <p class="policies">
          This site is protected by reCAPTCHA and the Google <span>Privacy Policy</span> and{" "}
          <span>Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default Signup;
