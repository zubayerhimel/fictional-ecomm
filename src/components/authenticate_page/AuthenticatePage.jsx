import React from "react";
import SignIn from "../sign_in/SingIn";
import SignUp from "../sign-up/SignUp";
import "./AuthenticatePageStyles.scss";

export default function AuthenticatePage() {
  return (
    <div className="auth-page">
      <SignIn />
      <SignUp />
    </div>
  );
}
