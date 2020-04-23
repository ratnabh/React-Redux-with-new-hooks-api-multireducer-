import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
// import fetchReducer from "./vehicle.js";
import reducer from './combineReducers'
import "./index.css";
import App from "./App";
import thunk from 'redux-thunk'

// const vehicle = createStore(reducer);
const store=createStore(reducer,applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
