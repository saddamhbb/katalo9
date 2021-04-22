import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import axios from "axios";
import { loadableReady } from "@loadable/component";

import Routes from "./routes";
import reducers from "./store/reducers";

const api = axios.create({
  baseURL: "/api"
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(api)))
);

loadableReady(() => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <>{renderRoutes(Routes)}</>
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
})
