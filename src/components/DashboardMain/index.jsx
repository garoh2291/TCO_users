import React from "react";
import { getFakeDb } from "../../helpers/fakeDb";
import { getFakeToken } from "../../helpers/fakeToken";

const dashboardMainStyles = {
  width: "100%",
  height: "80%",
  padding: "40px auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Dashboard = () => {
  const { db } = getFakeDb();
  const loggedUser = db.find((user) => user.email === getFakeToken());
  const { fullName } = loggedUser;

  return (
    <div style={dashboardMainStyles}>
      <h2>{`Hello ${fullName}`}</h2>
    </div>
  );
};
