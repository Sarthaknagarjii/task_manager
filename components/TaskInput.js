import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

const TaskInput = ({ addTask, editTask, task }) => {
  const [taskTitle, setTaskTitle] = useState(task ? task.title : "");
  const [taskCategory, setTaskCategory] = useState(
    task ? task.category : "General"
  );
  const [taskPriority, setTaskPriority] = useState(
    task ? task.priority : "Low"
  );
  const [dueDate, setDueDate] = useState(task ? task.dueDate : "");
  const [taskTime, setTaskTime] = useState(task ? task.taskTime : "");

  const handleSubmit = () => {
    if (!taskTitle) return;

    const newTask = {
      id: task ? task.id : Date.now(),
      title: taskTitle,
      category: taskCategory,
      priority: taskPriority,
      dueDate: dueDate || null,
      taskTime: taskTime || null,
      completed: task ? task.completed : false,
    };

    if (task) {
      editTask(newTask);
    } else {
      addTask(newTask);
    }
    resetForm();
  };

  const resetForm = () => {
    setTaskTitle("");
    setTaskCategory("General");
    setTaskPriority("Low");
    setDueDate("");
    setTaskTime("");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          {task ? "Edit Task" : "Add New Task"}
        </Typography>
        <TextField
          label="Task Title"
          variant="outlined"
          fullWidth
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter task title"
          style={{ marginTop: "8px" }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Category</InputLabel>
          <Select
            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value)}
            label="Category"
            style={{ marginTop: "8px" }}
          >
            <MenuItem value="General">General</MenuItem>
            <MenuItem value="Work">Work</MenuItem>
            <MenuItem value="Personal">Personal</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Priority</InputLabel>
          <Select
            value={taskPriority}
            onChange={(e) => setTaskPriority(e.target.value)}
            label="Priority"
            style={{ marginTop: "8px" }}
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Due Date"
          type="date"
          fullWidth
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginTop: "8px" }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Task Time"
          type="time"
          fullWidth
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginTop: "8px" }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
          style={{ marginTop: "8px" }}
        >
          {task ? "Save Changes" : "Add Task"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default TaskInput;
