import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const AddTodo = () => {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const todoToAdd = {
      todoTitle: inputVal,
    };
    dispatch(addTodo(todoToAdd));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputVal}
          onChange={(event) => setInputVal(event.target.value)}
        ></input>
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default AddTodo;
