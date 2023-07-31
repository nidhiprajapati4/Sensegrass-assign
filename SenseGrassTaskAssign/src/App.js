import React, { useState } from "react";
import TaskCreationPage from "./components/TaskCreationPage";
import TaskListingPage from "./components/TaskListingPage";
import TaskDetail from "./components/TaskDetail";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleCreateTask = (newTask) => {
    setTasks([
      ...tasks,
      { ...newTask, id: tasks.length + 1, status: "pending" },
    ]);
  };

  const handleEditTask = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    setSelectedTask(task);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setSelectedTask(null);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setSelectedTask(null);
  };

  return (
    <div>
      <h1>Building a Simple Task Management System</h1>
      <TaskCreationPage onSubmit={handleCreateTask} />
      <TaskListingPage
        tasks={tasks}
        handleEdit={handleEditTask}
        handleDelete={handleDeleteTask}
      />

      {selectedTask && (
        <div>
          <TaskDetail
            task={selectedTask}
            onEdit={handleUpdateTask}
            onDelete={handleDeleteTask}
          />
        </div>
      )}
    </div>
  );
};

export default App;
