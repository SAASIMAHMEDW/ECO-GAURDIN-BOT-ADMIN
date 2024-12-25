import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./context/auth/useAuthContext";

function Start() {
  let navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();
  useEffect(() => {
    if (isAuthenticated === null) {
      navigate("/login");
    } else {
      navigate("/home");
    }
  }, []);
  return <div>Loading........</div>;
}

export default Start;
