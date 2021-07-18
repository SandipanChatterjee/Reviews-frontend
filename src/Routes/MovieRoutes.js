import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { LoadingSpinner } from "../utils";

const fallbackComponent = () => {
  return (
    <span
      style={{
        position: "absolute",
        left: "48%",
        top: "45%",
      }}
    >
      <LoadingSpinner />
    </span>
  );
};
const MovieMaster = React.lazy(() => import("../Movie/MovieMaster"));

export const MovieRoutes = () => {
  return (
    <React.Suspense fallback={fallbackComponent}>
      <Switch>
        <Route path="/home/movie" exact component={MovieMaster} />
        <Redirect from="/home/movie" to="/home/movie" />
      </Switch>
    </React.Suspense>
  );
};
