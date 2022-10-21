import { Button, Form, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../helpers/functions";
import { LoginEmail } from "./LoginEmail";
import { LoginPass } from "./LoginPass";
import "./styles.css";

export const LoginForm = () => {
  const navigate = useNavigate();
  const cb = () => navigate("/", { replace: true });
  const { Title } = Typography;

  const loginHandler = (event) => {
    const { email, password } = event;
    const formData = {
      email: email.toLowerCase(),
      password: password.trim(),
    };

    logIn(formData, cb);
  };

  return (
    <div className="login_page_container">
      <Title level={2}>Login</Title>
      <Form
        autoComplete="off"
        labelCol={{ span: 10 }}
        labelAlign={"left"}
        wrapperCol={{ span: 18 }}
        onFinish={loginHandler}
        onFinishFailed={(error) => {
          console.log({ error });
        }}
      >
        <LoginEmail />
        <LoginPass />
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button block type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
