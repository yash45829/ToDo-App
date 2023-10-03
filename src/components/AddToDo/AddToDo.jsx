import { useState } from "react";

function AddToDo({ addTodo }) {
  // input task
  const [inputText, setInputText] = useState("");

  // calling add todo action
  const addingTodo = (inputText) => {
    console.log(inputText);
    if (inputText !== "") {
      addTodo(inputText);
      setInputText("");
    } else {
      alert("please enter task");
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
      {/* input field  */}
      <input
        type="text"
        value={inputText}
        className=" py-1 px-2 rounded "
        placeholder="Enter todo.."
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyPress}
      />
      {/* button to add task  */}
      <button
        onClick={() => addingTodo(inputText)}
        className="font-semibold text-xl"
      >
        Add
      </button>
    </div>
  );
}
export default AddToDo;
