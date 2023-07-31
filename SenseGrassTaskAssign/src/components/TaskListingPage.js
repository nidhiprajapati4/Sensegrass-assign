import React from "react";
import "./Task.css";

const TaskListingPage = ({ tasks, handleDelete, handleEdit }) => {
  return (
    <div className="list-of-task">
      <h2>List of Tasks</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th> &nbsp;&nbsp;
            <th>Description</th> &nbsp;&nbsp;
            <th>Due Date</th> &nbsp;&nbsp;
            <th>Status</th> &nbsp;&nbsp;
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td> &nbsp;&nbsp;
              <td>{task.description}</td> &nbsp;&nbsp;
              <td>{task.dueDate}</td> &nbsp;&nbsp;
              <td>{task.status}</td> &nbsp;&nbsp;
              <td className="button">
                <button onClick={() => handleEdit(task.id)}>Edit</button>
                &nbsp;&nbsp;
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskListingPage;
