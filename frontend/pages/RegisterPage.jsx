import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const RegisterPage = () => {
  const navigate = useNavigate();

  const registerSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(6).required("Password is required"),
  });

  const handleRegister = async (values, { setSubmitting }) => {
    try {
      await API.post("/users/register", values);
      toast.success("Registered successfully! Please log in.");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.error || "Registration failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="max-w-md mx-auto my-30 bg-white p-6 rounded-xl 
        shadow-lg space-y-6 border border-gray-200"
    >
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={registerSchema}
        onSubmit={handleRegister}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div className="relative">
              <FaUser className="absolute transform -translate-x-2.5 top-3 left-3 text-gray-400" />
              <Field
                name="username"
                className="input w-full pl-12 pr-6 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute transform -translate-x-2.5 top-3 left-3 text-gray-400" />
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
              <FaLock className="absolute transform -translate-x-2.5 top-3 left-3 text-gray-400" />
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
              className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out cursor-pointer"
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterPage;
