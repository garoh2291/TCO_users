import { Form, Input } from "antd";
import React from "react";

export const LoginPass = () => {
  return (
    <Form.Item
      name="password"
      label="Password"
      rules={[
        {
          required: true,
        },
      ]}
      hasFeedback
    >
      <Input.Password placeholder="Type your password" />
    </Form.Item>
  );
};
