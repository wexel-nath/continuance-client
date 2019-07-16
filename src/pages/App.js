import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import Header from "../components/header/Header";
import Login from "./login/Login";

import history from "../application/util/history";
import Content from "./Content";
import "./App.css";
import AuthenticatedRoute from "../components/authentication/AuthenticatedRoute";

const App = () => {
  return (
    <Router history={history}>
      <Layout className="layout">
        <Header />

        <Switch>
          <Route component={Login} exact path="/login" />
          <AuthenticatedRoute loggedIn={false} path="/">
            <Content />
          </AuthenticatedRoute>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
