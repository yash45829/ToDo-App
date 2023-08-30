import { useReducer } from "react";
import AddToDo from "./components/AddToDo/AddToDo";
import TodoList from "./components/ToDoList/ToDoList";
import TodoContext from "./context/TodoContext";
import TodoReducer from "./reducers/TodoReducer";
import TodoDispatchContext from "./context/TodoDispatchContext.js";

function App() {
  const [list, dispatch] = useReducer(TodoReducer, []);

  return (
    <TodoContext.Provider value={[list]}>
      <TodoDispatchContext.Provider value={{ dispatch }}>
        <h1>Todo App</h1>
        <AddToDo />
        <TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;
