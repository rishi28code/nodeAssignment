const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Task = require('../models/Task');

// Create Task
router.post('/tasks', [
  body('title').notEmpty().withMessage('Title is required')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, description } = req.body;
  try {
    const task = new Task({ title, description });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get All Tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update Task Details
router.put('/tasks/:id/details', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;

    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});


// Mark Task as Completed (true or false)
router.put('/tasks/:id/completed', async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  try {
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    // Check if completed status is provided
    if (completed === undefined) {
      return res.status(400).json({ message: 'Completion status is required' });
    }

    // Check if the task is already completed
    if (task.completed && completed) {
      return res.status(400).json({ message: 'Task is already completed' });
    }

    // Update the task's completed status
    task.completed = completed;

    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});


// Delete Task
router.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
