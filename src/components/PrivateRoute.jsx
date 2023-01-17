import React from "react";

import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const isSignin = false;

  return isSignin ? <Outlet /> : <Navigate to="/signin" />;
}
