//import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers, applyMiddleware } from "redux";

import userReducer from "./userSlice";
import authReducer from "./authSlice";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;