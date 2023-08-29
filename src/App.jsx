import { useState } from "react";
import AddToDo from "./components/AddToDo/AddToDo";
import TodoList from "./components/ToDoList/ToDoList";
import TodoContext from "./context/TodoContext";

function App() {
  const [list, setList] = useState([
    { id: 1, todoText: "todo 1", isFinished: false },
    { id: 2, todoText: "todo 2", isFinished: false },
  ]);
  return (
    
    <TodoContext.Provider value={[list,setList]}>
   
      <h1>Todo card app setup</h1>
      <AddToDo
        // updateList={(todo) =>
        //   setList([
        //     ...list,
        //     {
        //       id: list.length + 1,
        //       todoText: todo,
        //       isFinished: false,
        //     },
        //   ])
        // }
      />
      <TodoList
        // list={list}
        // updateList={(updatedList) => setList(updatedList)}
      />
   
    </TodoContext.Provider>
  );
}

export default App;
