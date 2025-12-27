import React from "react";
import { Navigate } from "react-router-dom";

const isLogged = () => {
  const user = localStorage.getItem("user");
  return Boolean(user);
};

export const ProtectedRoute = ({ children }) => {
  if (!isLogged()) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;
