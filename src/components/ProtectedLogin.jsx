import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

function ProtectedLogin({ children }) {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    Swal.fire({
      title: "Warning!!",
      text: "You already logged in, please logout first",
      icon: "warning",
      confirmButtonText: "Ok",
    });

    return <Navigate to={`/cars`} />;
  }

  return children;
}

export default ProtectedLogin;
