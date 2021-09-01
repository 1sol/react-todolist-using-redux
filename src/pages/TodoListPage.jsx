import TodoForm from "src/components/TodoForm";
import { todoListItem } from "./configs";

const TodoListPage = ({}) => {
  return (
    <div className="container">
      <div className="inner">
        <TodoForm items={todoListItem.map((item) => item)} />
      </div>
    </div>
  );
};

export default TodoListPage;
