import React from "react";
import App from "./App";
import Catalogue from "./pages/Catalogue";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

export default [
  {
    ...App,
    routes: [
      {
        ...Catalogue,
        path: "/",
        exact: true
      },
      {
        ...ProductDetail,
        path: "/detail-:product-:id",
        exact: true
      },
      // Not Found Page
      {
        ...NotFound
      }
    ]
  }
];
