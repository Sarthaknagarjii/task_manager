import React, { useState, useEffect } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import {
  Container,
  Grid,
  Card,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setOpenDialog(false);
  };

  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setOpenDialog(false);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const toggleCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // Filtered and Sorted Tasks
  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "priority") {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      } else if (sortOption === "dueDate") {
        return new Date(a.dueDate) - new Date(b.dueDate);
      } else {
        return tasks;
      }
    });

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Search Tasks"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by task title"
            style={{ marginBottom: "15px" }}
          />
          <FormControl
            fullWidth
            variant="outlined"
            style={{ marginBottom: "15px" }}
          >
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              label="Sort By"
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="priority">Priority</MenuItem>
              <MenuItem value="dueDate">Due Date</MenuItem>
            </Select>
          </FormControl>
          <Card style={{ marginBottom: "20px", padding: "20px" }}>
            <TaskList
              tasks={filteredTasks}
              deleteTask={deleteTask}
              toggleCompletion={toggleCompletion}
              editTask={(task) => {
                setCurrentTask(task);
                setIsEditing(true);
                setOpenDialog(true);
              }}
            />
          </Card>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setIsEditing(false);
              setOpenDialog(true);
            }}
            style={{ position: "fixed", bottom: "20px", right: "20px" }}
          >
            Add Task
          </Button>
          <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            <DialogContent>
              <TaskInput
                addTask={addTask}
                editTask={editTask}
                task={isEditing ? currentTask : null}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenDialog(false)} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
