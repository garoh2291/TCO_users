import React from "react";
import { Login } from "../../components/Login";

const LoginPAgeStyles = {
  width: "100%",
  height: "100%",
};

export const LoginPage = () => {
  return (
    <div style={LoginPAgeStyles}>
      <Login />
    </div>
  );
};
