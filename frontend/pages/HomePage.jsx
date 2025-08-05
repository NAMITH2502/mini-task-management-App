import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-white text-gray-800 font-sans">
      <header className="w-full bg-gradient-to-r from-green-400 to-blue-500 py-24 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to the To-Do App
          </h1>
          <p className="text-2xl max-w-3xl mx-auto">
            Stay organized, boost productivity, and accomplish more with less
            stress.
          </p>
          <div className="mt-8 space-x-4">
            <Link
              to="/register"
              className="bg-white text-blue-400 px-6 py-3 rounded-lg text-lg font-medium shadow hover:bg-gray-100"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="border border-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-blue-600"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Why Use a To-Do App?</h2>
            <p className="text-xl text-gray-700">
              Our lives are busy. From daily chores to big goals — keeping track
              of everything can be overwhelming. The To-Do App brings
              simplicity, structure, and clarity so you never miss a beat.
            </p>
          </div>
          <div className="h-64 bg-blue rounded-lg">
            <img src="../images/todo.jpg" alt="" className="h-80 w-100" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="h-64 bg-gray rounded-lg order-2 md:order-1">
            <img src="../images/features.jpg" alt="" className="h-64" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-4">
              Features That Empower You
            </h2>
            <ul className="text-xl text-gray-700 space-y-3 list-disc list-inside">
              <li>Create, edit, and delete tasks</li>
              <li>Set due dates and get reminded</li>
              <li>Track progress visually</li>
              <li>Secure login for your privacy</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Get More Done, Feel Less Overwhelmed
          </h2>
          <p className="text-xl text-gray-700 py-4 mb-6">
            With a system that works for you, not against you, the To-Do App
            lets you focus on what matters — while we handle the rest.
          </p>
          <Link
            to="/register"
            className="bg-blue-600 text-white px-8 py-5 rounded-lg text-lg font-semibold hover:bg-blue-700"
          >
            Create Your Free Account
          </Link>
        </div>
      </section>

      <footer className="bg-black  text-center py-6 border-t">
        <p className="text-white text-sm">
          © {new Date().getFullYear()} To-Do App. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
