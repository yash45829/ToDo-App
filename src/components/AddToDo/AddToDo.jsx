import { useState } from "react";

function AddToDo({ addTodo }) {
  const [inputText, setInputText] = useState("");

  const addingTodo = (inputText) => {
    console.log(inputText)
    if(inputText !== ''){
    addTodo(inputText);
    setInputText("");
    }else{
      alert('please enter task')
    }
  };

  // enter key press handler
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addingTodo(inputText);
    }
  };
  return (
    <div className="flex gap-8 py-4 px-8 border bg-blue-200 rounded-lg">
      {/* <h1>Add to do </h1> */}
      <input
        type="text"
        value={inputText}
        className=" py-1 px-2 rounded "
        placeholder="Enter todo.."
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyPress}
      />
      <button onClick={() => addingTodo(inputText)} className="font-semibold text-xl">Add</button>
    </div>
  );
}
export default AddToDo;
