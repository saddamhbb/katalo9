import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import reducers from "../store/reducers"
import { apiURL } from "../utilities/url";

export default req => {
  const api = axios.create({
    baseURL: `${apiURL()}`,
    headers: {
      cookie: req.get("cookie") || "" // For Authentication
    }
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(api))
  );

  return store;
};
