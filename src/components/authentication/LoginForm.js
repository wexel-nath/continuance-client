import React from "react";
import { Form, Icon, Input, Button } from "antd";

import "./LoginForm.css";

const TextInput = ({ icon, placeholder }) => {
  const type = placeholder === "Password" ? "password" : "text";
  return (
    <Input
      prefix={<Icon type={icon} className="prefix-icon" />}
      type={type}
      placeholder={placeholder}
    />
  );
};

const LoginForm = () => {
  return (
    <div className="login-form">
      <Form>
        <Form.Item>
          <TextInput icon="user" placeholder="Username" />
          <TextInput icon="lock" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
