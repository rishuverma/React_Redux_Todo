import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const AddTodo = () => {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (inputVal)
      dispatch(
        addTodo({
          todoTitle: inputVal,
        })
      );
    setInputVal("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex mb-3 ">
        <input
          className="form-control form-control-lg"
          type="text"
          value={inputVal}
          placeholder="Add Todo here..."
          onChange={(event) => setInputVal(event.target.value)}
        ></input>
        <button type="submit" className="btn btn-primary mx-3">
          Add Todo
        </button>
      </form>
    </>
  );
};

export default AddTodo;
