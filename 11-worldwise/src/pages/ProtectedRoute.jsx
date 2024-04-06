import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );
  // The application crashes here because it gets rendered before useEffect gets executed
  // So the children components gets rendered in between and that crashes the application

  return isAuthenticated ? children : null;
  // Hence we should only renturn the children if the user is authenticated and otherwise should return null
}

export default ProtectedRoute;
