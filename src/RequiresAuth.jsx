import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
// import LoginForm from "./Login";

const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const { isUserLoggedIn } = useAuth();

  return (
    <div>
      {isUserLoggedIn ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </div>
  );
};

export default RequiresAuth;
