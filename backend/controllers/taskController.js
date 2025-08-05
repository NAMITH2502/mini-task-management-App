const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  const { status } = req.query;
  const filter = { user: req.user.userId };
  if (status) filter.status = status;

  const tasks = await Task.find(filter).sort({ createdAt: -1 });
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const { title, description, dueDate } = req.body;
  const task = await Task.create({
    title,
    description,
    dueDate,
    user: req.user.userId,
  });
  res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const updated = await Task.findOneAndUpdate(
    { _id: id, user: req.user.userId },
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findOneAndDelete({ _id: id, user: req.user.userId });
  res.json({ message: "Task deleted" });
};
