import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import shortid from "shortid";
import { Checkbox, TodoForm } from "components";
import {
  addTodoList,
  toggleTodoList,
  deleteTodoList,
} from "../../store/todoSlice";

const TodoListPage = () => {
  const dispatch = useDispatch();
  const [addTitle, setAddTitle] = useState("");

  const todos = useSelector((state) => {
    return state.todos;
  });

  const handleClickAdd = (text) => {
    dispatch(addTodoList(text));
    setAddTitle("");
  };

  const handleChangeChecked = (id) => {
    dispatch(toggleTodoList(id));
  };

  const handleClickDelete = (id) => {
    dispatch(deleteTodoList(id));
  };

  const handleChangeAddTitle = (e) => {
    setAddTitle(e.target.value);
  };

  return (
    <div className="container">
      <div className="inner">
        <h1 className="title">Todo List</h1>
        <div className="todo-add">
          <input type="text" value={addTitle} onChange={handleChangeAddTitle} />
          <button onClick={() => handleClickAdd(addTitle)} className="btn-add">
            추가
          </button>
        </div>

        <div className="todo-list">
          {todos.map((item) => (
            <div key={shortid.generate()} className="list">
              <Checkbox
                isChecked={item.checked}
                onChangeChecked={() => handleChangeChecked(item.id)}
              />
              <TodoForm
                items={item.title}
                handleClickDelete={() => handleClickDelete(item.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoListPage;
