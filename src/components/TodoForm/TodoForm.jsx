import React from "react";
import PropTypes from "prop-types";
import "./TodoForm.css";

const TodoForm = ({ items, handleClickUpdate, handleClickDelete }) => {
  return (
    <div className="todo-item">
      <ul>
        <li>{items}</li>
      </ul>
      <div className="btn-wrap">
        <button onClick={handleClickUpdate} className="btn-update">
          수정
        </button>
        <button onClick={() => handleClickDelete()}>삭제</button>
      </div>
    </div>
  );
};

TodoForm.propType = {
  items: PropTypes.any,
  handleClickUpdate: PropTypes.func,
  handleClickDelete: PropTypes.func,
};

export default TodoForm;
