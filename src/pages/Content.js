import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import Sidebar from "../components/sidebar/Sidebar";
import New from "./contacts/New";
import List from "./contacts/List";
import Search from "./contacts/Search";
import View from "./contacts/View";

import "./Content.css";

const ContentSwitch = () => {
  return (
    <Switch>
      <Route exact path="/contacts/new" component={New} />
      <Route exact path="/contacts" component={List} />
      <Route exact path="/contacts/search" component={Search} />
      <Route exact path="/contacts/:id" component={View} />
    </Switch>
  );
};

const Content = () => {
  return (
    <Layout>
      <Sidebar />

      <Layout className="content-layout">
        <Layout.Content className="content-body">
          <ContentSwitch />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default Content;
