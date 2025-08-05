import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const CreateTaskPage = () => {
  const [form, setForm] = useState({ title: "", description: "", dueDate: "" });
  const navigate = useNavigate();

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createTask = async (e) => {
    e.preventDefault();
    await API.post("/tasks/create", form);
    navigate("/tasks");
  };

  return (
    <div className="max-w-3xl mx-auto mt-30 p-3 rounded shadow">
      <h2 className="text-3xl font-bold mb-6 text-center">Create Task</h2>
      <form onSubmit={createTask} className="mb-6 space-y-2">
        <input
          name="title"
          value={form.title}
          onChange={handleInput}
          placeholder="Title"
          required
          className="input w-100 pl-15 pr-6 py-2 mb-4 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        <input
          name="description"
          value={form.description}
          onChange={handleInput}
          placeholder="Description"
          className="input w-100 pl-15 pr-6 py-2 mb-4 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        <input
          name="dueDate"
          type="date"
          value={form.dueDate}
          onChange={handleInput}
          className="input w-100 pl-15 mb-6 pr-6 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out cursor-pointer"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskPage;
