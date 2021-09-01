import { Component } from "react";
import TodoList from "./pages/TodoListPage";
import "./styles/styles.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
