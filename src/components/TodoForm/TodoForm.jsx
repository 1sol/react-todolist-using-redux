import React from "react";
import PropTypes from "prop-types";
import "./TodoForm.css";

const TodoForm = ({ items, handleClickDelete }) => {
  return (
    <div className="todo-item">
      <ul>
        <li>{items}</li>
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
  handleClickDelete: PropTypes.func,
};

export default TodoForm;
