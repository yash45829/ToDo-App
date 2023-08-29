import TodoContext from "../../context/TodoContext";
import { useContext, useState } from "react";

function AddToDo({ updateList }) {
  const [list,setList] = useContext(TodoContext);
  const [inputText, setInputText] = useState("");
  const addTodo = (inputText)=>{
        setList([
          ...list,
          {
            id: list.length + 1,
            todoText: inputText,
            isFinished: false,
          }
        ])
      setInputText('');
  }
  return (
    <>
      <h1>Add to do </h1>
      <input
        type="text"
        value={inputText}
        placeholder="Enter todo.."
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={()=> addTodo(inputText)}>Add</button>
    </>
  );
}
export default AddToDo;
