import React, { useRef } from "react";
import { auth } from "../../firebase";
import "./SignIn.css";

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .catch((err) => alert(err.message));
  };

  const handleSignUp = (e) => {
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .catch((err) => alert(err.message));
  };

  return (
    <div className="signin">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={handleSignIn}>
          Sign In
        </button>
        <h4>
          New to Netflix? <span onClick={handleSignUp}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;
