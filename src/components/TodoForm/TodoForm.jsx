import React from "react";
import PropTypes from "prop-types";

const TodoForm = ({ items, onChangeChecked }) => {
  return (
    <div className="todo-list">
      <h1 className="title">Todo List</h1>
      <div className="list">
        <ul>
          {items.map((item) => (
            <>
              <checkbox onChange={onChangeChecked} />
              <li>{item}</li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

TodoForm.propType = {
  items: PropTypes.any,
  onChangeChecked: PropTypes.func,
};

export default TodoForm;
