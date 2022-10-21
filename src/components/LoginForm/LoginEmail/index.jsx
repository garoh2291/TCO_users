import { Form, Input } from "antd";
import React from "react";

export const LoginEmail = () => {
  return (
    <Form.Item
      name={"email"}
      label={"Email"}
      rules={[
        { required: true, message: "Please enter your email" },
        { type: "email", message: "Please enter valid email" },
      ]}
      hasFeedback
    >
      <Input placeholder="Type Your email" />
    </Form.Item>
  );
};
