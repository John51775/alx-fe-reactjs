import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const isAuthenticated = true; // toggle this to false to test protection

  return (
    <Router>
      <Routes>
        {/* Protected route for Profile */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic route for BlogPost */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
