import { useState } from "react";

function AddToDo({ updateList }) {
  const [inputText, setInputText] = useState("");
  return (
    <>
      <h1>Add to do </h1>
      <input
        type="text"
        value={inputText}
        placeholder="Enter todo.."
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={() => updateList(inputText)}>Add</button>
    </>
  );
}
export default AddToDo;
