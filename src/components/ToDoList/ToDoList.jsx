import TodoContext from "../../context/TodoContext.js";
import { useContext } from "react";
import TodoCard from "../ToDoCard/ToDoCard.jsx";
function TodoList() {

const  [list,setList] = useContext(TodoContext);

  return (
    <div>
      <h1>to do list </h1>
      <div>
        {list.map((todo, index) => (
          <div key={index}>
            <TodoCard
              key={index}
              id={todo.id}
              todoText={todo.todoText}
              isFinished={todo.isFinished}
              changeFinished={(isFinished) => {
                const updatedList = list.map((t) => {
                  if (t.id == todo.id) {
                    t.isFinished = isFinished;
                  }
                  return t;
                });
                setList(updatedList);
              }}
            onDelete ={
              ()=>{
               const updatedList =  list.filter((t)=>{
                  return  t.id != todo.id ;
                 })
                 setList(updatedList);
              }
            }
            onEdit = {
              (editText) => {
                const updatedList = list.map((t) => {
                  if (t.id == todo.id) {
                    t.todoText = editText;
                  }
                  return t;
                });
                setList(updatedList);
              }
            }
              
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
