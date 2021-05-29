import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import MovieMaster from "../Movie/MovieMaster";
import { DashboardRoutes } from "./DashboardRoutes";
import { MovieRoutes } from "./MovieRoutes";

export const RootRoutes = () => {
  return (
    <Switch>
      <Route path="/home/movie" component={MovieMaster}>
        {MovieRoutes}
      </Route>
      <Route path="/home" component={Dashboard}>
        {DashboardRoutes}
      </Route>
      <Redirect to="/home" from="/" />
    </Switch>
  );
};
