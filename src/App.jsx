import React from "react";
import PropTypes from "prop-types";
// import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
// import { router } from "./router";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import { router } from "./router";

const App = (props) => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
App.propTypes = {};

export default App;
