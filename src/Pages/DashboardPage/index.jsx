import React from "react";
import { Dashboard } from "../../components/DashboardMain";
import { LogOut } from "../../components/UserLogout";

const DashboardStyles = {
  width: "100%",
  height: "100%",
};

export const DashboardPage = () => {
  return (
    <div style={DashboardStyles}>
      <LogOut />
      <Dashboard />
    </div>
  );
};
