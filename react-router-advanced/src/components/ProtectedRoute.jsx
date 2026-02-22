import { Navigate } from "react-router-dom";
import { useAuth } from './useAuth'; // 

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // get auth state

  if (!isAuthenticated) {
    return <Navigate to="/" />; // redirect if not logged in
  }

  return children; // render children if authenticated
}

export default ProtectedRoute;