import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ResetPassword from "../Auth/ResetPassword/ResetPassword";
import { PrivateRoutes } from "../PrivateRoutes";
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

const WatchList = React.lazy(() => import("../User/WatchList"));
const Rating = React.lazy(() => import("../User/Rating"));
const Dashboard = React.lazy(() => import("../Dashboard/Dashboard"));

export const DashboardRoutes = () => (
  <React.Suspense fallback={fallbackComponent}>
    <Switch>
      <PrivateRoutes path="/home/watchlist" exact component={WatchList} />
      <PrivateRoutes path="/home/rating" exact component={Rating} />
      <Route path="/home" exact component={Dashboard} />
      <Route
        path="/api/v1/auth/resetpassword/:resettoken"
        component={ResetPassword}
      />
      <Redirect from="/" to="/home" />
    </Switch>
  </React.Suspense>
);
