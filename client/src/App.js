import Dashboard from './pages/Dashboard';
import Login from './pages/login';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import SignUp from './pages/SignUp';
import ProtectedRoute from './protected_routes/protected_route';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';

function App() {
  const { user, login, logout, isAuthenticated } = useContext(AuthContext);
  return (

    <Router>
      <Routes>
        <Route path="/" element={< Login />} ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router >


  );
}
export default App;
