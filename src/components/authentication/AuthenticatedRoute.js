import React from "react";
import { Redirect, Route } from "react-router-dom";

const AuthenticatedRoute = ({ children, loggedIn, ...rest }) => {
  if (!loggedIn) {
    return <Redirect to={{ pathname: "/login" }} />;
  }
  return <Route {...rest} render={() => children} />;
};

export default AuthenticatedRoute;
