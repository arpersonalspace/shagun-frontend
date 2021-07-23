import React from "react";
import "../css/SignIn.css";
import { Link } from "react-router-dom";
function SignIn() {
  return (
    <div className="signin">
      <Link to="/" className="signin__logo">
        <img src="/full-logo.png" alt="" />
      </Link>

      <div className="div">
        <div className="signin__form">
          <form action="" className="form">
            <h4>Sign In</h4>
            <div className="signin_input">
              <input type="text" name="" id="" placeholder="Enter your name" />
            </div>
            <div className="signin_input">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your password"
              />
            </div>

            <div className="signin_submit">
              <button>Sign In</button>
            </div>
            <div className="signin__extra">
              <div className="signin__checkbox">
                <input type="checkbox" name="" id="" />
                Remember Me
              </div>
              Need Help?
            </div>
          </form>

          <div className="sign_inFooter">
            <div className="loginwithFacebook">
              <img
                src="https://s3-symbol-logo.tradingview.com/facebook--600.png"
                alt="facebook logo"
              />{" "}
              <span>Login with Facebook</span>
            </div>

            <div className="footer__guidlines">
              <div className="guidline1">
                <h4>
                  new to netlfix? <span>Sign up now</span>
                </h4>
              </div>

              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <a href="https://www.netflix.com">Learn more.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
