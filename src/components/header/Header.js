import React from "react";
import { Layout } from "antd";

import logo from "../../img/continuance_logo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <Layout.Header>
      <a
        href="https://www.continuancepictures.com/"
        rel="noopener noreferrer"
        target="_blank"
        className="logo-link"
      >
        <img src={logo} alt="continuance-logo" className="logo" />
      </a>
    </Layout.Header>
  );
};

export default Header;
