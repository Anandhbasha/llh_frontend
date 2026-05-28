import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const { isLoggedIn, isAdmin } =
    useSelector((state) => state.Auth);

  if (!isLoggedIn || !isAdmin) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;