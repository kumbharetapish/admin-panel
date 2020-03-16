import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { productsReducer } from "./Store/Reducer/Reducer";

const logger = store => {
  return next => {
    return action => {
      console.log("[MiddleWare ]", action);
      const result = next(action);
      console.log("[MiddleWare ] next state ", store.getState());

      return result;
    };
  };
};

const middlewares = [thunk];
const store = createStore(productsReducer, applyMiddleware(...middlewares));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
