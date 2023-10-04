import React from "react";
import { Route, Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase"; 
function PrivateRoute({ element, ...rest }) {
  const user = auth.currentUser; 

  return user ? element : <Navigate to="/login" />;
}

export default PrivateRoute;
