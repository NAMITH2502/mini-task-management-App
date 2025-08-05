import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { useAuth } from "../src/context/AuthContext";
import { FaEnvelope, FaLock } from "react-icons/fa";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required("Email required"),
    password: Yup.string().required("Password required"),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const res = await API.post("/users/login", values);
      login(res.data.token);
      toast.success("Login successful!");
      navigate("/tasks");
    } catch (err) {
      toast.error(err.response?.data?.error || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="max-w-md mx-auto my-30 bg-white p-6 rounded-xl 
        shadow-lg space-y-6 border border-gray-200"
    >
      <h2 className="text-2xl text-center font-bold mb-4">Login</h2>
      <Formik
        initialValues={{ email: "rohancs@yahoo.com", password: "rohan@2002" }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-6">
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 transform -translate-x-2.5 text-gray-400" />
              <Field
                name="email"
                type="email"
                className="input w-full pl-12 pr-6 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute top-3 left-3 transform -translate-x-2.5 text-gray-400" />
              <Field
                name="password"
                type="password"
                className="input w-full pl-12 pr-6 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
