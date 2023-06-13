import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todoSlice";
import {
  useGetTodosQuery,
  useLazyGetRandomTodoQuery,
} from "../features/api/apiSlice";

const AddTodo = () => {
  const todo = useSelector((state: any) => state.todo);
  const inputValRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState(todo.textInInputBox);
  const dispatch = useDispatch();
  const { data, isLoading, isSuccess, isError, error } = useGetTodosQuery();
  const [trigger, randomTodoData] = useLazyGetRandomTodoQuery();

  const numOfTodosToFetch = 3;

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
  const handleChange = (event: any) => {
    setInputVal(event.target.value);
  };
  useEffect(() => {
    if (randomTodoData.isSuccess) {
      console.log("random todo fetch data here", randomTodoData.data);
      dispatch(
        addTodo({
          todoTitle: randomTodoData.data.todo,
          completed: randomTodoData.data.completed,
        })
      );
    }
  }, [randomTodoData.isSuccess, randomTodoData.data]);
  useEffect(() => {
    if (inputValRef.current) inputValRef.current.focus();
    setInputVal(todo.textInInputBox);
  }, [todo.textInInputBox]);
  useEffect(() => {
    if (isSuccess) {
      const modifiedArrayTodos = data.todos.slice(0, numOfTodosToFetch);
      modifiedArrayTodos.map((item: any) => {
        dispatch(
          addTodo({
            todoTitle: item.todo,
            id: item.id,
            completed: item.completed,
          })
        );
      });
    }
    if (isError) console.log("error occured while fetching the data", error);
  }, [isSuccess, data, isError]);

  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex mb-3 ">
        <input
          className="form-control form-control-lg"
          type="text"
          ref={inputValRef}
          value={inputVal}
          placeholder="Add Todo here..."
          onChange={handleChange}
        ></input>
        <button type="submit" className="btn btn-primary mx-3">
          Add Todo
        </button>
        <button className="btn btn-primary" onClick={() => trigger()}>
          Add Random Todo
        </button>
      </form>
      {isLoading ? <div>Loading...</div> : null}
      {isError ? <div>{`following error has occured ${error}`}</div> : null}
    </>
  );
};

export default AddTodo;
