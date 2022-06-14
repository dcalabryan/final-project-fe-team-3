import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

function Protected({ children }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (!isAuthenticated) {
    Swal.fire({
      title: "Warning!!",
      text: "You must be logged in to access this page",
      icon: "warning",
      confirmButtonText: "Ok",
    });
    return <Navigate to={`/login`} />;
  }
  return children;
}

export default Protected;
