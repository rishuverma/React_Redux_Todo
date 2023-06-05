import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, changeTodo } from "../features/todoSlice";

const TodoItem = ({ id, todoTitle, completed }: any) => {
  const dispatch = useDispatch();
  const handleCheckbox = () => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };
  const handleButtonClick = () => {
    dispatch(deleteTodo({ id }));
  };
  const handleChangeClick = () => {
    dispatch(changeTodo({ id }));
  };
  return (
    <>
      <div className={`d-flex m-3 p-3 ${completed && "bg-light"}`}>
        <input
          type="checkbox"
          className="mx-2 form-check-input"
          style={{ height: "25px", width: "25px" }}
          checked={completed}
          onChange={handleCheckbox}
        ></input>
        <span className={`m-2 ${completed && "text-decoration-line-through"}`}>
          {todoTitle}
        </span>
        <button onClick={handleChangeClick} className="btn mx-2 btn-success">
          Change
        </button>
        <button onClick={handleButtonClick} className="btn mx-2 btn-danger">
          Delete
        </button>
      </div>
    </>
  );
};
export default TodoItem;
