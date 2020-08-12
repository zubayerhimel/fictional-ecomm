import { combineReducers } from "redux";
import userReducer from "./user/UserReducer";
import cartReducer from "./cart/CartReducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
