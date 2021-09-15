import { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./pages/todolist/TodoListPage";
import "./styles/styles.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
