import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequaireAuth, RequaireLogOut } from "../hoc";
import { DashboardPage } from "../Pages/DashboardPage";
import { LoginPage } from "../Pages/LoginPage";
import { NotFoundPage } from "../Pages/NotFoundPage";
import { RegistrationPage } from "../Pages/RegistrationPage";

export const RoutesComponents = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequaireAuth>
            <DashboardPage />
          </RequaireAuth>
        }
      />
      <Route
        path="/login"
        element={
          <RequaireLogOut>
            <LoginPage />
          </RequaireLogOut>
        }
      />

      <Route
        path="/registration"
        element={
          <RequaireLogOut>
            <RegistrationPage />
          </RequaireLogOut>
        }
      />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};
