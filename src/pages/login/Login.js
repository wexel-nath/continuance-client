import React from "react";
import { Card } from "antd";

import logo from "../../img/continuance_logo.jpg";
import LoginForm from "../../components/authentication/LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-wrapper">
      <Card className="login-card">
        <img src={logo} className="login-logo" alt="continuance-logo" />
        <LoginForm />
      </Card>
    </div>
  );
};

export default Login;
