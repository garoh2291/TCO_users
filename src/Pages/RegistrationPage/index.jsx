import React from "react";
import { Registration } from "../../components/Registration";

const RegistrationPageStyles = {
  width: "100%",
  height: "100%",
};

export const RegistrationPage = () => {
  return (
    <div style={RegistrationPageStyles}>
      <Registration />
    </div>
  );
};
