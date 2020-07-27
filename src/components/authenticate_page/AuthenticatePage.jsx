import React from "react";
import SignIn from "../sign_in/SingIn";
import "./AuthenticatePageStyles.scss";

export default function AuthenticatePage() {
  return (
    <div className="auth-page">
      <SignIn />
    </div>
  );
}
