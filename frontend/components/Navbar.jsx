import { Link } from "react-router-dom";
import { useAuth } from "../src/context/AuthContext";
import React from "react";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-white-200 text-black px-6 py-6 flex justify-between items-center border-b border-gray-200 shadow-sm">
      <Link to="/" className="text-xl font-bold flex items-center space-x-2">
        <img
          src="../images/logo2.jpg"
          alt="Logo"
          className="object-cover bg-green-500 h-12 w-40"
        />
        <span className="font-montserrat text-4xl"></span>
      </Link>
      <div className="space-x-4">
        {!isAuthenticated ? (
          <>
            <Link
              to="/login"
              className="relative ml-2 inline-flex  items-center gap-x-1.5 rounded-md bg-green-600 px-4 py-4 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 animate-bounce"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="relative inline-flex items-center  gap-x-1.5 rounded-md bg-pink-600 px-4 py-4 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/tasks"
              className="relative ml-2 inline-flex  items-center gap-x-1.5 rounded-md bg-green-600 px-4 py-4 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 animate-bounce"
            >
              Dashboard
            </Link>
            <Link
              to="/create"
              className="relative ml-2 inline-flex items-center gap-x-1.5 rounded-md bg-yellow-500 px-4 py-4 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600"
            >
              Add Task
            </Link>
            <button
              onClick={logout}
              className="relative inline-flex items-center gap-x-1.5 rounded-md bg-pink-600 px-4 py-4 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
