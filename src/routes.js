/* eslint-disable react/display-name */
import React from "react";
import App from "./App";
import Catalogue from "./pages/Catalogue";

export default [
  {
    ...App,
    routes: [
      {
        ...Catalogue,
        path: "/",
        exact: true
      },
      // Not Found Page
      // {
      //   ...NotFound
      // }
    ]
  }
];
