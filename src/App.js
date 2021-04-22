import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Logo from "./components/Logo"
import ShoppingCart from "./components/ShoppingCart"

import "./static/scss/main.scss"

const App = ({ route }) => {
  return (
    <div className="app">
      <div className="app-inner">
        <header className="py-1 header">
          <div className="container">
            <div className="d-flex px-1 justify-content-between align-items-center">
              <Logo />
              <ShoppingCart />
            </div>
          </div>
        </header>
        <main>
          {renderRoutes(route.routes)}
        </main>
        <footer>

        </footer>
      </div>
    </div >
  )
}

function loadData(store) {
  return null
}

export default {
  loadData,
  component: withRouter(App)
};
