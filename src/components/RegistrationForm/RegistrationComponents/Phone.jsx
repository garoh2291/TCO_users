import { Form, Input, Select } from "antd";
import React from "react";

const { Option } = Select;

const prefixSelector = (
  <Form.Item noStyle name={"countryCode"} initialValue={"374"}>
    <Select
      style={{
        width: 80,
      }}
      rules={[
        {
          required: true,
          message: "Please input your country code!",
        },
      ]}
      disabled
    >
      <Option value="374">+374</Option>
    </Select>
  </Form.Item>
);

export const Phone = () => {
  const checkPrice = (_, value) => {
    if (/^[0-9]*$/.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Please input only numbers!"));
  };
  return (
    <Form.Item
      name="phone"
      label="Phone Number"
      rules={[
        {
          required: true,
          validator: checkPrice,
        },
        { min: 8 },
        { max: 8 },
      ]}
    >
      <Input
        addonBefore={prefixSelector}
        style={{
          width: "100%",
        }}
      />
    </Form.Item>
  );
};
