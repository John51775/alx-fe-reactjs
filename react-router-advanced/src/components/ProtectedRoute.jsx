import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAuthenticated, children }) {
  // If the user is NOT authenticated, redirect to a login page or home
  if (!isAuthenticated) {
    return <Navigate to="/" />; // you can change "/" to a /login route later
  }
  // If authenticated, render the child component
  return children;
}

export default ProtectedRoute;