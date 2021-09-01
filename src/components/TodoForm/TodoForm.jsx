import React from "react";
import PropTypes from "prop-types";
import Checkbox from "src/components/Checkbox";

const TodoForm = ({ items }) => {
  return (
    <div className="todo-list">
      <h1 className="title">Todo List</h1>
      <div className="list">
        <ul>
          {items.map((item) => (
            <>
              <Checkbox />
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
};

export default TodoForm;
