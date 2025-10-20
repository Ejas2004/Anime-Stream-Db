import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.login.css";

function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  function loginCheck(e) {
    e.preventDefault();
    const a = email.current.value;
    const b = password.current.value;
    console.log(a, b);

    if (a === "ejas@gmail.com" && b === "12345") {
      window.alert("✅ Successfully Logged In!");
      navigate("/home");
    } else {
      window.alert("❌ Invalid Email or Password!");
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-title">Sign in</h1>
      
      <div className="login-box">
        <form onSubmit={loginCheck}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              ref={email}
            />
          </div>

          <div className="input-group">
            <div className="password-label-row">
              <label>Password</label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                ref={password}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {showPassword ? (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </>
                  ) : (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <button type="submit" className="login-btn flex items-center justify-center">
            Sign in
          </button>
        </form>


        <p className="signup-prompt">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>

      <footer className="login-footer">
        <a href="#">Terms of Service</a>
        <span className="separator">·</span>
        <a href="#">Privacy Policy</a>
      </footer>
    </div>
  );
}

export default Login;
