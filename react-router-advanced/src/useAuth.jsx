import { useState } from "react";

// Simple hook to simulate authentication
export function useAuth() {
  // toggle true/false to simulate login status
  const [user] = useState({ isAuthenticated: true });
  return user;
}