import React from "react";
import {
  List,
  ListItem,
  Button,
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TaskList = ({ tasks, deleteTask, toggleCompletion, editTask }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "#ffcccc";
      case "Medium":
        return "#fff3cd";
      case "Low":
        return "#d4edda";
      default:
        return "#e0e0e0";
    }
  };

  const getPriorityTextColor = (priority) => {
    switch (priority) {
      case "High":
        return "#a70000";
      case "Medium":
        return "#856404";
      case "Low":
        return "#155724";
      default:
        return "#000000";
    }
  };

  return (
    <List>
      <Typography
        variant="h6"
        style={{
          marginBottom: "10px",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "1.5px",
        }}
      >
        Tasks
      </Typography>
      <TransitionGroup>
        {tasks.map((task) => (
          <CSSTransition key={task.id} timeout={500} classNames="task">
            <ListItem>
              <Card
                style={{
                  backgroundColor: getPriorityColor(task.priority),
                  color: getPriorityTextColor(task.priority),
                  width: "100%",
                }}
              >
                <CardContent>
                  <Typography
                    variant="body1"
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                      color: task.completed ? "gray" : "inherit",
                    }}
                  >
                    {task.title}
                  </Typography>
                  <Typography variant="body2">
                    Category: {task.category}
                  </Typography>
                  {task.dueDate && (
                    <Typography variant="body2">
                      Due Date: {new Date(task.dueDate).toLocaleDateString()}
                    </Typography>
                  )}
                  <Chip
                    label={task.priority}
                    size="small"
                    style={{ marginTop: "10px" }}
                  />
                  <div style={{ marginTop: "10px" }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<CheckIcon />}
                      onClick={() => toggleCompletion(task.id)}
                      style={{ marginRight: "5px" }}
                    >
                      {task.completed ? "Unmark" : "Complete"}
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => editTask(task)}
                      style={{ marginRight: "5px" }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ListItem>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </List>
  );
};

export default TaskList;
