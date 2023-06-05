import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  textInInputBox: "",
  todoArray: [
    { id: 1, todoTitle: "todo Item 1", completed: false },
    { id: 2, todoTitle: "todo item 2", completed: false },
    { id: 3, todoTitle: "todo item 3", completed: true },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodoObject = {
        id: Date.now(),
        todoTitle: action.payload.todoTitle,
        completed: false,
      };
      state.textInInputBox = "";
      state.todoArray.push(newTodoObject);
    },
    toggleComplete: (state, action) => {
      const itemIndex = state.todoArray.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todoArray[itemIndex].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      const newTodoArray = state.todoArray.filter(
        (item) => item.id !== action.payload.id
      );
      return (state = { textInInputBox: "", todoArray: newTodoArray });
    },
    changeTodo: (state, action) => {
      const itemIndex = state.todoArray.findIndex(
        (item) => item.id === action.payload.id
      );
      const textValue = state.todoArray[itemIndex].todoTitle;
      console.log(textValue);
      state.todoArray.splice(itemIndex, 1);
      state.textInInputBox = textValue;
      return state;
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, changeTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
