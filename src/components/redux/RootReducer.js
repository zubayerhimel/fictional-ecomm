import { combineReducers } from "redux";
import userReducer from "./user/UserReducer";

export default combineReducers({
  user: userReducer,
});
