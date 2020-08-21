import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./RootReducer";

const middleWares = [];
if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middleWares));
export const persistor = persistStore(store);

export default { store, persistor };
