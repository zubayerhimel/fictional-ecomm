import React from "react";
import { ReactComponent as ShoppingIcon } from "../../img/shopping-bag.svg";
import { connect } from "react-redux";
import { ToggleCartHidden } from "../redux/cart/CartActions";
import { selectCartItemsCount } from "../redux/cart/CartSelector";
import { createStructuredSelector } from "reselect";
import "./CartIconStyles.scss";

const CartIcon = ({ ToggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={ToggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
