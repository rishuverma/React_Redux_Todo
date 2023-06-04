import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const AllTodo = () => {
  const todo = useSelector((state: any) => state.todo);
  console.log(todo);
  return (
    <>
      <div className="card">
        <div>
          {todo.map((item: any) => (
            <TodoItem
              key={item.id}
              id={item.id}
              todoTitle={item.todoTitle}
              completed={item.completed}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default AllTodo;
