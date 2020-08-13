import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom_button/CustomButton";
import CartItem from "../cart_item/CartItem";
import { selectCartItems } from "../redux/cart/CartSelector";
import "./CartDropdownStyles.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
