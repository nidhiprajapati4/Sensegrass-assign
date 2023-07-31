import React, { useState } from "react";
import "./Task.css";

const TaskCreationPage = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, dueDate });
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <div className="create-task">
      <h2>Create a Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Task Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Description:
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Due Date:
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default TaskCreationPage;
