import { useContext, useState } from "react";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function AddToDo() {
  const [inputText, setInputText] = useState("");
  const { dispatch } = useContext(TodoDispatchContext);

  const addTodo = (inputText) => {
    dispatch({ type: "add_todo", payload: { inputText } });
    setInputText("");
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTodo(inputText);
    }
  };
  return (
    <>
      <h1>Add to do </h1>
      <input
        type="text"
        value={inputText}
        placeholder="Enter todo.."
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyPress}
      />
      <button onClick={() => addTodo(inputText)}>Add</button>
    </>
  );
}
export default AddToDo;
