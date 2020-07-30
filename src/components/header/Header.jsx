import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/crown.svg";
import { auth } from "../../utils/FirebaseAuth";
import "./HeaderStyles.scss";

export default function Header({ currentUser }) {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/" className="option">
          HOME
        </Link>
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign out
          </div>
        ) : (
          <Link to="/auth" className="option">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}
