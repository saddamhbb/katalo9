import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./static/scss/main.scss"

const App = ({ route }) => {
  return (
    <div className="app">
      <div className="app-inner">
        <Header />
        <main>
          {renderRoutes(route.routes)}
        </main>
        <Footer />
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
