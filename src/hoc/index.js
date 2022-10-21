import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export const RequaireAuth = ({ children }) => {
  const location = useLocation();
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  }

  return children;
};

export const RequaireLogOut = ({ children }) => {
  const location = useLocation();
  const { isAuth } = useAuth();

  if (!!isAuth) {
    return <Navigate to={"/"} state={{ from: location }} />;
  }

  return children;
};
