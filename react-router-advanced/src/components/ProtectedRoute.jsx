// import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const useAuth = () => {
  const user = { loggedIn: true }; // Simulate authenticated user
  return user && user.loggedIn;
};

const ProtectedRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
