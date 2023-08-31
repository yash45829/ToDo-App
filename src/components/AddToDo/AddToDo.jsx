import { useState } from "react";

function AddToDo({ addTodo }) {
  const [inputText, setInputText] = useState("");

  const addingTodo = (inputText) => {
    addTodo(inputText);
    setInputText("");
  };

  // enter key press handler
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addingTodo(inputText);
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
      <button onClick={() => addingTodo(inputText)}>Add</button>
    </>
  );
}
export default AddToDo;
