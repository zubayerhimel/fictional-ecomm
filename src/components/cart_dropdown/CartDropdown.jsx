import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom_button/CustomButton";
import CartItem from "../cart_item/CartItem";
import { selectCartItems } from "../redux/cart/CartSelector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { ToggleCartHidden } from "../redux/cart/CartActions";
import { ReactComponent as EmptyImg } from "../../img/empty.svg";
import "./CartDropdownStyles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <>
            <EmptyImg className="empty-svg" />
            <span className="no-items">No items yet</span>
          </>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(ToggleCartHidden());
        }}
      >
        {" "}
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
