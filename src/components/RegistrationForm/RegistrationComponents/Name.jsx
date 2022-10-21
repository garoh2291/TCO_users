import { Form, Input } from "antd";
import React from "react";

export const Name = () => {
  return (
    <Form.Item
      name={"fullName"}
      label={"Full Name"}
      rules={[
        {
          required: true,
          message: "Please enter your Full name",
        },
        { whitespace: true },
        { min: 3 },
      ]}
      hasFeedback
    >
      <Input placeholder="Type your name" />
    </Form.Item>
  );
};
