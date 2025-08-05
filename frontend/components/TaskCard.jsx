import React from "react";

const TaskCard = ({ task, onDelete, onToggleStatus, onEdit }) => {
  return (
    <div className="border border-gray-300 bg-white p-4 rounded-md shadow-sm">
      <p className="mb-1">
        <span className="font-semibold">Title: </span>
        <span className="ml-2">{task.title}</span>
      </p>
      <p className="mb-1">
        <span className="font-semibold">Description: </span>
        <span className="ml-2">{task.description}</span>
      </p>
      <p className="mb-1">
        <span className="font-semibold">Status: </span>
        <span className="ml-2">{task.status}</span>
      </p>
      {task.dueDate && (
        <p className="mb-3">
          <span className="font-semibold">Due: </span>
          <span className="ml-2">
            {new Date(task.dueDate).toLocaleDateString()}
          </span>
        </p>
      )}
      <div className="flex space-x-3">
        <button
          onClick={onToggleStatus}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
        >
          Mark as {task.status === "Pending" ? "Completed" : "Pending"}
        </button>
        <button
          onClick={onEdit}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2  bg-black text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
