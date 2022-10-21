import { Form, Input } from "antd";

import React from "react";

export const User = () => {
  return (
    <Form.Item
      name={"userName"}
      label={"User Name"}
      rules={[
        {
          required: true,
          message: "Please enter your username",
        },
        { whitespace: true },
        { min: 3 },
      ]}
      hasFeedback
    >
      <Input placeholder="Type your Username" />
    </Form.Item>
  );
};
