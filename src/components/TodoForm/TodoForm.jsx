import React from "react";
import PropTypes from "prop-types";
import "./TodoForm.css";

const TodoForm = ({ items, doneState, handleClickDelete }) => {
  return (
    <div className="todo-item">
      <ul>
        <li className={doneState ? "todo-done" : ""}>{items}</li>
      </ul>
      <div className="btn-wrap">
        <button onClick={handleClickDelete} className="btn-delete">
          삭제
        </button>
      </div>
    </div>
  );
};

TodoForm.propType = {
  items: PropTypes.string,
  doneState: PropTypes.any,
  handleClickDelete: PropTypes.func,
};

export default TodoForm;
