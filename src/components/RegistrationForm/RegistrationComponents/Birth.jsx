import { DatePicker, Form } from "antd";
import React from "react";

const config = {
  rules: [
    {
      type: "object",
    },
  ],
};

export const Birth = () => {
  return (
    <Form.Item name="bDay" label="BirthDay" {...config}>
      <DatePicker />
    </Form.Item>
  );
};
