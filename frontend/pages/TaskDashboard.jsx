import React, { useEffect, useState } from "react";
import API from "../services/api";
import TaskCard from "../components/TaskCard";

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [editingTask, setEditingTask] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/delete/${id}`);
    fetchTasks();
  };

  const toggleStatus = async (task) => {
    await API.put(`/tasks/update/${task._id}`, {
      status: task.status === "Pending" ? "Completed" : "Pending",
    });
    fetchTasks();
  };

  const handleEditInput = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const startEdit = (task) => {
    setEditingTask(task._id);
    setEditForm({
      title: task.title,
      description: task.description,
      dueDate: task.dueDate ? task.dueDate.split("T")[0] : "",
    });
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setEditForm({ title: "", description: "", dueDate: "" });
  };

  const updateTask = async (e) => {
    e.preventDefault();
    await API.put(`/tasks/update/${editingTask}`, editForm);
    setEditingTask(null);
    fetchTasks();
  };

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.status === filter);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-20 p-3 rounded shadow">
      <h2 className="text-3xl font-bold mb-6 text-center">My Tasks</h2>
      <div className="mb-4 space-x-6">
        {["All", "Pending", "Completed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded cursor-pointer ${
              filter === status
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {editingTask && (
        <form onSubmit={updateTask} className="mb-6 space-y-2">
          <input
            name="title"
            value={editForm.title}
            onChange={handleEditInput}
            placeholder="Title"
            required
            className="input w-100 pl-15 pr-6 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          <input
            name="description"
            value={editForm.description}
            onChange={handleEditInput}
            placeholder="Description"
            className="input w-100 pl-15 pr-6 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          <input
            name="dueDate"
            type="date"
            value={editForm.dueDate}
            onChange={handleEditInput}
            className="input w-100 pl-15 pr-6 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          <div className="flex space-x-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
            >
              Update Task
            </button>
            <button
              type="button"
              onClick={cancelEdit}
              className="w-full bg-gray-400 text-white font-bold py-2 px-4 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500">No tasks found.</p>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onDelete={() => deleteTask(task._id)}
              onToggleStatus={() => toggleStatus(task)}
              onEdit={() => startEdit(task)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskDashboard;
