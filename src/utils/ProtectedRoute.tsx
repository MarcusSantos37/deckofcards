import { useUser } from "context/UserContext";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useUser();
  if (user.length === 0) {
    return <Navigate to="/" replace />;
  }

  return children;
};
