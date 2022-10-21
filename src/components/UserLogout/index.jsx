import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const LogOut = () => {
  const navigate = useNavigate();
  const cb = () => navigate("/login", { replace: true });

  const handleMenuClick = (e) => {
    localStorage.removeItem("fakeToken");
    cb();
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "Logout",
          key: "1",
        },
      ]}
    />
  );

  return (
    <div className="log_out_section">
      <Dropdown.Button
        overlay={menu}
        placement="bottom"
        icon={<UserOutlined />}
      ></Dropdown.Button>
    </div>
  );
};
