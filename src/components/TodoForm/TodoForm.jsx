import React from "react";
import PropTypes from "prop-types";
import "./TodoForm.css";

const TodoForm = ({
  items,
  updateMode,
  updateValue,
  onChangeUpdateText,
  handleClickSave,
  handleClickUpdateMode,
  handleClickDelete,
}) => {
  return (
    <div className="todo-item">
      {updateMode ? (
        <div>
          <input
            type="text"
            className="input"
            value={updateValue}
            onChange={onChangeUpdateText}
          />
          <button onClick={handleClickUpdateMode}>취소</button>
          <button onClick={handleClickSave} className="btn-save">
            저장
          </button>
        </div>
      ) : (
        <>
          <ul>
            <li>{items}</li>
          </ul>
          <div className="btn-wrap">
            <button onClick={handleClickUpdateMode}>수정</button>
            <button onClick={handleClickDelete} className="btn-delete">
              삭제
            </button>
          </div>
        </>
      )}
    </div>
  );
};

TodoForm.propType = {
  items: PropTypes.any,
  updateMode: PropTypes.bool,
  updateValue: PropTypes.string,
  onChangeUpdateText: PropTypes.func,
  handleClickUpdateMode: PropTypes.bool,
  handleClickCancel: PropTypes.func,
  handleClickSave: PropTypes.func,
  handleClickDelete: PropTypes.func,
};

export default TodoForm;
