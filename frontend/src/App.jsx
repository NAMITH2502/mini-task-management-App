import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TaskDashboard from "../pages/TaskDashboard";
import CreateTaskPage from "../pages/CreateTaskPage";
import { AuthProvider, useAuth } from "../src/context/AuthContext";
import "react-toastify/dist/ReactToastify.css";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => (
  <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/create"
          element={
            <PrivateRoute>
              <CreateTaskPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute>
              <TaskDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  </AuthProvider>
);

export default App;
