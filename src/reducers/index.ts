import { combineReducers } from "redux";

import loadReducer from "./loadingReducer";
import todayReducer from "./todayReducer";
import errorReducer from "./todayReducer";

const rootReducer = combineReducers({
  loading: loadReducer,
  forecast: todayReducer,
  error: errorReducer
});

export default rootReducer;
