import { Container } from "react-bootstrap";
import AddTodo from "./components/AddTodo";
import AllTodo from "./components/AllTodo";

function App() {
  return (
    <>
      <div className="container">
        <div className="bg-warning text-white p-4 my-4 justify-content-center d-flex rounded">
          <h2>Simple Todo App!</h2>
        </div>
        <AddTodo />
        <AllTodo />
      </div>
    </>
  );
}

export default App;
