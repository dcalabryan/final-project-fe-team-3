import { combineReducers } from "redux";

import carReducer from "./carReducer";
import authReducer from "./authReducer";

export default combineReducers({
  car: carReducer,
  auth: authReducer,
});
