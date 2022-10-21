import { Form, Input } from "antd";
import React from "react";

export const Passwords = () => {
  return (
    <>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
          },
          { min: 8 },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Type your password" />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        label="Confirm Password"
        dependencies={["password"]}
        rules={[
          {
            required: true,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password").trim() === value) {
                return Promise.resolve();
              }
              return Promise.reject("The passwords does not match.");
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Confirm your password" />
      </Form.Item>
    </>
  );
};
