import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Pagenotfound from "./components/pageNotFound/Pagenotfound";

import Stroies from "./components/stories/Stroies";
import Sports from "./components/sports/Sports";
import Science from "./components/science/Science";
import Environment from "./components/environment/Environment";
import Technology from "./components/technology/Technology";
import Entertainment from "./components/entertainment/Entertainment";

const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/stroies",
    Component: Stroies,
  },
  {
    path: "/sports",
    Component: Sports,
  },
  {
    path: "/science",
    Component: Science,
  },
  {
    path: "/environment",
    Component: Environment,
  },
  {
    path: "/technology",
    Component: Technology,
  },
  {
    path: "/entertainment",
    Component: Entertainment,
  },
  {
    path: "*",
    Component: Pagenotfound,
  },
];

export const AllRoutes = () => (
  <Routes>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={<route.Component />}
      ></Route>
    ))}
  </Routes>
);
