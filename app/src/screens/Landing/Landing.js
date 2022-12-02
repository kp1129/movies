import React, { useState } from "react";
import SignUp from "../../components/SignIn/SignIn";
import "./Landing.css";

function Landing() {
  const [signIn, setSignIn] = useState(false);

  const startSignIn = () => setSignIn(true);
  return (
    <div className="landing">
      <div className="landing__background">
        <img
          className="landing__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="landing__button" onClick={startSignIn}>
          Sign In
        </button>
        <div className="landing__gradient" />
      </div>
      <div className="landing__contents">
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited films, TV, and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="landing__input">
              <form>
                <input type="email" placeholder="Email address" />
                <button className="landing__getStarted" onClick={startSignIn}>
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Landing;
